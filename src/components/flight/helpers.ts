import { format } from '@formkit/tempo';
import { FlightSegment } from '../../api/types';

function calculateFlightDetails(flight: FlightSegment) {
  const lang = 'ru';

  const depatureTimeFlight = format(flight?.departureDate, 'HH:mm');
  const departureDateFlight = format(flight?.departureDate, 'D MMM ddd', lang);
  const arrivalTimeFlight = format(flight?.arrivalDate, 'HH:mm');
  const arrivalDateFlight = format(flight?.departureDate, 'D MMM ddd', lang);

  return { depatureTimeFlight, departureDateFlight, arrivalTimeFlight, arrivalDateFlight };
}

function calculateFlightTime(arrivalTime: string, departureTime: string) {
  const arrivalDate: number = new Date(arrivalTime).getTime();
  const departureDate: number = new Date(departureTime).getTime();

  const differenceInMilliseconds = arrivalDate - departureDate;
  return `${Math.floor(differenceInMilliseconds / (1000 * 60 * 60))} ч ${Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60))} мин`;
}

function collectDataTogether(flight: FlightSegment) {
  return {
    depatureTown: flight?.departureCity?.caption,
    depatureAirport: flight?.departureAirport?.caption,
    depatureAirportUid: flight?.departureAirport?.uid,
    arrivalTown: flight?.arrivalCity?.caption,
    arrivalAirport: flight?.arrivalAirport?.caption,
    arrivalAirportUid: flight?.arrivalAirport?.uid,
    calcDataFirstFlight: calculateFlightDetails(flight),
    durationTime: calculateFlightTime(flight?.arrivalDate, flight?.departureDate),
    airline: flight?.airline?.caption,
  };
}

export { calculateFlightDetails, calculateFlightTime, collectDataTogether };
