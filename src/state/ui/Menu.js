import * as React from "react";
import Card from "react-bootstrap/Card";

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            position:{
                position:"absolute",
                width:this.props.state.view.width * .95,
                height:this.props.state.view.height * .5,
                top:200,
                left:10,
                right:0,
                color:"#fff",
                background: "linear-gradient(to top left, #0000b0 0%, #4949c7 100%)"
            }
        };
    }
    render(){
        return <Card style={this.state.position}>
            <Card.Body>Menu</Card.Body>
        </Card>
    }

}
export default Menu;