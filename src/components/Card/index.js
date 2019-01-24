import React from "react";
import Style from "./style.css"


class Card extends React.Component {

    render() {
        return (
            <div className={"card " + (this.props.shake ? "shake":"")}  onClick={()=>this.props.updateScore(this.props.id)}>
            {/* <div class="alert alert-primary" role="alert">
               <small>{this.props.gameover}</small> 
            </div> */}
            <img 
            className="" 
            src={this.props.image} 
            alt={this.props.name} />
            
            

            </div>
            
        )
    }

}





export default Card;