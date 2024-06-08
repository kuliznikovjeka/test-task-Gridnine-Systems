import AirlinesFilter from '../components/filter/airlines/AirlinesFilter';
import PriceFilter from '../components/filter/price/PriceFilter';
import SortFilter from '../components/filter/sort/SortFilter';
import TransfersFilter from '../components/filter/transfers/TransfersFilter';

export default function FilterAside() {
  return (
    <aside className="aside-filter">
      <SortFilter />
      <TransfersFilter />
      <PriceFilter />
      <AirlinesFilter />
    </aside>
  );
}
