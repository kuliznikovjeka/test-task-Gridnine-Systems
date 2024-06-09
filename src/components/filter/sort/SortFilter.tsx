import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectAllDataFlights } from '../../../store/selectors';
import { setedFlightsToRender } from '../../../store/flights/slice';
import { FlightResult } from '../../../api/types';
import { priceDecrease, priceIncrease, sortOptions } from './data';
import { sortByDecreasePrice, sortByIncreasePrice } from './helpers';

export default function SortFilter() {
  const { renderData } = useAppSelector(selectAllDataFlights);
  const dispatch = useAppDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.id;
    let sortedFlights: FlightResult[];

    if (selectedOption === priceDecrease) {
      sortedFlights = sortByDecreasePrice(renderData);
      dispatch(setedFlightsToRender(sortedFlights));
    } else if (selectedOption === priceIncrease) {
      sortedFlights = sortByIncreasePrice(renderData);
      dispatch(setedFlightsToRender(sortedFlights));
    }
  };

  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Сортировать</h4>
      <form className="filter__form">
        {sortOptions.map(option => (
          <div key={option.id} className="filter__row">
            <input
              onChange={handleChangeInput}
              id={option.id}
              name={option.name}
              value={option.value}
              type="radio"
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
