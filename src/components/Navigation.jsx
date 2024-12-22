import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import { Menu } from 'antd';
import './Navigation.css'
import { Link } from 'react-scroll';


const items = [
  {
    label :<a href = "#abt">About</a>,
    key: 'mail',
    
  },
  {
    label: <a href = "#deg">Degrees</a>,
    key: 'app',
   
   
  },
  {
    label: <a href = "#min">Minors</a>,
    key: 'SubMenu',
   
    
  },
  {
    label: <a href = "#emp">Employment</a>,
    key: 'emp',
    

  },

  {
    label: <a href = "#pep">People</a>,
    key: 'teachers'
  }
];
const Navigation = () => {

  
  const [current, setCurrent] = useState('mail');
  

  

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
   
  };
  return (
    <>
    <ConfigProvider
  theme={{
    components: {
      Menu: {
       
        colorBgContainer:'#1b1c1d',
        itemColor: 'white',
        // colorText:'white',
        colorPrimary: 'orange',
        fontSize:16,
        itemHoverColor: 'orange'
        
        
        
        


      },
    },
  }}
>
  

    <div class = "header">
      <div className='submenu'>
        {/* <img className= "tiger" src = "../src/assets/tiger.svg"/> */}
        
        <h1>Welcome to the <span class = 'color-I'>i</span>School </h1>

      </div>
     
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    
      
    </div>
    
    </ConfigProvider>
     </>
  );
};
export default Navigation;