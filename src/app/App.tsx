import FlightList from '../components/flight/FlightList';
import FilterAside from '../layouts/FilterAside';
import '../styles/App.scss';

function App() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <FilterAside />
        <FlightList />
      </div>
    </section>
  );
}

export default App;
