import { RootState } from './store';

const selectAllDataFlights = (state: RootState) => state.flights;
const selectFlightPrices = (state: RootState) => state.flights.data.map(el => el.flight.price.total.amount);

export { selectAllDataFlights, selectFlightPrices };
