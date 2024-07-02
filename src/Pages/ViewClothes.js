import { useEffect, useState } from "react"
import { deleteCloth, getClothes } from "../API/Clothes"
import { useNavigate } from "react-router-dom";
import './PagesCSS/ViewClothes.css';
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function GLTFModel({position = [0,0,0], model_url}) {
  const hamburguer = useGLTF(
    model_url['data']
  );
  const scaleOption = 0.2
  return (<group>
    <primitive object={hamburguer.scene} scale={[scaleOption,scaleOption,scaleOption]} position={position}/>
  </group>)
}

function ClothPreview({model_url}){
  return(
    <>
    <Canvas
      className='r3f-preview'
      camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ 0, 2, 4]
      } }
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 0,
        padding: 0
      }}
    >
    
    <Environment preset='city'/>
    <color args = {['#241a1a']} attach='background' />
    <directionalLight></directionalLight>
    <GLTFModel model_url={model_url}/> 
  </Canvas>
  
  </>
  )
}
function Card({clothObject, onClick, onDelete}){
  const modelName = clothObject['Nome do modelo']
  
  return <>
    <div className="ClothCard" >
      <div className="ClothPreview"  onClick={onClick}>
        <ClothPreview model_url={clothObject['Bytes do modelo']} />
      </div>
      <div className="ClothData">
        <div className="Cloth Title">
          <div className="Tooltip">Details</div>
          <h2>{ modelName }</h2>
        </div>
      </div>
      <button onClick={onDelete} className="DeleteButton">Delete</button>
    </div>
  </>
}


export default function ViewClothes(){

  
  const [res, setRes] = useState([]); // Initialize state for the clothes
  const [activeIndex, setActiveIndex] = useState(null); 
  const navigate = useNavigate();
  // Function to handle the fetched data
  const handleClothesData = (cloth) => {
    setRes(prevRes => [...prevRes, cloth]);
  };


  const handleDeleteCloth = (cloth) => {
    const cloth_id = cloth['ID do modelo']
    const response = deleteCloth(cloth_id)
    console.log(response)
    if (response){
      setRes(res.filter((function(obj){
        if (obj['ID do modelo'] != cloth_id)
          return obj
      })))
    }
  }

  useEffect(()=>{
    setRes([])
    const result = getClothes(localStorage.getItem('user_id'),handleClothesData)
    return () =>{
      setRes([])
    }
  },[])


  const handleRedirectView = (modelUrl) => {
    navigate(`/view`, { state: { modelUrl } });
  };
  
  const handleRedirect = () => {
    navigate("/cloth"); // Redirect to /cloth page
  };
  return <>
  <div className="ViewClothes">
    <button onClick={handleRedirect} className="RedirectButton"> +
    </button>
    <div className="ClothesGrid">
    {
      res.map((cloth,index) => {
    
        return <Card 
        key={index}
        clothObject={cloth}
        isActive={index === activeIndex}
        onHover={() => setActiveIndex(index)}
        onLeave={() => setActiveIndex(null)}
        onClick={() =>handleRedirectView(cloth['Bytes do modelo'])}
        onDelete={()=> {handleDeleteCloth(cloth)}}
        ></Card>
      })
    }
    </div>
  </div>
  </>
}