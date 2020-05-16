import React from "react";
import {Stage, Text} from "@inlet/react-pixi";
import Rectangle from "../component/Rectangle";
import {TextStyle} from "pixi.js";

export class LoadingStage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0,
            total:0,
            progress:0,
            width:0,
            height:0
        };
    }
    update(loader){
        const decimal = (loader.progress / 100);
        const percent = Math.ceil(loader.progress);
        const progress = Math.ceil(this.state.total * decimal);
        this.setState({width:progress,progress:percent});
    }
    render(){
        const view = this.props.gameState.view;
        return <Stage width={view.width} height={view.height}>
            <Text text="Loading..."
                  x={100}
                  y={100}
                  style={
                    new TextStyle({
                        align: 'center',
                        fontFamily: 'Arial',
                        fontSize: 24,
                        fontWeight: 400,
                        fill: '#ffffff'})
                  }/>
            <Rectangle
                fill = {this.state.color}
                x = {this.state.x}
                y = {this.state.y}
                width = {this.state.width}
                height={this.state.height}/>
            <Text text={this.state.progress+"%"}
                  x={100}
                  y={275}
                  style={
                      new TextStyle({
                          align: 'center',
                          fontFamily: 'Arial',
                          fontSize: 24,
                          fontWeight: 400,
                          fill: '#ffffff'})
                  }/>
        </Stage>
    }
    componentDidMount() {
        const view = this.props.gameState.view;
        this.state.total = (view.width - (view.width * .25));
        this.state.width = 0;
        this.state.height = view.height * .15;
        this.state.x = (view.width - this.state.total)/2;
        this.state.y = (view.height - this.state.height)/2;
        this.state.color = 0xFFFFFF;
        this.props.dispatch({type:"QUEUE_ASSETS"});
        this.props.dispatch({type:"LOAD_ASSETS",payload:this.update.bind(this)});
    }
}