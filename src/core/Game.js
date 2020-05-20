import React from "react";
import {connect} from "react-redux";
import {InterfaceRenderer} from "./InterfaceRenderer";
import {StageRenderer} from "./StageRenderer";
/* eslint no-useless-constructor: 0 */
export class Game extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      style:{
        position:"relative"
      }
    };
  }
  render(){
    return <div style={this.state.style}>
      <StageRenderer state={this.props.state} dispatch={this.props.dispatch}/>
      <InterfaceRenderer state={this.props.state} dispatch={this.props.dispatch}/>
    </div>
  }

}
function mapStateToProps(state){
  console.log(state);
  return {state:state}
}
export default connect(mapStateToProps)(Game);
