import React from 'react'
import './Section.css'
import styledComponents from "styled-components"
function Section({ title,description,LeftBtnText,RightBtnText}) {
  return (
    <>
    < div className="Wrap" 
    >
<div className="ItemText">
    <h1>{title}</h1>
    <p>{description}</p>
</div>
<div className="btns">
<div className="ButtonGroup">
    <div className="LeftButton">
        {LeftBtnText}
    </div>
    <div className="RightButton">
    {RightBtnText}
    </div>
</div>
<DownArrow src='/images/down-arrow.svg'/>
    </div>
    </div>
     < div className="Wrap2" 
     >
 <div className="ItemText">
     <h1>{title}</h1>
     <p>{description}</p>
 </div>
 <div className="btns">
 <div className="ButtonGroup">
     <div className="LeftButton">
         {LeftBtnText}
     </div>
     <div className="RightButton">
     {RightBtnText}
     </div>
 </div>
 <DownArrow src='/images/down-arrow.svg'/>
     </div>
     </div>
     < div className="Wrap3" 
    >
<div className="ItemText">
    <h1>{title}</h1>
    <p>{description}</p>
</div>
<div className="btns">
<div className="ButtonGroup">
    <div className="LeftButton">
        {LeftBtnText}
    </div>
    <div className="RightButton">
    {RightBtnText}
    </div>
</div>
<DownArrow src='/images/down-arrow.svg'/>
    </div>
    </div>
    < div className="Wrap4" 
    >
<div className="ItemText">
    <h1>Lowest Cost Solar Panels In America</h1>
    <p>Money-back guarantee</p>
</div>
<div className="btns">
<div className="ButtonGroup">
    <div className="LeftButton">
        Order Now
    </div>
    <div className="RightButton">
    Learn More
    </div>
</div>
<DownArrow src='/images/down-arrow.svg'/>
    </div>
    </div>
    < div className="Wrap5" 
    >
<div className="ItemText">
    <h1>Solar for New Roofs</h1>
    <p>Money-back guarantee</p>
</div>
<div className="btns">
<div className="ButtonGroup">
<div className="LeftButton">
        Order Now
    </div>

</div>
<DownArrow src='/images/down-arrow.svg'/>
    </div>
    </div>
     </>
  )
}

export default Section
const DownArrow = styledComponents.img`
margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.4s;
curson:pointer;
`
