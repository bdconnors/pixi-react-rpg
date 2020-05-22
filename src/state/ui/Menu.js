import * as React from "react";
import Card from "react-bootstrap/Card";

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style:{
                position:"absolute",
                width:this.props.state.view.width * .5,
                height:this.props.state.view.height * .5,
                top:"25%",
                left:"25%",
                color:"#fff",
                background: "linear-gradient(to top left, #0000b0 0%, #4949c7 100%)"
            },
            borderColor:"light"
        };
    }
    render(){
        return <Card style={this.state.style} border={this.state.borderColor}></Card>
    }

}
export default Menu;