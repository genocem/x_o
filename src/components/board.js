import React, {useState} from "react";
import Cell from "./Cell";
import {v4 as uuid} from "uuid";
export default function Board() {
    const [board,setBoard]=useState([[0,0,0],[0,0,0],[0,0,0]]);
    const [player,setPlayer]=useState("x");
    return(
        <div className="board" >
            {board.map((row,i)=>(
                <div className="row" key={uuid()}>
                    {row.map((cell,j)=>(<Cell player={player} setPlayer={setPlayer} key={uuid()} />) 
                )}
                    
                </div>
            ))}
        </div>
    );
};