import { FlightResult } from '../../api/types';
import { collectDataTogether, generateUniqueId } from './helpers';
import iconClock from '../../assets/icons/clock.svg';
import iconArror from '../../assets/icons/arrow.svg';
import logo from '../../assets/logo-company.png';

export default function FlightOption(props: FlightResult) {
  const { flight } = props;
  const priceObj = flight.price.total;

  const firstFlight = flight.legs[0].segments[0];
  const secondFlight = flight.legs[0].segments[1];

  const allDataFirstFlight = collectDataTogether(firstFlight);
  const allDataSecondFlight = collectDataTogether(secondFlight);

  const dataFlightDetails = [allDataFirstFlight, allDataSecondFlight];

  const price = `${priceObj.amount}  ${priceObj.currency}`;
  const transfers = flight.legs.length - 1;

  return (
    <article className="flight-option">
      <div className="flight-option__top top-flight-option">
        <img src={logo} className="top-flight-option__logo" alt="Логотип авиакомпании"></img>
        <div className="top-flight-option__box">
          <span className="top-flight-option__price">{price}</span>
          <p className="top-flight-option__description">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      {dataFlightDetails.map(detail => (
        <div key={generateUniqueId()} className="flight-option__body">
          <p className="flight-option__path">
            {detail?.depatureTown}, {detail?.depatureAirport}
            <span className="flight-option__airport"> ({detail?.depatureAirportUid}) </span>
            <img className="flight-option__arror" src={iconArror} alt="Иконка стрелочки"></img> {detail?.arrivalTown}{' '}
            {detail?.arrivalAirport}
            <span className="flight-option__airport"> ({detail?.arrivalAirportUid}) </span>
          </p>
          <div className="flight-option__data data-flight-option">
            <div className="data-flight-option__box">
              <div className="data-flight-option__date">
                <span className="data-flight-option__date-from">
                  {detail?.calcDataFirstFlight?.depatureTimeFlight}{' '}
                  <span className="data-flight-option__day-of-week">
                    {detail?.calcDataFirstFlight?.departureDateFlight}
                  </span>
                </span>
                <span className="data-flight-option__transfer-time">
                  <img src={iconClock} alt="Иконка часов"></img> {detail.durationTime.hours} ч.{' '}
                  {detail.durationTime.minutes} мин.
                </span>
                <span className="data-flight-option__date-landing">
                  <span className="data-flight-option__day-of-week">
                    {detail?.calcDataFirstFlight?.arrivalDateFlight}
                  </span>{' '}
                  {detail?.calcDataFirstFlight?.arrivalTimeFlight}
                </span>
              </div>
              <div className="span-container">
                <span className="data-flight-option__count-transfer">
                  {transfers ? `${transfers} пересадка` : `${transfers} пересадок`}
                </span>
                <div className="divider"></div>
              </div>
              <p className="data-flight-option__company-name">Рейс выполняет: {detail.airline}</p>
            </div>
          </div>
        </div>
      ))}
      <button type="button" className="data-flight-option__button" onClick={() => alert('Упс.. Этого не было в ТЗ :)')}>
        Выбрать
      </button>
    </article>
  );
}
