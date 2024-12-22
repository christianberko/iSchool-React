//import
import { useState } from "react"
import getData from "../utils/getData";
import React from 'react'
import './People.css'
import PeopleGroup from './PeopleGroup'

import { Tab } from 'semantic-ui-react'


//const People = () => <Tab panes={panes} />




const People = () =>{
    //instance vars kinda (not)

    const [pepLoaded, setPepLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    const panes = [
        
        { menuItem: 'Faculty', render: () => <Tab.Pane><PeopleGroup title = "Faculty" pepGroupObj={pepObj.faculty}/></Tab.Pane> },
        { menuItem: 'Staff', render: () => <Tab.Pane><PeopleGroup title = "Staff" pepGroupObj={pepObj.staff}/></Tab.Pane> },
      
      ]
      
    React.useEffect(()=>{
        getData('people/').then((json)=>{
                setPepObj(json);
                setPepLoaded(true);
            })
    }, [])


    if (!pepLoaded) return(
        <>
            <h1>Our people</h1>
            <h3>Loading....</h3>
        
        </>
    
    
    )

    return(
        <>
        <h1>{pepObj.title}</h1>
        <h3>{pepObj.subtitle}</h3>
        
        <Tab panes = {panes}></Tab>
        </>
    )

}
export default People

