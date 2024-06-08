import { priceOptions } from './data';

export default function PriceFilter() {
  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Цена</h4>
      <form className="filter__form">
        {priceOptions.map(option => (
          <div key={option.id} className="filter__row filter__row_price">
            <label htmlFor={option.id} className="filter__label">
              {option.label}
            </label>
            <input id={option.id} name={option.name} type="number" className="filter__input" />
          </div>
        ))}
      </form>
    </div>
  );
}
