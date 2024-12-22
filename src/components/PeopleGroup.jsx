import React from "react";
import PeopleModal from './PeopleModal'
import { background } from "@chakra-ui/react";
import shadows from "@mui/material/styles/shadows";



const PeopleGroup = ({title, pepGroupObj})=> {
    return(
        <>
        
        <h4>{title}</h4>
        
        <div className="peopleList">
            {pepGroupObj.map((p)=>
                
                <div className="peopleListItem" key={p.username}>
                    <img src = {p.imagePath}/>
                    <div>
                    
                    <PeopleModal {...p} />
                    </div>
                    
                </div>
            )}
        </div>
        
        
        </>
    )
}

export default PeopleGroup