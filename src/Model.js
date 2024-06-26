
import {useState} from 'react';


function Model() {
  const [file, setFile] = useState()

  function handleChange(event) {   
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
          resolve(setFile(event.target.result));
      };

      reader.onerror = (err) => {
          reject(err);
      };

      reader.readAsBinaryString(event.target.files[0]);
    });
  }
  return (
    <div className="App">
      <form>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange}/>
        <button type="submit">Upload</button>
        {file}
      </form>
    </div>
  );
}

export default Model;
