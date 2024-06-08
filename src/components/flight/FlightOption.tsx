import iconClock from '../../assets/icons/clock.svg';

export default function FlightOption() {
  return (
    <article className="flight-option">
      <div className="flight-option__top top-flight-option">
        <img src="#" className="top-flight-option__logo" alt="Логотип авиакомпании"></img>
        <div className="top-flight-option__box">
          <span className="top-flight-option__price">21049 р</span>
          <p className="top-flight-option__description">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="flight-option__body">
        <p className="flight-option__path">
          Москва, Шереметьево <span className="flight-option__airport">(SVO)</span> до Лондон, Хитроу{' '}
          <span className="flight-option__airport">(SVO)</span>
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
            <p className="data-flight-option__company-name">Рейс выполняет: LOT POLISH AIRLANSE</p>
          </div>
        </div>
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
            <p className="data-flight-option__company-name">Рейс выполняет: LOT POLISH AIRLANSE</p>
          </div>
        </div>
      </div>
      <button type="button" className="data-flight-option__button">
        Выбрать
      </button>
    </article>
  );
}
