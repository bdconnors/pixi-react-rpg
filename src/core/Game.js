import React from "react";
import {connect} from "react-redux";
import {InterfaceRenderer} from "./InterfaceRenderer";
import {StageRenderer} from "./StageRenderer";
/* eslint no-useless-constructor: 0 */
export class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      container:{
        style:{
          position:"relative",
          width:this.props.state.view.width,
          height:this.props.state.view.height
        }
      }
    }
  }
  render(){
    return <div id="container" style={this.state.container.style}>
      <StageRenderer state={this.props.state} dispatch={this.update.bind(this)}/>
      <InterfaceRenderer state={this.props.state} dispatch={this.update.bind(this)}/>
    </div>
  }
  update(action){
    this.props.dispatch(action);
    this.setState({});
  }

}
function mapStateToProps(state){
  console.log(state);
  return {state:state}
}
export default connect(mapStateToProps)(Game);
