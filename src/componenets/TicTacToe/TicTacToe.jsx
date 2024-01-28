import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../assests/circle.png'
import cross_icon from '../assests/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];



const TicTacToe = () => {
    let [count, setCount ] = useState(0);
    let[lock, setLock] = useState(false);

    let resultref = useRef(null);


    const toggle = (e, num) => {
        if(lock){
            return ;
            //user le win garexi, lock true set garne so that toggle function cannot be executed
        }

        if(count % 2 === 0){
            e.target.innerHTML = `<img src="${circle_icon}" alt="circle-img" />`;
            data[num] = 'O';
            setCount(count = count  + 1);
        }
        else{
            e.target.innerHTML = `<img src="${cross_icon}" alt="cross-img" />`;
            data[num] = 'X';
            setCount(count = count  + 1);
        }

        checkTie();
        checkWin();
        
        
    };

   
    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !==""){
            winner(data[2]);
            
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !==""){
            winner(data[5]);
            
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !==""){
            winner(data[8]);
            
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !==""){
            winner(data[6]);
           
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !==""){
            winner(data[7]);
            
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !==""){
            winner(data[8]);
           
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !==""){
            winner(data[8]);
           
            
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !==""){
            winner(data[5]);
           
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !==""){
            winner(data[6]);
           
        }

        // else {
        //     winner('Tie');
        // }
    };

    const checkTie = () => {
        if (count === 9 ){
            resultref.current.innerHTML = `<h1>It's a Tie</h1>`;
            setLock(true);
        }
    };

    const winner =(player) => {
        setLock(true);

        const winnerElement =  document.querySelector(".winner");
        if (player === 'O'){
            winnerElement.innerHTML = `<img src="${circle_icon}" alt="" />
            <h1> Wins </h1>`;
        }
        else if (player === 'X'){
            winnerElement.innerHTML = `<img src="${cross_icon}" alt="" />
            <h1> Wins </h1>`;
        }
        // else {
        //     winnerElement.innerHTML = <h1>It's a Tie.</h1>
        // }
        

    }

    const reset = () => {

        const boxElement =  document.querySelectorAll(".boxes");
        //it basically returns a list of boxes
        setCount(0);
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];

        resultref.current.innerHTML = "";

        boxElement.forEach((box) => {
            box.innerHTML = "";
        })

    };
    
  return (
    <div className='container'>
        <h1 className="title">
            Tic Tac Toe Game In <span>React</span>
        </h1>

        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 2)}></div>

            </div>

            <div className="row2">
                <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 5)}></div>

            </div>
            
            <div className="row3">
                <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 8)}></div>

            </div>
            
        </div>

        <div className="winner" ref={resultref}>

        </div>
        <button className='reset' onClick={() => reset()}>Reset Game</button>
    </div>
  )
}

export default TicTacToe