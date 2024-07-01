import { useState } from "react";
import { uploadCloth } from '../API/Clothes'
import { useNavigate } from "react-router-dom";
import { InputField } from "../Components/InputField.js"
import './PagesCSS/AddClothes.css'
export default function AddClothes(){
  const [file, setFile] = useState()
  const [modelName,setModelName] = useState('');
  const navigate = useNavigate();

  // function handleChange(event) {


  //   const reader = new FileReader();

  //   reader.onload = () =>{
  //     setFile(reader.result)
  //   }
  //   reader.readAsBinaryString(event.target.files[0])

  // }

  function handleSubmit(event) {
    const model_bytes = file
    uploadCloth(1,modelName,model_bytes)
  }


const handleRedirect = () => {
    navigate("/clothes"); // Redirect to /cloth page
  };
  return (
    <div className="ModelForm">
      <button onClick={handleRedirect} className="RedirectClothesButton"> {"<"}
      </button>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Model Upload</h1>
          <input type="text" name="model_name" onChange={e=>setModelName(e.target.value)}/>
          <input type="file" name="model_bytes" onChange={e=>setFile(e.target.files[0])}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}