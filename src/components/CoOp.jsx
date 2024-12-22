import { useState } from "react"
import getData from "../utils/getData";
import React from 'react';
import { Table } from 'antd';
import './Employee.css'

import { ConfigProvider } from 'antd';


const columns = [
    {
      title: 'Employer',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length
     ,
    },
    {
      title: 'Degree',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'City',
      dataIndex: 'address',
     
    },
  
    {
      title: 'Term',
      dataIndex: 'term',
      sorter: (a, b) => a.age - b.age,
    },
  
    
    
  ];
  
  const CoOp = () => {
    const[OpLoaded, setOpLoaded] = useState(false);
    const[OpObj, setOpObj] = useState();
 
 

  React.useEffect(()=>{
   getData('employment/')
   .then((json) =>{
     console.log('Co-Op obj',json)
     setOpObj(json);

     setOpLoaded(true);
     
   })
   
 }, []);

 
    if(!OpLoaded || !OpObj){
        return(
            <>
               
                <h3>...</h3>

            </>
        )
    }

    const coOpObj = OpObj.coopInformation;
    
    const data = OpObj.coopTable.coopInformation.map((coop, Index) =>({    
    
        key: Index.toString(),
        name: coop.employer, // Modify this based on your actual data
        age: coop.degree, // Modify this based on your actual data
        address:coop.city ,
        term: coop.term,
        
    
}));
        
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

     
      


    
    return(
        
        <>

          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  colorPrimary:'red',
                  itemActiveBg:'white',
                  colorBgTextHover:'orange',
                  colorPrimaryHover:'orange',
                  // colorPrimaryBorder:'orange',
                  // colorBorder:'orange',
                  controlOutline:'orange',
                  controlPaddingHorizontal:2,
                  itemInputBg:'orange',
                },
              },
            }}
          >


        <Table columns={columns} dataSource={data} />           







          </ConfigProvider>
        </>
)
}

export default CoOp;