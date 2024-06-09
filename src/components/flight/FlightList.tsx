import { useEffect, useState } from 'react';
import FlightOption from './FlightOption';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAllDataFlights } from '../../store/selectors';
import { setedFlights, setedFlightsToRender, setedIsLoading, showMoreFlights } from '../../store/flights/slice';
import { getFlights } from '../../api/services/getFlights';

const countFlights = 2;

export default function FlightList() {
  const dispatch = useAppDispatch();
  const { renderData, countToShowFlights, isLoading } = useAppSelector(selectAllDataFlights);

  useEffect(() => {
    const handleGetFlights = async () => {
      dispatch(setedIsLoading(true));
      const data = await getFlights();
      dispatch(setedIsLoading(false));

      dispatch(setedFlights(data));
      dispatch(setedFlightsToRender(data));
    };

    handleGetFlights();
  }, [dispatch]);

  function handleClickButton() {
    dispatch(showMoreFlights(countToShowFlights + countFlights));
  }

  return (
    <div className="flights">
      {isLoading ? (
        <p>Загружаем билеты... Подождите немного :)</p>
      ) : renderData ? (
        <>
          {renderData.slice(0, countToShowFlights).map(flightData => (
            <FlightOption key={flightData?.flightToken} flight={flightData?.flight} />
          ))}
          <button className="flights__button" onClick={handleClickButton}>
            Показать ещё
          </button>
        </>
      ) : (
        <p>К сожалению ошибка на сервере...</p>
      )}
    </div>
  );
}
