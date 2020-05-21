import * as React from "react";
import {Loading} from "../stage/Loading";
/* eslint no-useless-constructor: 0 */
export class InterfaceRenderer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props);
        if(this.props.state.stage.current === "load"){
            return <Loading state={this.props.state} position="absolute" color = "success" dispatch = {this.props.dispatch}/>
        }else {
            return <div style={{position:"absolute",top:0,left:0,bottom:0,right:0,color:"red"}}></div>
        }
    }
    update(action){
        this.props.dispatch(action);
        this.setState({});
    }
}
export default InterfaceRenderer;
