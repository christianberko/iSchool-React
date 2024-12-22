import { useState } from "react"
import getData from "../utils/getData";
import React from 'react'
import './Degrees.css'
import { Collapse } from 'antd';
import { ConfigProvider } from 'antd';


  

  




const Graduate = () => {



  const [degLoaded, setDegLoaded] = useState(false);
  const [degObj, setDegObj] = useState();


  
  React.useEffect(()=>{
      getData('degrees/').then((json)=>{
        console.log('degrees',json)   
              setDegObj(json);
              setDegLoaded(true);
              
          })
  }, [])

 

  const onChange = (key) => {
    console.log(key);
  };

  
  
  if(!degLoaded) return (
    <>
        
        <h3>...</h3>
    </>
  )
  const items = [
    {
      key: '1',
      label:<p>{degObj.graduate[0].title}</p>,
      children: 
      <div>
        <strong><p>{degObj.graduate[0].description}</p></strong>
        <br></br>
        <p>{degObj.graduate[0].concentrations[0]}</p>
        <p>{degObj.graduate[0].concentrations[1]}</p>
        <p>{degObj.graduate[0].concentrations[2]}</p>
       
      </div>
      ,
    },
    {
      key: '2',
      label:<p>{degObj.graduate[1].title}</p>,
      children: 
      <div>
        <strong><p>{degObj.undergraduate[1].description}</p></strong>
        <br></br>
        <p>{degObj.graduate[1].concentrations[0]}</p>
        <p>{degObj.graduate[1].concentrations[1]}</p>
        <p>{degObj.graduate[1].concentrations[2]}</p>
        <p>{degObj.graduate[1].concentrations[3]}</p>
        <p>{degObj.graduate[1].concentrations[4]}</p>
        <p>{degObj.graduate[1].concentrations[5]}</p>

      </div>
      ,
    },
    {
      key: '3',
      label: <p>{degObj.graduate[2].title}</p>,
      children: 
      <div>
       <strong><p>{degObj.graduate[2].description}</p></strong>
       <br></br>
        <p>{degObj.graduate[2].concentrations[0]}</p>
        <p>{degObj.graduate[2].concentrations[1]}</p>
        <p>{degObj.graduate[2].concentrations[2]}</p>
        <p>{degObj.graduate[2].concentrations[3]}</p>
        <p>{degObj.graduate[2].concentrations[4]}</p>
        </div>,
    },
  ];
 
  return (
    

    <>
      
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
             contentBg:'rgba(0, 0, 0, 0.02)',
            //  contentPadding: '20px 20px',
             colorBgContainer:'white',
             headerBg:'white',
             
             
             
            },
          },
        }}
      >
  

  
    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
    <br/>
    {/* <h2>Graduate</h2> */}

    

 
  
  


  

  </ConfigProvider>
  

  </>
  )
};
export default Graduate;





    
