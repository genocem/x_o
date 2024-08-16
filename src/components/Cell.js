import React from 'react';
import xImg from '../assets/x.png';
import oImg from '../assets/o.png';
import './cell.css';
export default function Cell({mark, updateBoard}) {
    const handleClick = () => {
        if (mark === "empty") {
            updateBoard();
        }
    }

    return (
        <div className="cell">
            {mark === "empty" ? (
                <button onClick={handleClick}></button>
            ) : mark === "x" ? (
                <img src={xImg} alt="x"  />
            ) : mark === "o" ? (
                <img src= {oImg} alt="o" />
            ) : null}
        </div>
    );
}