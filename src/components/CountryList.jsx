import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

CountryList.propTypes = {
  isLoading: PropTypes.bool,
  cities: PropTypes.array,
};

function CountryList() {
  const { cities, isLoading } = useCities();

  const message =
    "Add your first Country to the list by clicking on the Country on the map";
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message={message} />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
