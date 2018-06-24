import React, {Component} from 'react'
import {connect} from 'react-redux'
export default (ChildComponent) => {
  class ComposedComponent extends Component{
    shouldNavigate(){
      if (!this.props.auth){
        this.props.history.push('/')
      }
    }

    componentDidMount() {
      this.shouldNavigate()
    }

    componentDidUpdate(){
      this.shouldNavigate()

    }

    render(){
      return <ChildComponent {...this.props}/>;
    }
  }
  function mapStateToProps(state) {
    return {auth: state.auth}
  }
  return connect(mapStateToProps)(ComposedComponent);
}
