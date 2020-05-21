/* eslint no-useless-constructor: 0 */
import * as React from "react";
import {AnimatedSprite,Stage} from "@inlet/react-pixi";

export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slot1:{
                textures:this.props.state.assets.cache["arch-atk"].spritesheet.animations["atk"],
                x:0,
                y:0
            },
            slot2:{
                textures:this.props.state.assets.cache["arch-dash"].spritesheet.animations["dash"],
                x:0,
                y:0
            }
        };
    }
    render(){
        const view = this.props.state.view;
        this.props.state.assets.cache["celestial"].sound.play({autoPlay:true,loop:true});
        return <Stage width={view.width} height={view.height}>
            <AnimatedSprite x={100} y={100} textures = {this.state.slot1.textures} animationSpeed = {0.167} isPlaying={true}/>
            <AnimatedSprite x={100} y={200} textures = {this.state.slot2.textures} animationSpeed = {0.167} isPlaying={true}/>
        </Stage>
    }
}