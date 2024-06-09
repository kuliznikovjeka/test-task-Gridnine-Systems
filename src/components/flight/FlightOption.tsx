import { Airport, FlightSegment, Price } from '../../api/types';
import iconClock from '../../assets/icons/clock.svg';
import iconArror from '../../assets/icons/arrow.svg';
import logo from '../../assets/logo-company.png';

interface FlightOptionProps {
  price: Price;
  // segments: FlightSegment[];
  fromCity: string;
  toCity: string;
  fromAiport: Airport;
  toAiport: Airport;
  carrier: string;
}

export default function FlightOption({ price, carrier, fromCity, toCity, fromAiport, toAiport }: FlightOptionProps) {
  const totalPrice = `${price.amount} ${price.currency}`;

  return (
    <article className="flight-option">
      <div className="flight-option__top top-flight-option">
        <img src={logo} className="top-flight-option__logo" alt="Логотип авиакомпании"></img>
        <div className="top-flight-option__box">
          <span className="top-flight-option__price">{totalPrice}</span>
          <p className="top-flight-option__description">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="flight-option__body">
        <p className="flight-option__path">
          {fromCity}, {fromAiport?.caption} <span className="flight-option__airport"> ({fromAiport?.uid}) </span>
          <img className="flight-option__arror" src={iconArror} alt="Иконка стрелочки"></img> {toCity}{' '}
          {toAiport?.caption}
          <span className="flight-option__airport"> ({toAiport?.uid}) </span>
        </p>
        <div className="flight-option__data data-flight-option">
          <div className="data-flight-option__box">
            <div className="data-flight-option__date">
              <span className="data-flight-option__date-from">
                18^10 <span className="data-flight-option__day-of-week">19 авг.ср</span>
              </span>
              <span className="data-flight-option__transfer-time">
                <img src={iconClock} alt="Иконка часов"></img> 23 ч 35 мин
              </span>
              <span className="data-flight-option__date-landing">
                18^10 <span className="data-flight-option__day-of-week">20 авг.чт</span>
              </span>
            </div>
            <div className="span-container">
              <span className="data-flight-option__count-transfer">1 пересадка</span>
              <div className="divider"></div>
            </div>
            <p className="data-flight-option__company-name">Рейс выполняет: {carrier}</p>
          </div>
        </div>
      </div>
      <button type="button" className="data-flight-option__button">
        Выбрать
      </button>
    </article>
  );
}
