import { FlightResult } from '../../api/types';

export function removeDuplicates(data: FlightResult[]) {
  const set = new Set();
  return data.filter(childData => {
    const caption = childData.flight.carrier.caption;
    if (set.has(caption)) {
      return false;
    } else {
      set.add(caption);
      return true;
    }
  });
}
