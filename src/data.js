// src/data.js

const jummahTimes = {
  jammat1: "13:30",
  jammat2: "14:15",
};

const weeklyEvents = [
  {
    day: "Monday",
    title: "Madrassa (Younger kids)",
    time: "16:40-18:10",
    category: "madrasa-younger",
  },
  {
    day: "Monday",
    title: "Madrassa (Older kids)",
    time: "18:10-19:40",
    category: "madrasa-older",
  },
  {
    day: "Tuesday",
    title: "Madrassa (Younger kids)",
    time: "16:40-18:10",
    category: "madrasa-younger",
  },
  {
    day: "Tuesday",
    title: "Madrassa (Older kids)",
    time: "18:10-19:40",
    category: "madrasa-older",
  },
  {
    day: "Wednesday",
    title: "Madrassa (Younger kids)",
    time: "16:40-18:10",
    category: "madrasa-younger",
  },
  {
    day: "Wednesday",
    title: "Madrassa (Older kids)",
    time: "18:10-19:40",
    category: "madrasa-older",
  },
  {
    day: "Thursday",
    title: "Madrassa (Younger kids)",
    time: "16:40-18:10",
    category: "madrasa-younger",
  },
  {
    day: "Thursday",
    title: "Madrassa (Older kids)",
    time: "18:10-19:40",
    category: "madrasa-older",
  },
  {
    day: "Thursday",
    title: "Weekly Ijtima",
    time: "After Isha Prayer",
    category: "ijtimah",
  },
  {
    day: "Friday",
    title: "Jummah Prayer 1",
    time: "13:30",
    category: "jummah",
  },
  {
    day: "Friday",
    title: "Jummah Prayer 2",
    time: "14:15",
    category: "jummah",
  },
  {
    day: "Friday",
    title: "Madrassa (Younger kids)",
    time: "16:40-18:10",
    category: "madrasa-younger",
  },
  {
    day: "Friday",
    title: "Madrassa (Older kids)",
    time: "18:10-19:40",
    category: "madrasa-older",
  },
];

const serviceDetails = [
  {
    title: "Daily Prayers",
    description: "The mosque is open for brothers for all five daily prayers.",
  },
  {
    title: "Jummah",
    description: "1st Jamaat: 12:30. 2nd Jamaat: 13:30",
  },
  {
    title: "Madrassa",
    description:
      "Madrassa classes for boys Monday-Friday. Younger kids: 16:40-18:10, Older kids: 18:10-19:40.",
  },
  {
    title: "Weekly Ijtimah",
    description:
      "Weekly Ijtimah every Thursday after Isha prayer. Tilawat-e-Quran, Naats, Speeches, Dua & Salam.",
  },
];

export { jummahTimes, weeklyEvents, serviceDetails };
