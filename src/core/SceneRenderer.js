import * as React from "react";
import {Stage} from "@inlet/react-pixi";
import Field from "../component/scene/Field";
/* eslint no-useless-constructor: 0 */
export class SceneRenderer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const view = this.props.state.view;
        if(this.props.state.stage.current === "loadAssets"){
            return <Stage width={view.width} height={view.height}/>
        }else if(this.props.state.stage.current === "field"){
            return <Field state={this.props.state} dispatch={this.update.bind(this)}/>
        }else{
            return <div></div>
        }
    }
    update(action){
        this.props.dispatch(action);
        this.setState(this.props.state);
    }

}
export default SceneRenderer;