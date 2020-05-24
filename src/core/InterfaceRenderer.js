import * as React from "react";
import {Loading} from "../stage/Loading";
import LoadBarState from "../state/ui/LoadBarState";
import Panel from "../graphic/Panel";
import MainMenu from "../ui/MainMenu";
/* eslint no-useless-constructor: 0 */
export class InterfaceRenderer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props);
        if(this.props.state.stage.current === "loadAssets"){
            return <Loading state={new LoadBarState(this.props.state.view)}  dispatch={this.props.dispatch}/>
        }else if(this.props.state.stage.current === "selectGame"){
            return <MainMenu state={this.props.state} dispatch={this.props.dispatch}/>
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
