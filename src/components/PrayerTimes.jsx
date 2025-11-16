import React, { useState, useEffect } from "react";
import prayerInfoImage from "../assets/prayer-info-image.png";
import TodayPrayerTimes from "./TodayPrayerTimes";

import "./PrayerTimes.css";

function PrayerTimes() {
  const [timetable, setTimetable] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCurrentTimetable() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonthName = now.toLocaleDateString("en-GB", {
        month: "long",
      });

      try {
        setLoading(true);

        const API_URL =
          import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337";
        const timetableUrl = `${API_URL}/api/timetables?filters[year][$eq]=${currentYear}&filters[month][$eq]=${currentMonthName}&populate=timetableImage`;
        const response = await fetch(timetableUrl);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const apiData = await response.json();
        const currentTimetable = apiData?.data?.[0];

        if (currentTimetable) {
          setTimetable(currentTimetable);
        } else {
          throw new Error("Timetable for the current month is not available.");
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentTimetable();
  }, []);

  if (loading) {
    return (
      <div className="prayer-times-section" id="prayer-times">
        <div className="prayer-times-grid" style={{ minHeight: "400px" }}>
          <p style={{ color: "white", textAlign: "center", width: "100%" }}>
            Loading timetable...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="prayer-times-section" id="prayer-times">
        <div className="prayer-times-grid" style={{ minHeight: "400px" }}>
          <p style={{ color: "red", textAlign: "center", width: "100%" }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  const timetableFileUrl = timetable.timetableImage?.url
    ? `http://localhost:1337${timetable.timetableImage.url}`
    : "#";

  return (
    <div className="prayer-times-section" id="prayer-times">
      <div className="prayer-times-grid">
        {/* Pass prayerData (the JSON) down as a prop */}
        <TodayPrayerTimes prayerData={timetable.prayerData} />

        <div className="prayer-times-card image-card">
          <img
            src={prayerInfoImage}
            alt="Prayer times information"
            className="info-image"
          />
          <a
            href={timetableFileUrl} // <-- USES DYNAMIC URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn timetable-btn overlay-btn"
          >
            View Monthly Timetable
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrayerTimes;
