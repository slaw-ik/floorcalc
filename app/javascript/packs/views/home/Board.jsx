import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Board extends React.Component {
  render() {
    return (
      <div className="board" style={{width: `${this.props.width}px`, height: `${this.props.height}px`}}>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board)