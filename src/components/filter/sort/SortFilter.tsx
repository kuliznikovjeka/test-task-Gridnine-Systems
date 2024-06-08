import { sortOptions } from './data';

export default function SortFilter() {
  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Сортировать</h4>
      <form className="filter__form">
        {sortOptions.map(option => (
          <div key={option.id} className="filter__row">
            <input id={option.id} name={option.name} value={option.value} type="radio" className="filter__button" />
            <label htmlFor={option.id} className="filter__label">
              - {option.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
