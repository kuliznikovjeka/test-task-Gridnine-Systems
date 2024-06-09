import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const flightsSlice = createSlice({
  name: 'flights',
  initialState: initialState,
  reducers: {
    setedFlights(state, action) {
      state.data = action.payload;
    },
    setedFlightsToRender(state, action) {
      state.renderData = action.payload;
    },
    showMoreFlights(state, action) {
      state.countToShowFlights = action.payload;
    },
    setedIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setedFlights, showMoreFlights, setedFlightsToRender, setedIsLoading } = flightsSlice.actions;
export default flightsSlice.reducer;
