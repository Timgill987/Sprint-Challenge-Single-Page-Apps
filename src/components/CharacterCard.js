import React from "react";
import {SchwiftyCard, Schwiftybody, Schwiftyname, Schwiftyinfo} from "./styles"



export default function CharacterCard(props) {
 
 
  return(
    <SchwiftyCard>
      <Schwiftybody>
        <Schwiftyname>
        <h1> {props.name}</h1>
        </Schwiftyname>
        <Schwiftyinfo>
        <p>{props.gender}</p>
        <p>{props.species}</p>
        </Schwiftyinfo>
      </Schwiftybody>
    </SchwiftyCard>
    
    
    ) ;
  
};