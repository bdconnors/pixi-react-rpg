import * as React from "react";
import {Loading} from "../component/ui/Loading";
import LoadBar from "../model/LoadBar";

/* eslint no-useless-constructor: 0 */
export class InterfaceRenderer extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        console.log(this.props);
        if(this.props.state.stage.current === "loadAssets"){
            return <Loading state={new LoadBar(this.props.state.view)} dispatch={this.props.dispatch}/>
        }else {
            return <div></div>
        }
    }
    update(action){
        this.props.dispatch(action);
        this.setState(this.props.state);
    }
}
export default InterfaceRenderer;
