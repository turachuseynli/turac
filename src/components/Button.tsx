import React from "react"
import './Button.scss'
interface Blueprops{
  header:string;
  image:string;
  description:string;
  price:string;
}
const Blue: React.FC <Blueprops> =(props) =>{
  const {header,image,description, price}=props
    return (
        <div className="container">
         <p>product title: {header}</p>
         <img src={image}/>
         <p>Description:{description}</p>
         <p>Price:{price}</p>
        </div>
       );
     };
     export default Blue;
