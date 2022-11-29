import { useState } from 'react';
import { useEffect } from 'react';
import './Header.css'


export default function Header() {
    const [active, setActive] = useState('');
    useEffect(() => {
        // var headerContainer = document.getElementsByClassName('header');
        var headButtons = document.getElementsByClassName("btn");
        for (var i = 0; i < headButtons.length; i++) {
            headButtons[i].addEventListener('click', function() {
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace('active', '');
                headButtons[i].className += ' active';
            });
        }
    });
   
    return (
        <div className='header'>
            <a className= "btn active" href='/'>Home </a>
            <a className = "btn" href='/GenderStat'>Gender</a>
            <a className = "btn" href='/piechart'>Pie</a>
        </div>
    );
    

}