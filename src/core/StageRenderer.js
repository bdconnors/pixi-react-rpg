import * as React from "react";
import {Menu} from "../stage/Menu";
import {Stage} from "@inlet/react-pixi";
/* eslint no-useless-constructor: 0 */
export class StageRenderer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const view = this.props.state.view;
        if(this.props.state.stage.current === "load"){
            return <Stage width={view.width} height={view.height}/>
        }else if(this.props.state.stage.current === "menu"){
            return <Menu state={this.props.state} dispatch={this.update.bind(this)}/>
        }else{
            return <div></div>
        }
    }
    update(action){
        this.props.dispatch(action);
        this.setState({});
    }

}
export default StageRenderer;