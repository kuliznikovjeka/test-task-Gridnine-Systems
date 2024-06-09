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
      {flights &&
        flights.map(data => (
          <FlightOption
            key={data?.flightToken}
            price={data?.flight?.price?.total}
            carrier={data?.flight?.carrier?.caption}
            fromCity={data?.flight?.legs[0]?.segments[0]?.departureCity?.caption}
            toCity={data?.flight?.legs[0]?.segments[0]?.arrivalCity?.caption}
            fromAiport={data?.flight?.legs[0]?.segments[0]?.departureAirport}
            toAiport={data?.flight?.legs[0]?.segments[0]?.arrivalAirport}
          />
        ))}
    </div>
  );
}
