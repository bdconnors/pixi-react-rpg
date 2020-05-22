/* eslint no-useless-constructor: 0 */
import * as React from "react";
import {Stage} from "@inlet/react-pixi";

export class MainMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const view = this.props.state.view;
        return <Stage width={view.width} height={view.height}></Stage>
    }
    componentDidMount() {
        this.props.state.assets.cache["melancholy"].sound.play({autoPlay:true,loop:true});
    }
}