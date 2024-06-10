import { useEffect, useState } from 'react';
import { priceOptions } from './data';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectAllDataFlights } from '../../../store/selectors';
import { setedFlightsToRender } from '../../../store/flights/slice';
import { useDebounce } from '../../../hooks/useDebounce';

export default function PriceFilter() {
  const { data, renderData } = useAppSelector(selectAllDataFlights);
  const [priceValues, setPriceValues] = useState({ priceFrom: 0, priceTo: 0 });
  const debouncedSearchByPrice = useDebounce(priceValues, 700);
  const dispatch = useAppDispatch();

  useEffect(() => {
    filteredByPrice();
  }, [debouncedSearchByPrice]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    setPriceValues(prev => ({
      ...prev,
      [id]: Number(value),
    }));
  }

  function filteredByPrice() {
    const { priceFrom, priceTo } = priceValues;

    if (priceFrom === 0 && priceTo === 0) {
      dispatch(setedFlightsToRender(data));
    } else if (priceFrom === 0) {
      const result = renderData.filter(el => Number(el.flight.price.total.amount) <= priceTo);

      dispatch(setedFlightsToRender(result));
    } else if (priceTo === 0) {
      const dataPricesFrom = renderData.filter(el => Number(el.flight.price.total.amount) >= priceFrom);

      const resultByIncrease = dataPricesFrom.sort(
        (a, b) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount),
      );

      dispatch(setedFlightsToRender(resultByIncrease));
    } else {
      const rangeData = renderData.filter(el => {
        const price = Number(el.flight.price.total.amount);
        return price >= priceFrom && price <= priceTo;
      });

      const resultByIncrease = rangeData.sort(
        (a, b) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount),
      );

      dispatch(setedFlightsToRender(resultByIncrease));
    }
  }

  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Цена</h4>
      <form className="filter__form">
        {priceOptions.map(option => (
          <div key={option.id} className="filter__row filter__row_price">
            <label htmlFor={option.id} className="filter__label">
              {option.label}
            </label>
            <input
              autoComplete="off"
              onChange={handleInputChange}
              id={option.id}
              name={option.name}
              type="number"
              className="filter__input"
            />
          </div>
        ))}
      </form>
    </div>
  );
}
