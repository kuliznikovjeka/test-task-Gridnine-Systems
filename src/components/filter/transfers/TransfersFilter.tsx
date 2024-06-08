import { transfersOptions } from './data';

export default function TransfersFilter() {
  return (
    <div className="filter">
      <h4 className="filter__title filter-title">Фильтровать</h4>
      <form className="filter__form">
        {transfersOptions.map(option => (
          <div key={option.id} className="filter__row">
            <input id={option.id} name={option.name} value={option.value} type="checkbox" className="filter__button" />
            <label htmlFor={option.id} className="filter__label">
              - {option.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
