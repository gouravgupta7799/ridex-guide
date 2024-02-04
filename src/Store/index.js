
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter: true };

const reducerCounterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) { state.counter++ },
    incrementby2(state) { state.counter = state.counter + 2 },
    incrementby5(state) { state.counter = state.counter + 5 },
    decrement(state) { state.counter-- },
    decrementby2(state) { state.counter = state.counter - 2 },
    decrementby5(state) { state.counter = state.counter - 5 },
    increase(state, action) { state.counter = state.counter + action.payload },
    toggleCounter(state) { state.showCounter = !state.showCounter }
  }
})

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: reducerCounterSlice.reducer,
    auth: authSlice.reducer
  }
})

export const counterActions = reducerCounterSlice.actions
export const authActions = authSlice.actions

export default store