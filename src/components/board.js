import React, { useEffect, useLayoutEffect, useState } from "react";
import Cell from "./Cell";
import { v4 as uuid } from "uuid";
import "./board.css";

export default function Board() {

    const [board, setBoard] = useState([
        ["empty", "empty", "empty"],
        ["empty", "empty", "empty"],
        ["empty", "empty", "empty"]
    ]);
    const [player, setPlayer] = useState("x");
    const [firstMove, setFirstMove] = useState(true);

    const resetGame = () => {
        setBoard([
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"]
        ]);
        setPlayer("x");
        setFirstMove(true);
    }

    useLayoutEffect(() => {
        if (firstMove) {
            setFirstMove(false);
            return;
        }
        if (!firstMove) {
            if (!checkWin(player)) {
                setPlayer(player === "x" ? "o" : "x");
            }
        }
    }, [board]);

    const checkWin = (player) => {
        for (let i = 0; i < 3; i++) {
            if (
                (board[i][0] === player &&
                    board[i][1] === player &&
                    board[i][2] === player) ||
                (board[0][i] === player &&
                    board[1][i] === player &&
                    board[2][i] === player)
            ) {
                alert(`${player} wins!`);
                resetGame();
                return true;
            }
        }
        if (
            (board[0][0] === player &&
                board[1][1] === player &&
                board[2][2] === player) ||
            (board[0][2] === player &&
                board[1][1] === player &&
                board[2][0] === player)
        ) {
            alert(`${player} wins!`);
            resetGame();
            return true;

        }
        if (!board.flat().includes("empty")) {
            alert("It's a draw!");
            resetGame();
            return true;

        }
        return false;
        
    };

    const updateBoard = (row, col, mark) => {
        setBoard(prevBoard => {
            const newBoard = prevBoard.map(r => [...r]);
            newBoard[row][col] = mark;
            return newBoard;
        });
    }

    return (
        <div className="board">
            {board.map((row, i) => (
                <div className="row" key={uuid()}>
                    {row.map((cell, j) => (
                        <Cell
                            className="cell"
                            mark={cell}
                            updateBoard={() => updateBoard(i, j, player)}
                            key={uuid()}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}