import React from 'react'
import { Player } from "./Player.js";
import { useEffect } from "react";
export default function Home(props) {
    
    useEffect(() => {
        console.log("Use effect has been called");
        localStorage.setItem("players", JSON.stringify(props.players));
    }, [props.players])

    
return (
    <div>
        {props.players.length === 0 ? "No Players added" :
            props.players.map((player) => {
                return (
                    <Player player={player} />
                )
            })}
        
    </div>
)
}
