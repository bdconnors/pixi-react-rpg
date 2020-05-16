import React from "react";
import {Stage} from "@inlet/react-pixi";
import {connect} from "react-redux";
import {LoadingStage} from "./stage/LoadingStage";


export class Game extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.gameState.stage.current === "load"){
      return <LoadingStage gameState = {this.props.gameState} dispatch={this.props.dispatch}/>
    }else{
      return <Stage gameState = {this.props.gameState} dispatch={this.props.dispatch}/>
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
}
function mapStateToProps(state){
  return {gameState:state}
}
export default connect(mapStateToProps)(Game);
