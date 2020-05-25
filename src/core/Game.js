import React from "react";
import {connect} from "react-redux";
import {InterfaceRenderer} from "./InterfaceRenderer";
import {SceneRenderer} from "./SceneRenderer";
/* eslint no-useless-constructor: 0 */
export class Game extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('resize', this.resize.bind(this));
  }
  render(){
    return <div id="container" style={{position:"realative"}}>
      <SceneRenderer state={this.props.state} dispatch={this.update.bind(this)}/>
      <InterfaceRenderer state={this.props.state} dispatch={this.update.bind(this)}/>
    </div>
  }
  update(action){
    this.props.dispatch(action);
    this.setState(this.props.state);
  }
  resize(){
    this.update({type:"WINDOW_RESIZE"});
  }

}
function mapStateToProps(state){
  return {state:state}
}
export default connect(mapStateToProps)(Game);
