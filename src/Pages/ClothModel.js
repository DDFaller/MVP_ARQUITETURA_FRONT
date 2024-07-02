import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react"
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { useLocation, useNavigate } from "react-router-dom";
import './PagesCSS/ClothModel.css'



function GLTFModel({position = [0,0,0], model_url}) {
  console.log(model_url)
  const hamburguer = useGLTF(
    model_url
  );
  const scaleOption = 0.2
  console.log(hamburguer)
  return (<group>
    <primitive object={hamburguer.scene} scale={[scaleOption,scaleOption,scaleOption]} position={position}/>
  </group>)
}



export default function ClothModel(){

  const location = useLocation();
  let { modelUrl } = location.state || {};
  
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(modelUrl['data'])}`;

  return <>
    <button onClick={handleBack} className="BackButtonClothes">Back</button>
    <img src={qrCodeUrl} alt="QR Code" className="QrCode" />
    <Canvas
      className='r3f'
      camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ 0, 1, 2]
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

    <OrbitControls/>
    <GLTFModel model_url={modelUrl['data']}/> 
  </Canvas>
  
  </>
}