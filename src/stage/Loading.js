import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
/* eslint no-useless-constructor: 0 */
export class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style:{
                position:this.props.position,
                top:(this.props.state.view.height-(this.props.state.view.height *.15))/2,
                left:(this.props.state.view.width-(this.props.state.view.width - (this.props.state.view.width * .25)))/2,
                bottom:(this.props.state.view.height-(this.props.state.view.height *.15))/2,
                right:(this.props.state.view.width-(this.props.state.view.width - (this.props.state.view.width * .25)))/2,
            },
            progress: {
                min: 0,
                max: 100,
                current: 0
            }
        };
    }
    update(loader){
        const percent = Math.ceil(loader.progress);
        this.setState({progress:{current: percent}});
    }
    complete(loader,resources){
        this.props.dispatch({type:"SET_ASSETS",payload:resources});
        this.props.dispatch({type:"SET_STAGE",payload:"menu"});
    }
    render(){
        return <div style={this.state.style}>
                <ProgressBar variant={this.props.color}
                             now={this.state.progress.current}
                             max={this.state.progress.max}
                             min={this.state.progress.min}
                             label={`Loading...`}/>
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