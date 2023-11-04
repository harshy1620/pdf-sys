import React from 'react'
import '../styles/Upload.css'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Upload = () => {
   const navigate = useNavigate();
   const[pdf,setpdf] = useState();

function convertToBase64(file){
   return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
         resolve(fileReader.result);

      }
      fileReader.onerror = (error)=>{
         reject(error);
      }
   })
}

   const handlePdf=async(e)=>{
      setpdf(await convertToBase64(e.target.files[0]));
   }

   const handleUpload=async()=>{
      try{
         const data=await axios.post("http://localhost:2000/createpdf",{pdf});
      }
      catch(err){
       console.log(err);
      }
   }

  const  handleLogOut=()=>{
   navigate('/');
  }

  return (
        <div className='wrapper'>

        <div className='wrapper-2'>
           <h3 style={{fontSize:"26px"}}>Drop Your <span style={{color: "gold",fontSize:"36px"}}>PDF </span>Here</h3>
            <div className='form'>
               <input type="file" accept=".pdf" onChange={handlePdf}/>
            
               <button onClick={handleUpload}>Upload PDF</button>
            </div>

        </div>

        <div className="button-2" onClick={handleLogOut}>LogOut</div>
    </div>
        


  )
}

export default Upload