import { useEffect } from 'react';
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

  if (isLoading) {
    return <p>Загружаем полёты... Пожождите немного :)</p>;
  } else if (!renderData.length) {
    return <p>Ошибка, полёты не найдены!</p>;
  }

  return (
    <div className="flights">
      {renderData.slice(0, countToShowFlights).map(flightData => (
        <FlightOption key={flightData?.flightToken} flight={flightData?.flight} />
      ))}
      <button className="flights__button" onClick={handleClickButton}>
        Показать ещё
      </button>
    </div>
  );
}
