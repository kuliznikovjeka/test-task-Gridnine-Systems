import { useState } from 'react';
import { transfersOptions } from './data';
import { selectAllDataFlights } from '../../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setedFlightsToRender } from '../../../store/flights/slice';

export default function TransfersFilter() {
  // const [airlines, setAirlines] = useState<string[]>([]);
  // const { data } = useAppSelector(selectAllDataFlights);
  // const dispatch = useAppDispatch();

  // function filteredByAirlines() {
  //   const newData = data.filter(el => airlines.includes(el.flight.carrier.caption));
  //   dispatch(setedFlightsToRender(newData));
  // }

  // console.log(airlines);

  // function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
  //   const airline = event.target.value;
  // }

  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Фильтровать</h4>
      <form className="filter__form">
        {transfersOptions.map(option => (
          <div key={option.id} className="filter__row">
            <input
              // onChange={handleChangeInput}
              id={option.id}
              name={option.name}
              value={option.value}
              type="checkbox"
              className="filter__button"
            />
            <label htmlFor={option.id} className="filter__label">
              - {option.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
