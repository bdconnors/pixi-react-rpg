/* eslint no-useless-constructor: 0 */
import * as React from "react";
import {AnimatedSprite, Stage} from "@inlet/react-pixi";

export class FieldStage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const view = this.props.state.view;
        const spriteSheet = this.props.state.assets.cache["dark-knight"].spritesheet;
        const animation = spriteSheet.animations["walk-fwd"];
        return <Stage width={view.width} height={view.height}>
            <AnimatedSprite textures={animation} x ={100} y={100} animationSpeed={0.167} isPlaying={true}/>
        </Stage>
    }
    componentDidMount() {
        this.props.state.assets.cache["melancholy"].sound.play({autoPlay:true,loop:true});
    }
}
export default FieldStage;