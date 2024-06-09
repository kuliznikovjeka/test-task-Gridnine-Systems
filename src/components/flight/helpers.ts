import { format } from '@formkit/tempo';
import { FlightSegment } from '../../api/types';

function generateUniqueId() {
  return crypto.randomUUID();
}

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
  const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes };
}

function convertTimeToMinutes(hours: number, minutes: number) {
  const minutesInOneHour = 60;
  return hours * minutesInOneHour + minutes;
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

export { calculateFlightDetails, calculateFlightTime, collectDataTogether, generateUniqueId, convertTimeToMinutes };
