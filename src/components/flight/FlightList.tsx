import { useEffect, useState } from 'react';
import FlightOption from './FlightOption';
import { getFlights } from '../../api/services/getFlights';
import { FlightResult } from '../../api/types';

export default function FlightList() {
  const [flights, setFlights] = useState<FlightResult[] | null>(null);

  useEffect(() => {
    const handleGetFlights = async () => {
      const data = await getFlights();
      if (data) setFlights(data);
    };

    handleGetFlights();
  }, []);

  return (
    <div className="flights">
      {flights && flights.map(data => <FlightOption key={data.flightToken} flight={data.flight} />)}
    </div>
  );
}
