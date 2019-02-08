import React from 'react'
import { PromiseProvider } from 'mongoose';



const Card = (props) => {
    // console.log(props); 
    var imageStyling = {
        width: "200px"
    }
    return (
        <div onClick = {props.cardClick} 
            // onClick = {props.click} 
            > 
            <img src = {props.imageUrlBla} 
            style = {imageStyling} data-hasBeenClicked = {props.clickedTrueOrFalse}/>
        </div>
    )
}
// class Card extends React.Component {
//     state = {

        

//     }
//     handleClick = () => {

//     }
//     render() {
//         return (
//             <div>
//                 {/* <img 
//                     onClick={()=>handleClick()}
//                     src = {props.imageUrlBla} 
//                     style = {image} 
//                 /> */}
//             </div>
//         )  
//     }
// }
export default Card;



// Change to class Component extends react.Component
// Inside the card component we need state that determines whether the object is clicked on(true or false)
// Each card needs an onClick function which will setState({click: true})