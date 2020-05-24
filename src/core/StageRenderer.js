import * as React from "react";
import {SelectGame} from "../stage/SelectGame";
import {Stage} from "@inlet/react-pixi";
import FieldStage from "../stage/FieldStage";
/* eslint no-useless-constructor: 0 */
export class StageRenderer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const view = this.props.state.view;
        if(this.props.state.stage.current === "loadAssets"){
            return <Stage width={view.width} height={view.height}/>
        }else if(this.props.state.stage.current === "selectGame"){
            return <SelectGame state={this.props.state} dispatch={this.update.bind(this)}/>
        }else if(this.props.state.stage.current === "field"){
            return <FieldStage state={this.props.state} dispatch={this.update.bind(this)}/>
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