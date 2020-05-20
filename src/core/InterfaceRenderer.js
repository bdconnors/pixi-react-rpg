import * as React from "react";
/* eslint no-useless-constructor: 0 */
export class InterfaceRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:{
                position:"absolute",
                top:"20px",
                left:"30px",
                color:"#ffffff",
                border:"2px solid white"
            }
        };
    }
    render(){
        return <div id="interface" style={this.state.style}>
            <h1>USER INTERFACE</h1>
        </div>
    }
    update(action){
        this.props.dispatch(action);
        this.setState({});
    }
    componentDidMount() {
        console.log(this.props);
    }

}
export default InterfaceRenderer;
