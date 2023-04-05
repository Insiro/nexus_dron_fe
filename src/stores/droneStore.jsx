// Redux store 생성
import { createStore } from 'redux';

// 초기 상태 정의
const initialState = {
  buttons: [] // 버튼 정보를 담을 배열
};

// 액션 타입 정의
const ADD_BUTTON = 'ADD_BUTTON';
const SET_SELECTED_BUTTON = 'SET_SELECTED_BUTTON';

// 액션 생성자 함수
export const addButton = (button) => ({
  type: ADD_BUTTON,
  payload: button
});

export const setSelectedButton = (buttonId) => ({
  type: SET_SELECTED_BUTTON,
  payload: buttonId
});

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUTTON:
      return {
        ...state,
        buttons: [...state.buttons, action.payload]
      };
    case SET_SELECTED_BUTTON:
      return {
        ...state,
        selectedButtonId: action.payload
      };
    default:
      return state;
  }
};

// Redux store 생성
const store = createStore(reducer);
export default store;