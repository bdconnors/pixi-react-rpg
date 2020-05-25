/* eslint no-useless-constructor: 0 */
import * as React from "react";
import {AnimatedSprite, Stage} from "@inlet/react-pixi";

export class Field extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const view = this.props.state.view;
        const player = this.props.state.player;
        player.onScreen = true;
        const spriteSheet = this.props.state.assets.cache["dark-knight"].spritesheet;
        player.setSpritesheet(spriteSheet);
        const textures = player.getTexture();
        return <Stage width={view.width} height={view.height}>
            <AnimatedSprite
                textures={textures}
                initialFrame={0}
                x={player.x}
                y={player.y}
                animationSpeed={0.1}
                isPlaying={player.moving}
            />
        </Stage>
    }
    componentDidMount() {
        this.props.state.assets.cache["melancholy"].sound.play({autoPlay:true,loop:true});
    }
}
export default Field;