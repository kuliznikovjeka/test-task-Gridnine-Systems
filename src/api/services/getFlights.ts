import { FlightResponse } from '../types';
import { fakeFetch } from './fakeFetch';

export async function getFlights() {
  try {
    const response: FlightResponse = await fakeFetch();
    return response.result.flights;
  } catch (error) {
    console.error(error);
  }
}
