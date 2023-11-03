import PropTypes from "prop-types";
import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

CityList.propTypes = {
  isLoading: PropTypes.bool,
  cities: PropTypes.array,
};

function CityList() {
  const { cities, isLoading } = useCities();

  const message =
    "Add your first city to the list by clicking on the city on the map";
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message={message} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
