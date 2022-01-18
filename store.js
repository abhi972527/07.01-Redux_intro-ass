// const { createStore } = require("redux");
import { createStore } from "redux";
import { INC_COUNT, DEC_COUNT } from "./actionTypes.js";
import { reducer } from "./reducer.js"
import { incCount } from "./action.js"


//  1. no global state
//  2. no mutation
//  3. always accept some input, always give some output
//  4. for same input, always output will be same



// const incCountAction = { type: "INC_COUNT", payload: 1 };     //  Fixed, payload optinal

// const addTodoAction = {
//     type: "ADD_TODO",
//     payload: {id: 1, title: "Learn Redux", status: false},
// }   //  Fixed, payload optinal


// //  action types:
// const INC_COUNT = "INC_COUNT";
// const DEC_COUNT = "DEC_COUNT";



// class Store {
//         constructor(reducer, init) {
//             this.reducer = reducer;
//             this.state = init;
//         }

//         getState() {
//             return this.state;
//         }

//         dispatch(action) {
//             this.state = this.reducer(this.state, action)
//         }

//     }

//  pure function
// const reducer = (state, action) => {    //  Fixed
//     if (action.type === "INC_COUNT") {
//         return { ...state, count: state.count + action.payload };
//     }
//     return state;
// };

// const reducer = (state, { type, payload }) => {
//     switch (type) {
//         case "INC_COUNT":
//             return { ...state, count: state.count + payload };
//         case "DEC_COUNT":
//             return { ...state, count: state.count - payload };
//         case "ADD_TODO":
//             return { ...state, todo: [...state.todo, payload] }
//         default:
//             return state;
//     }
// }


// //  action creators: function
// const incCount = (data) => {
//     return {type: INC_COUNT, payload: data}
// }


const init = { count: 0, todo: [] };

export const store = createStore(reducer, init);      //  Fixed

// console.log(store.getState());

// store.dispatch(action)

// store.dispatch(incCount(1))
// store.dispatch(incCount(1))

// console.log(store.getState());

// store.dispatch({ type: DEC_COUNT, payload: 1 })

// console.log(store.getState());


// store.dispatch({ type: INC_COUNT, payload: { title: "Learn Redux", status: false }, });

// console.log(store.getState());
