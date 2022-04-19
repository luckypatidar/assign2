import React,{useState} from "react";

import "./chessboard.css";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
  let board = [];
  let size = [];


  function findPossibleMoves( p: number, q: number)
    {
        let n = 8;
        let m = 8;
        // All possible moves of a knight
        let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
        let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
   
   
        // Check if each possible move is valid or not
        for (let i = 0; i < 8; i++) {
   
            // Position of knight after move
            let x = p + X[i];
            let y = q + Y[i];
   
            // count valid moves
            if (x >= 0 && y >= 0 && x < n && y < m){
                console.log(x,y);
            }
        }
    }
    for (let j = 0; j <= verticalAxis.length - 1; j++) {
      for (let i = 0; i < horizontalAxis.length; i++) {
          const number = j + i + 2;
          
          if(number % 2 === 0) {
              board.push(
                  <div className="tile black-tile" onClick={()=>findPossibleMoves(i,j)}>{}</div>
                );
          } else {
              board.push(
                  <div className="tile white-tile" onClick={()=>findPossibleMoves(i,j)}>{}</div>
                );
          }
          
      }
    }
  return <div id="chessboard">{board}</div>;
}