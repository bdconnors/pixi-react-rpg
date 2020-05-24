import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
/* eslint no-useless-constructor: 0 */
export class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.state;
    }
    update(loader){
        const percent = Math.ceil(loader.progress);
        this.setState({progress:{current: percent}});
    }
    complete(loader,resources){
        this.props.dispatch({type:"SET_ASSETS",payload:resources});
        this.props.dispatch({type:"SET_STAGE",payload:"field"});
    }
    render(){
        return <div style={this.state.position}>
                <ProgressBar
                    animated = {this.state.animated}
                    variant={this.state.color}
                    now={this.state.progress.current}
                    label={`${this.state.progress.current}%`}
                    max={this.state.progress.max}
                    min={this.state.progress.min}
                />
        </div>

    }
    componentDidMount() {
        const queueAssets = {
            type:"QUEUE_ASSETS"
        };
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