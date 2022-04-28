import React, { useState } from "react";
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

  const unit = useSelector((state) => state.page.settings.unit);
  const { lat, lng } = location?.latLng;
  const q = { lat, lng, unit };

  const { data, error, isLoading } = useGetWeatherQuery(q);
  if (error) {
    console.log(error);
  }
  if (data !== 0) dispatch(cityWeather(data));

  const handleSelect = async (value) => {
    try {
      setAddress(value);
      const result = await geocodeByAddress(value);
      const latLng = await getLatLng(result[0]);
      const { lat, lng } = latLng;
      const name = result[0].address_components[0].short_name;
      setLocation({ name: name, latLng: { lat, lng, unit } });
      dispatch(cityWeather(data));
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
                ? "suggestion suggestion-item--active"
                : "suggestion suggestion-item";
              return (
                <div
                  key={id}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    id,
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
