import React from "react";
import "./Settings.css";
import { useSelector, useDispatch } from "react-redux";
import {
  light,
  dark,
  metric,
  imperial,
} from "../../app/features/page/pageSlice";

function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.page.settings);
  const localSettings = JSON.parse(localStorage.getItem("settings"));
  if (localSettings) {
    if (localSettings.settings.theme === "dark") {
      document.getElementById("html").className = "dark";
    } else document.getElementById("html").className = "";
  }

  return (
    <div className="settings">
      {settings.theme === "light" ? (
        <img
          src="https://cdn-icons.flaticon.com/png/128/5558/premium/5558234.png?token=exp=1651167513~hmac=0a6b2b3271f667010678003dd3834aaa"
          alt="light theme"
          className="setting-toggle light-theme"
          onClick={() => dispatch(dark())}
        />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/128/5261/5261864.png"
          alt="dark theme"
          className="setting-toggle dark-theme"
          onClick={() => dispatch(light())}
        />
      )}
      {settings.unit === "metric" ? (
        <img
          src="https://cdn-icons-png.flaticon.com/128/481/481431.png"
          alt="metric"
          className="setting-toggle celsius"
          onClick={() => dispatch(imperial())}
        />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/128/481/481438.png"
          alt="imperial"
          className="setting-toggle fahrenheit"
          onClick={() => dispatch(metric())}
        />
      )}
    </div>
  );
}

export default Settings;
