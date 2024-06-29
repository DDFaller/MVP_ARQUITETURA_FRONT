import { useEffect, useState } from "react"
import { getClothes } from "../API/Clothes"




function Card({clothObject}){

  const modelName = clothObject['Nome do modelo']
  return <>
    <div className="ClothCard">
      <div className="ClothPreview">

      </div>
      <div className="ClothData">
        <div className="Cloth Title">
          <h1>
            Title</h1>
          <h3>{ modelName }</h3>
          <h3>{ clothObject['Bytes do modelo'] }</h3>
        </div>

      </div>

    </div>
  </>
}


export default function ViewClothes(){

  
  const [res, setRes] = useState([]); // Initialize state for the clothes

  // Function to handle the fetched data
  const handleClothesData = (cloth) => {
    setRes(prevRes => [...prevRes, cloth]);
  };

  useEffect(()=>{
    const result = getClothes(1,handleClothesData)
    return () =>{
      setRes([])
    }
  },[])


  

  return <>
  {
    res.map((cloth,index) => {
      return <Card key={index} clothObject={cloth}></Card>
    })
  }
  </>
}