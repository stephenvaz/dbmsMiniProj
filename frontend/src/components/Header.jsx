
import './Header.css'


const HeaderButton = (props) => {
    const click = () => { 
        className += " active";
    }
    const val = '/' + props.link;
    return <a className= {props.cName} href= {val} onClick={() => {
        click();
    }}>{props.name}</a>
}

export default function Header() {
    
   
    return (
        <div  className='header'>
            <a className= "btn" href='/'>Home </a>
            <a className = "btn" href='/GenderStat'>Gender</a>
            <a className = "btn" href='/piechart'>Pie</a>
            <HeaderButton cName = "btn" link = "crime" name="Crime"/>
            <HeaderButton cName = "btn" link = "budget" name="Budget"/>
            <a className='btn' href='/login' style={{float: "right"}}>Login</a>
        </div>
    );
    

}