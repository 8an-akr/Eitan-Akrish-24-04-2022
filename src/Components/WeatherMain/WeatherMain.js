import React from "react";
import { useSelector } from "react-redux";

function WeatherMain() {
  const weather = useSelector((state) => state.cityWeather.value);
  const address = useSelector((state) => state.address.name);
  const current = weather.current;
  console.log(address);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const day = d.getDate();
  const weatherIconURL = `http://openweathermap.org/img/wn/${current.weather[0].icon}.png`;

  // console.log(weather.toString());

  return (
    <div className="main container">
      <div className="today">
        <div className="placeDateWeather">
          <div className="address">{address}</div>
          <div className="date">
            {month} {day}, {year}
          </div>
          <div className="weather">
            <img src={weatherIconURL} alt={current.weather[0].description} />
            <div className="weather-type">{current.weather[0].main}</div>
          </div>
        </div>
        <div className="tempHighLow">
          <div className="temp">{current.feels_like}</div>
          <div className="highLow"></div>
        </div>
        <br></br>
        <div className="week">
          <div className="sun">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
          <div className="mon">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
          <div className="tue">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
          <div className="wed">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
          <div className="thu">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
          <div className="fri">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
          <div className="sat">
            <div className="day"></div>
            <div className="forcast">
              <div className="weather-icon"></div>
              <div className="forcast-highLow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="main container">
    //   <div className="row">
    //     <div className="col-xs-12">
    //       <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
    //         <div className="col-xs-6">
    //           <h2>
    //             Lucerne<br></br>
    //             <small>May 24, 2016</small>
    //           </h2>
    //           <p className="h3">
    //             <i className="mi mi-fw mi-lg mi-rain-heavy"></i> Rainy
    //           </p>
    //         </div>
    //         <div className="col-xs-6 text-center">
    //           <div className="h1 temperature">
    //             <span>12°</span>
    //             <br></br>
    //             <small>8° / 13°</small>
    //           </div>
    //         </div>
    //         <div className="col-xs-12">
    //           <ul className="list-inline row forecast">
    //             <li className="col-xs-4 col-sm-2 text-center">
    //               <h3 className="h5">Wed</h3>
    //               <p>
    //                 <i className="mi mi-fw mi-2x mi-cloud-sun"></i>
    //                 <br></br>9°/18°
    //               </p>
    //             </li>
    //             <li className="col-xs-4 col-sm-2 text-center">
    //               <h3 className="h5">Thu</h3>
    //               <p>
    //                 <i className="mi mi-fw mi-2x mi-sun"></i>
    //                 <br></br>12°/23°
    //               </p>
    //             </li>
    //             <li className="col-xs-4 col-sm-2 text-center">
    //               <h3 className="h5">Fri</h3>
    //               <p>
    //                 <i className="mi mi-fw mi-2x mi-cloud-sun"></i>
    //                 <br></br>14°/24°
    //               </p>
    //             </li>
    //             <li className="col-xs-4 col-sm-2 text-center">
    //               <h3 className="h5">Sat</h3>
    //               <p>
    //                 <i className="mi mi-fw mi-2x mi-rain"></i>
    //                 <br></br>15°/23°
    //               </p>
    //             </li>
    //             <li className="col-xs-4 col-sm-2 text-center">
    //               <h3 className="h5">Sun</h3>
    //               <p>
    //                 <i className="mi mi-fw mi-2x mi-rain-heavy"></i>
    //                 <br></br>15°/22°
    //               </p>
    //             </li>
    //             <li className="col-xs-4 col-sm-2 text-center">
    //               <h3 className="h5">Mon</h3>
    //               <p>
    //                 <i className="mi mi-fw mi-2x mi-clouds"></i>
    //                 <br></br>12°/17°
    //               </p>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default WeatherMain;
