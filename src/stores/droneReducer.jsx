// Redux store 생성
import { createStore } from 'redux';
import { createSlice } from "@reduxjs/toolkit"

// 초기 상태 정의
const initialState = {
  buttons: [], // 버튼 정보를 담을 배열
  selectedButton: {}//setSelectedButton했을때 여기에 검색한 droneId에 맞는 값이 저장됨. 
};

export const droneSlice = createSlice({
  name: 'drone',
  initialState,
  reducers: {
    addButton: (state, action) => {
      const buttonInfo = action.payload;
      const isExist = state.buttons.some(button => button.droneId === buttonInfo.droneId);
      if (isExist) {
        alert("이미 존재하는 ID입니다.");
      } else {
        state.buttons = [...state.buttons, action.payload]
        console.log(state.buttons);
      }
    },
    setSelectedButton: (state, action) => {
      const droneId = action.payload;
      state.selectedButton = state.buttons.find(button => button.droneId === droneId);
    }
  }
});

export const { addButton, setSelectedButton } = droneSlice.actions;

export default droneSlice.reducer;

// 액션 타입 정의
// const ADD_BUTTON = 'ADD_BUTTON';
// const SET_SELECTED_BUTTON = 'SET_SELECTED_BUTTON';

// // 액션 생성자 함수
// export const addButton = (button) => ({
//   type: ADD_BUTTON,
//   payload: button
// });

// export const setSelectedButton = (buttonId) => ({
//   type: SET_SELECTED_BUTTON,
//   payload: buttonId
// });

// // 리듀서 함수
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BUTTON:
//       return {
//         ...state,
//         buttons: [...state.buttons, action.payload]
//       };
//     case SET_SELECTED_BUTTON:
//       return {
//         ...state,
//         selectedButtonId: action.payload
//       };
//     default:
//       return state;
//   }
// };

// // Redux store 생성
// const store = createStore(reducer);
// export default store;