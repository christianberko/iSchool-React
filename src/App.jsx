import React,  { useState } from 'react'
import getData from './utils/getData'
import './App.css'
//components
import People from './components/People'
import Navigation from './components/Navigation'
// import Degrees  from './components/Degrees'

import Emp from './components/Employment'
import Degrees from './components/Degrees'
import Graduate from './components/Graduate'
import CoOp from './components/CoOp'

function App() {
  //var
  //const[getter, setter] = useSate(init);
  const[loaded, setLoaded] = useState(false);
  const[aboutObj, setAboutObj] = useState();


  //functions
React.useEffect(()=>{
  getData('about/')
  .then((returnJson) =>{
    console.log('here',returnJson)
    setAboutObj(returnJson);
    setLoaded(true);
  })
  
}, []);


//render

if(!loaded){
 return(


   <>
      <h1>Welcome to the ISchool</h1>
      <h3>Loading...</h3>

  
  </>
 )}


  return (
    <>
      <section className='stick'>

        <nav  >
        <Navigation/> 
         
        </nav>
        
        

       
      </section>
      
      <section className='App'>
        
        <div id ='abt' className='abt-container'>
          
          <section className='About'>
            
            <h2>{aboutObj.title}</h2>
            <h3>{aboutObj.description}</h3>
            <div className='aboutQuote'>
              <h5 className='quote'>{aboutObj.quote}</h5>
              <h5>{aboutObj.quoteAuthor}</h5>
            </div>
          </section>
        </div>
        

        <hr/>

        <div id = 'deg' className='deg-container'>
          <h1>Our Degrees</h1>
          <h2>Undergraduate</h2>
          <Degrees/>
          <Graduate/>


        </div>
        <div className='emp'>
          <h1 id = 'min'>Minors</h1>
          <hr/>
          {/* <Minors/> */}
        </div>
        
        <div className="emp">
          <Emp/>
          <CoOp/>
        </div>
        
        
        <section id = 'pep'>
        <People/>
        </section>
        
        </section>

    </>
  )
};

export default App
