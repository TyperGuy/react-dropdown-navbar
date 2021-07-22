import React,{useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {

  const [click,setClick]= useState(false);
  const handleClick = () => setClick(!click)
  return(
    <>
      <ul onClick={handleClick}
      className={click?'dropdown-menu clicked':'dropdown-menu'}>
        {MenuItems.map((item,index)=>{

          return(
              <li key={index}>
                <link className={item.cName} 
                to={item.path} 
                onclick={()=>setClick(false)}>
                  {item.title}
                </link>
              </li>
          )
        })}
      </ul>
    </>
  )

  
}
export default Dropdown;