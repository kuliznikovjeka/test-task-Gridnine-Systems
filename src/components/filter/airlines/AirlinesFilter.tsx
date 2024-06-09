import { useEffect, useState } from 'react';
import { getFlights } from '../../../api/services/getFlights';
import { FlightResult } from '../../../api/types';
import { removeDuplicates } from '../helpers';

export default function AirlinesFilter() {
  const [flights, setFlights] = useState<FlightResult[] | null>(null);
  // const [airlines, setAirlines] = useState<FlightResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleGetFlights = async () => {
      setIsLoading(true);
      const data = await getFlights();
      setIsLoading(false);

      if (data) {
        const uniqData = removeDuplicates(data);
        // setAirlines(uniqData);
        setFlights(uniqData);
      }
    };

    handleGetFlights();
  }, []);

  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Авиакомпании</h4>
      {isLoading ? (
        <p>Загружаем авиакомпании...</p>
      ) : (
        <form className="filter__form airlines-form">
          {flights ? (
            flights.map(data => (
              <div key={data.flightToken} className="filter__row">
                <input id={data.flight.carrier.uid} type="checkbox" className="filter__input" />
                <label htmlFor={data.flight.carrier.uid} className="filter__label">
                  - {data.flight.carrier.caption}
                </label>
              </div>
            ))
          ) : (
            <p>Авиакомпании не найдены :(</p>
          )}
        </form>
      )}
    </div>
  );
}
