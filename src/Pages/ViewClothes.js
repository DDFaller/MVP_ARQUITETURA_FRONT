import { useEffect, useState } from "react"
import { getClothes } from "../API/Clothes"
import { useNavigate } from "react-router-dom";
import './PagesCSS/ViewClothes.css';



function Card({clothObject}){

  const modelName = clothObject['Nome do modelo']
  return <>
    <div className="ClothCard">
      <div className="ClothPreview">

      </div>
      <div className="ClothData">
        <div className="Cloth Title">
          <div className="Tooltip">Details</div>
          <h2>{ clothObject['Bytes do modelo'] }</h2>
          <h2>{ modelName }</h2>
        </div>

      </div>

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

  useEffect(()=>{
    //const result = getClothes(1,handleClothesData)
    setRes([
      {'Bytes do modelo':'exemplo1','Nome do modelo':'nome exemplo1'},
      {'Bytes do modelo':'exemplo2','Nome do modelo':'nome exemplo2'},
      {'Bytes do modelo':'exemplo3','Nome do modelo':'nome exemplo3'},
      {'Bytes do modelo':'exemplo4','Nome do modelo':'nome exemplo4'},
    
    ])
    return () =>{
      setRes([])
    }
  },[])


  


  
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
        ></Card>
      })
    }
    </div>
  </div>
  </>
}