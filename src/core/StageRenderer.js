import * as React from "react";
import {Loading} from "../stage/Loading";
import {Menu} from "../stage/Menu";
/* eslint no-useless-constructor: 0 */
export class StageRenderer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.state.stage.current === "load"){
            return <Loading state={this.props.state} dispatch={this.update.bind(this)}/>
        }else if(this.props.state.stage.current === "menu"){
            return <Menu state={this.props.state} dispatch={this.update.bind(this)}/>
        }else{
            return <div></div>
        }
    }
    update(action){
        this.props.dispatch(action);
        this.setState({});
    }

}
export default StageRenderer;