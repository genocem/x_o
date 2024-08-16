
import React, { useState } from 'react';

export default function Cell({ player, setPlayer }) {
    const [mark, setMark] = useState("empty");
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const checkWin = (player) => {

    }
    const handleClick = () => {
        if (player === "x" && mark === "empty") {
            setMark("x");
            checkWin("x");
            setPlayer("o");
        }
        else if (player === "o" && mark === "empty") {
            setMark("o");
            checkWin("o");
            setPlayer("x");
        }


    }
    return (
        <div className="cell" >
{            mark==="empty" ?
            (<button onClick={handleClick}></button>) :
            mark==="x" ?
            <img src="../assets/x.png" alt="x" /> :
            mark==="o" ?
            <img src="../assets/o.png" alt="o" /> : null
}
        </div>
    );
};