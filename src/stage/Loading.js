import React from "react";
import {Stage, Text} from "@inlet/react-pixi";
import Rectangle from "../graphic/Rectangle";
import {TextStyle} from "pixi.js";
/* eslint no-useless-constructor: 0 */
export class Loading extends React.Component{
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
        this.setState({width: progress, progress: percent});
    }
    complete(loader,resources){
        this.props.dispatch({type:"SET_ASSETS",payload:resources});
        this.props.dispatch({type:"SET_STAGE",payload:"menu"});
    }
    render(){
        const view = this.props.state.view;
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
        let state = {};
        const view = this.props.state.view;
        state.total = (view.width - (view.width * .25));
        state.width = 0;
        state.height = view.height * .15;
        state.x = (view.width - state.total)/2;
        state.y = (view.height - state.height)/2;
        state.color = 0xFFFFFF;
        this.setState(state);
        const queueAssets = {type:"QUEUE_ASSETS"};
        const loadAssets = {
            type:"LOAD_ASSETS",
            payload:{
                update:this.update.bind(this),
                complete:this.complete.bind(this)
            }
        };
        this.props.dispatch(queueAssets);
        this.props.dispatch(loadAssets);
    }
}