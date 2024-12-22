//import
import { useState } from "react"
import getData from "../utils/getData";
import React from 'react'
import Minors from "./Minors";

const MinorContainer = () =>{
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
    {/* <h1>{pepObj.title}</h1>
    <h3>{pepObj.subtitle}</h3>
     */}
    <div>
    <Minors minObj={minObj} />
    <p>hey</p>
    </div>
    
    </>
)







}
export default MinorContainer;