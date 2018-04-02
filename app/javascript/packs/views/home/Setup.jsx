import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
  setBoardCount,
  setBoardHeight,
  setBoardWidth,
  setCutFirstBoard,
  setFirstBoardWidth,
  setMinBoardWidth,
  setRoomHeight,
  setRoomWidth
} from "../../actions";

class Setup extends React.Component {
  render() {
    return (
      <div className="setup-section">
        <label>
          Room width:
          <input
            type="number"
            value={this.props.roomWidth}
            onChange={(e) => this.props.setRoomWidth(e.target.value)}
          />
        </label>
        <label>
          Room height:
          <input
            type="number"
            value={this.props.roomHeight}
            onChange={(e) => this.props.setRoomHeight(e.target.value)}
          />
        </label>
        <label>
          Board width:
          <input
            type="number"
            value={this.props.boardWidth}
            onChange={(e) => this.props.setBoardWidth(e.target.value)}
          />
        </label>
        <label>
          Board height:
          <input
            type="number"
            value={this.props.boardHeight}
            onChange={(e) => this.props.setBoardHeight(e.target.value)}
          />
        </label>
        <label>
          Boards count:
          <input
            type="number"
            value={this.props.boardCount}
            onChange={(e) => this.props.setBoardCount(e.target.value)}
          />
        </label>
        <label>
          Cut first board:
          <input
            type="checkbox"
            checked={this.props.cutFirstBoard}
            onChange={(e) => this.props.setCutFirstBoard(e.target.checked)}
          />
        </label>
        <label>
          First board width:
          <input
            disabled={!this.props.cutFirstBoard}
            type="number"
            value={this.props.firstBoardWidth}
            onChange={(e) => this.props.setFirstBoardWidth(e.target.value)}
          />
        </label>
        <label>
          Min board width:
          <input
            type="number"
            value={this.props.minBoardWidth}
            onChange={(e) => this.props.setMinBoardWidth(e.target.value)}
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boardCount: state.boardCount,
  boardHeight: state.boardHeight,
  boardWidth: state.boardWidth,
  roomHeight: state.roomHeight,
  roomWidth: state.roomWidth,
  cutFirstBoard: state.cutFirstBoard,
  firstBoardWidth: state.firstBoardWidth,
  minBoardWidth: state.minBoardWidth
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setBoardCount,
    setBoardHeight,
    setBoardWidth,
    setRoomHeight,
    setRoomWidth,
    setCutFirstBoard,
    setFirstBoardWidth,
    setMinBoardWidth
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Setup)