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
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
      
    // ],

        
    sorter: (a, b) => a.name.length - b.name.length,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Degree',
    dataIndex: 'age',
    sorter: (a, b) => a.age.length - b.age.length,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'City',
    dataIndex: 'address',
   
  },

  {
    title: 'Title',
    dataIndex: 'title',
   
  },

  {
    title: 'Start Date',
    dataIndex: 'date',
    sorter: (a, b) => a.date - b.date,
  },
  
];

const Emp = () => {
  
    const[empLoaded, setEmpLoaded] = useState(false);
    const[empObj, setEmpObj] = useState();
 
 

  React.useEffect(()=>{
   getData('employment/')
   .then((returnJson) =>{
     console.log('emp',returnJson)
     setEmpObj(returnJson);

     setEmpLoaded(true);
     
   })
   
 }, []);

 
    if(!empLoaded || !empObj){
        return(
            <>
                <h1>Employers</h1>
                <h3>Loading...</h3>

            </>
        )
    }

    const empInfo = empObj.employmentTable.professionalEmploymentInformation;
    const stats  = empObj.degreeStatistics.statistics;
    const employers = empObj.employers;
    const data = empInfo.map((coop, Index) =>({    
    
        key: Index.toString(),
        name: coop.employer, // Modify this based on your actual data
        age: coop.degree, // Modify this based on your actual data
        address:coop.city ,
        title: coop.title,
        date: coop.startDate
    
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
        
            <h1 id = "emp">Employment information</h1>
            <hr/>
            <div>
                <h2>Degree Statistics</h2>
                <div className="stats-container">
                {stats.map((s)=>

                <div className="stat-card">
                    <strong>
                        <p>{s.value}</p>
                        </strong>
                    <p>{s.description}</p>
                    
                </div>
                
                ) }
                </div>
                
            </div>
            <h2>Employers</h2>
            <div className="employer-container">
              
                  {empObj.employers.employerNames.map((e)=>
                   <div className="employer-card">
                    <p>{e}</p>
                   </div>
                  
                  )}
                 
              <div>

              </div>
            </div>
            <h2>{empObj.careers.title}</h2>         
            <div className="employer-container">
            {empObj.careers.careerNames.map((c)=>
                   <div className="employer-card">
                    <p>{c}</p>
                   </div>
                  
                  )}

            </div>

                
            <h4>{empObj.introduction.title}</h4>
            <hr/>
            <h2>Our Employment</h2>
            <div className="empQ"> 
              <p>{empObj.introduction.content[0].description}</p>
            </div>
           
            <Table columns={columns} dataSource={data}  
   />
            <hr/>
            <h2>{empObj.introduction.content[1].title}</h2>
            <div className = "empQ">
              <p>{empObj.introduction.content[1].description}</p>
            </div>

            
        
        </ConfigProvider>
        </>
        
    )
  


}

export default Emp;

