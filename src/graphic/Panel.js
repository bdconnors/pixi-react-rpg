import * as React from "react";
import Card from "react-bootstrap/Card";

export class Panel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style:{
                position:"absolute",
                width:this.props.state.view.width * this.props.wScale,
                height:this.props.state.view.height * this.props.hScale,
                top:this.props.top,
                left:this.props.left,
                color:this.props.state.ui.panel.textColor,
                background:this.props.state.ui.panel.background
            },
            borderColor:this.props.state.ui.panel.borderColor
        };
    }
    render(){

        return <Card style={this.state.style} border={this.state.borderColor}>
            {this.props.options.map((option,i)=>(<Card.Text key={i}>{option}</Card.Text>))}
        </Card>
    }

}
export default Panel;