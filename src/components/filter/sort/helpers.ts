import { FlightResult } from '../../../api/types';
import { calculateFlightTime, convertTimeToMinutes } from '../../flight/helpers';

function sortByDecreasePrice(data: FlightResult[]) {
  const dataCopy = Array.from(data);

  return dataCopy.sort((a, b) => {
    const priceA = parseInt(a.flight.price.total.amount);
    const priceB = parseInt(b.flight.price.total.amount);

    return priceB - priceA;
  });
}

function sortByIncreasePrice(data: FlightResult[]) {
  const dataCopy = Array.from(data);

  return dataCopy.sort((a, b) => {
    const priceA = parseInt(a.flight.price.total.amount);
    const priceB = parseInt(b.flight.price.total.amount);

    return priceA - priceB;
  });
}

// function sortByTravelTime(data: FlightResult[]) {
//   const dataCopy = Array.from(data);

//   const arrivalDate1 = dataCopy[0].flight.legs[0].segments[0].arrivalDate;
//   const departureDate1 = dataCopy[0].flight.legs[0].segments[0].departureDate;
//   const arrivalDate2 = dataCopy[1].flight.legs[1].segments[1].arrivalDate;
//   const departureDate2 = dataCopy[1].flight.legs[1].segments[1].departureDate;

//   const time1 = calculateFlightTime(arrivalDate1, departureDate1);
//   const time2 = calculateFlightTime(arrivalDate2, departureDate2);

//   return dataCopy.sort((a, b) => {
//     const durationA = convertTimeToMinutes(a.flight.legs[0].duration.hours, a.flight.legs[0].duration.minutes);
//     const durationB = convertTimeToMinutes(b.flight.legs[0].duration.hours, b.flight.legs[0].duration.minutes);

//     return durationA - durationB;
//   });
// }

export { sortByDecreasePrice, sortByIncreasePrice };
