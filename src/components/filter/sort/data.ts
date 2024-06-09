const priceIncrease = 'price-increase';
const priceDecrease = 'price-decrease';
const travelTime = 'travel-time';

const sortOptions = [
  {
    id: priceIncrease,
    label: 'по возрастанию цены',
    name: 'sort',
    value: priceIncrease,
  },
  {
    id: priceDecrease,
    label: 'по убыванию цены',
    name: 'sort',
    value: priceDecrease,
  },
];

export { priceDecrease, priceIncrease, travelTime, sortOptions };
