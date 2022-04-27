import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { searchValue } from "../../app/features/searchBar/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { useGetWeatherQuery } from "../../app/services/weatherApi";
import { cityWeather } from "../../app/features/cityWeather/cityWeatherSlice";

// TODO: Restrict google api key

function SearchBar() {
  const dispatch = useDispatch();
  // const location = useSelector((state) => state.address.latLng);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(
    useSelector((state) => state.address.value)
  );

  const { data, error, isLoading } = useGetWeatherQuery(location?.latLng);
  console.log(data, error, isLoading);
  dispatch(cityWeather(data));

  const handleSelect = async (value) => {
    try {
      setAddress(value);
      const result = await geocodeByAddress(value);
      const latLng = await getLatLng(result[0]);
      const name = result[0].address_components[0].short_name;
      setLocation({ name, latLng });
      dispatch(searchValue({ name, latLng }));
      setAddress("");
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="autocomplete">
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, i) => {
              const id = i;
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    id,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default SearchBar;
