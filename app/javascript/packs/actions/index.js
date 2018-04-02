export const setBoardCount = (boardCount) => (dispatch) => {
  dispatch({
    type: 'SET_BOARD_COUNT',
    payload: boardCount
  })
};

export const setBoardHeight = (boardHeight) => (dispatch) => {
  dispatch({
    type: 'SET_BOARD_HEIGHT',
    payload: boardHeight
  })
};

export const setBoardWidth = (boardWidth) => (dispatch, getState) => {
  if (!getState().cutFirstBoard) dispatch(setFirstBoardWidth(boardWidth));

  dispatch({
    type: 'SET_BOARD_WIDTH',
    payload: boardWidth
  })
};

export const setCutFirstBoard = (cutFirstBoard) => (dispatch) => {
  dispatch({
    type: 'SET_CUT_FURST_BOARD',
    payload: cutFirstBoard
  })
};

export const setFirstBoardWidth = (firstBoardWidth) => (dispatch) => {
  dispatch({
    type: 'SET_FIRST_BOARD_WIDTH',
    payload: firstBoardWidth
  })
};

export const setMinBoardWidth = (minBoardWidth) => (dispatch) => {
  dispatch({
    type: 'SET_MIN_BOARD_WIDTH',
    payload: minBoardWidth
  })
};

export const setRoomHeight = (roomHeight) => (dispatch) => {
  dispatch({
    type: 'SET_ROOM_HEIGHT',
    payload: roomHeight
  })
};

export const setRoomWidth = (roomWidth) => (dispatch) => {
  dispatch({
    type: 'SET_ROOM_WIDTH',
    payload: roomWidth
  })
};
