import { useState } from "react"
import getData from "../utils/getData";
import React from 'react'
import ModalExampleModal from "./MinorsModal";

const Minors = ()=>{

    const[minLoaded, setminLoaded] = useState(false);
    const[minObj, setminObj] = useState();
 
 

  React.useEffect(()=>{
   getData('minors/')
   .then((returnJson) =>{
     console.log('Minors',returnJson)
     setminObj(returnJson);

     setminLoaded(true);
     
   })
   
 }, []);
 if (!minLoaded) return(
    <>
        <h1>Minors</h1>
        <h3>Loading....</h3>
    
    </>
 )

    return(
        <>
        <div>
            {minObj.map((p)=>

            <div>
                <ModalExampleModal {...p}/>
            </div>
            
            
            )}
        </div>
        
        </>
    )
}

export default Minors;