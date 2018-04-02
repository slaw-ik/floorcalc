import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';

import Board from "./Board";
import {setBoardCount, setBoardHeight, setBoardWidth, setRoomHeight, setRoomWidth} from "../../actions";

class Room extends React.Component {

  renderBoards() {
    let stock = _.times(this.props.boardCount, () => this.props.boardWidth);
    stock[0] = this.props.firstBoardWidth;
    let rowLength = 0;
    let floor = [];

    while (stock.length > 0) {
      const board = stock.shift();

      rowLength = rowLength + board;

      const part1 = this.props.roomWidth - (rowLength - board);
      const part2 = rowLength - this.props.roomWidth;

      if ((rowLength <= this.props.roomWidth) || (part1 < this.props.minBoardWidth)) {
        const title = board != this.props.boardWidth ? board : '';

        floor.push(<Board height={this.props.boardHeight} width={board} title={title}/>)
      } else {
        floor.push(<Board height={this.props.boardHeight} width={part1} title={part1}/>);
        rowLength = 0;

        if (part2 >= this.props.minBoardWidth) {
          rowLength = part2;
          floor.push(<Board height={this.props.boardHeight} width={part2} title={part2}/>);
        }
      }
    }

    return floor;
  }

  render() {
    return (
      <div className="room" style={{width: `${this.props.roomWidth}px`, height: `${this.props.roomHeight}px`}}>
        {this.renderBoards()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boardCount: parseInt(state.boardCount),
  boardHeight: parseInt(state.boardHeight),
  boardWidth: parseInt(state.boardWidth),
  roomHeight: parseInt(state.roomHeight),
  roomWidth: parseInt(state.roomWidth),
  firstBoardWidth: parseInt(state.firstBoardWidth),
  minBoardWidth: parseInt(state.minBoardWidth)
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setBoardCount,
    setBoardHeight,
    setBoardWidth,
    setRoomHeight,
    setRoomWidth
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Room)