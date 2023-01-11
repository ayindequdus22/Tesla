import React from 'react'
import styledComponents from "styled-components"
import './Header.css'
import { useState } from "react"

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="images/logo.svg" alt="" />
      </a>
      <Menu>
     <a href="#">Model S</a>
      <a href="#">Model 3</a>
    <a href="#">Model X</a>
     <a href="#">Model Y</a>
            </Menu>
<RightMenu>
  <a href="">Shop</a>
  <a href="">Tesla Account</a>
  <div className='Icon' onClick={()=> setBurgerStatus(true )}>
 <div className="icon icon1"></div>
 <div className="icon"></div>
 <div className="icon"></div>
  </div>
</RightMenu>
{/* <BurgerNav show={burgerStatus}>
  <Closetag className='close' onClick={()=>{setBurgerStatus(true)}}>X</Closetag>
<li><a href="">Existing Inventory</a></li>
<li><a href="">USed Inventory</a></li>
<li><a href="">Trade-in</a></li>
<li><a href="">Roadaster</a></li>
<li><a href="">Existing Inventory</a></li>
<li><a href="">Existing Inventory</a></li>
</BurgerNav> */}
    </Container>
  )
}

export default Header
const Container = styledComponents.div`
min-height:60px;
position:fixed;
display:flex;
top:0;
left:0;
right:0;
align-items:center;
justify-content:space-between;
padding:0 20px;
z-index:1;
`
const Menu = styledComponents.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap: nowrap; 
}
@media(max-width:768px){
  display:none;
}
`
const RightMenu = styledComponents.div`
display:flex;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap: nowrap; 
}`
const BurgerNav =styledComponents.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
transform :$(props => props.show ? 'translateX(100%)' : 'translateX(0 )')
li{
padding:15px 0;
border-bottom:1px solid rgba(0,0,0,.2);
a{
  font-weight:600;

}
}
`
const Closetag = styledComponents.div``