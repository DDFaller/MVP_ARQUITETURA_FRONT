import { useState } from "react";
import { uploadCloth } from '../API/Clothes'

import { InputField } from "../Components/InputField.js"

export default function AddClothes(){
  const [file, setFile] = useState()
  const [modelName,setModelName] = useState('');
  

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

  return (
    <div className="ModelForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Model Upload</h1>
          <input type="text" name="model_name" onChange={e=>setModelName(e.target.value)}/>
          <input type="file" name="model_bytes" onChange={e=>setFile(e.target.files[0])}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}