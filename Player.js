import React from 'react'

export const Player = (props) => {
    return (
        <div>
        
               <div className = "text-light " key = {props.player.name}>
                
            <h2 className = "text-center"> {props.player.name}</h2>
           <p className = "text-light">{props.player.description}</p>
            <img className = "flex-center" src = {props.player.photo} width = "800px" height = "550px" alt = "Image of the Player"></img>
            <hr/>
        </div>
           )
   
         
         </div>
       
    )
}
