import flightsData from '../flights.json';
import { FlightResponse } from '../types';

export function fakeFetch(): Promise<FlightResponse> {
  return new Promise<FlightResponse>(resolve => {
    setTimeout(() => {
      resolve(flightsData as unknown as FlightResponse);
    }, 1000);
  });
}
