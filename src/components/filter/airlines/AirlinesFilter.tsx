import { useEffect, useState } from 'react';
import { getFlights } from '../../../api/services/getFlights';
import { FlightResult } from '../../../api/types';
import { removeDuplicates } from '../helpers';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectAllDataFlights } from '../../../store/selectors';
import { setedFlightsToRender, setedIsLoading } from '../../../store/flights/slice';

export default function AirlinesFilter() {
  const [flights, setFlights] = useState<FlightResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useAppSelector(selectAllDataFlights);
  const [airlines, setAirlines] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleGetFlights = async () => {
      setIsLoading(true);
      const data = await getFlights();
      setIsLoading(false);

      if (data) {
        const uniqData = removeDuplicates(data);
        setFlights(uniqData);
      }
    };

    handleGetFlights();
  }, []);

  useEffect(() => {
    if (!airlines.length) {
      const handleGetFlights = async () => {
        dispatch(setedIsLoading(true));
        const data = await getFlights();
        dispatch(setedIsLoading(false));

        dispatch(setedFlightsToRender(data));
      };

      handleGetFlights();
    }

    filteredByAirlines();
  }, [airlines]);

  function filteredByAirlines() {
    const newData = data.filter(el => airlines.includes(el.flight.carrier.caption));
    dispatch(setedFlightsToRender(newData));
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const airline = event.target.value;

    if (event.target.checked) {
      setAirlines(prev => [...prev, airline]);
    } else {
      setAirlines(prev => prev.filter(el => el !== airline));
    }
  }

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
                <input
                  onChange={handleChangeInput}
                  id={data.flight.carrier.uid}
                  value={data.flight.carrier.caption}
                  type="checkbox"
                  className="filter__input"
                />
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
