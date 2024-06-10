import { FlightResult } from '../../../api/types';

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

export { sortByDecreasePrice, sortByIncreasePrice };
