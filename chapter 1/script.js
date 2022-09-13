const initialState = {
    value: 5,
};

// action identifiers

const INCEREMENT = 'increment';
const DECREMENT  = 'decrement';

// select dom elements

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");


// action creator
const increment = (val) => {
    return ({
        type: INCEREMENT,
        payload: val,
    });
};

const decrement = (val) => {
    return ({
        type: DECREMENT,
        payload: val,
    }); 
};
//create reducer Function

function counterReducer(state = initialState, action){
    if (action.type ===INCEREMENT){
        return {...state,
        value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT){
        return {...state,
            value: state.value - action.payload ,
            };
    }
    else return state;
}


//create store

const store = Redux.createStore(counterReducer);

const render =() => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}


render();

store.subscribe(render);

incrementEl.addEventListener("click", ()=> {
    store.dispatch(increment(2));
});

decrementEl.addEventListener("click", ()=> {
    store.dispatch(decrement(4));
});
console.log (initialState.value);
// button click Listeners

// // select dom elements
// const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");

// const counter2El = document.getElementById("counter2");
// const increment2El = document.getElementById("increment2");
// const decrement2El = document.getElementById("decrement2");

// // initial state
// let count = 0;
// let count2 = 0;

// // event listeners
// incrementEl.addEventListener("click", () => {
//     count++;
//     counterEl.innerText = count;
// });

// decrementEl.addEventListener("click", () => {
//     count--;
//     counterEl.innerText = count;
// });

// increment2El.addEventListener("click", () => {
//     count2++;
//     counter2El.innerText = count2;
// });

// decrement2El.addEventListener("click", () => {
//     count2--;
//     counter2El.innerText = count2;
// });
