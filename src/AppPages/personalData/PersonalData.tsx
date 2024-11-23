"use client";
import React, { useState } from "react";
import MyProfile from "../profile/MyProfile";
import styles from "./PersonalData.module.scss";
import { Typography } from "@/UI/Typography/Typography";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Region {
  name: string;
}

interface Country {
  countryShortCode: string;
  countryName: string;
  regions: Region[];
}

const PersonalData = () => {
  const [phone, setPhone] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const days = Array.from(
    { length: getDaysInMonth(selectedYear, selectedMonth) },
    (_, i) => i + 1
  );

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedYear(Number(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedDay(Number(e.target.value));
  };

  const countries: Country[] = [
    {
      countryShortCode: "RU",
      countryName: "Россия",
      regions: [{ name: "Москва" }, { name: "Санкт-Петербург" }],
    },
    {
      countryShortCode: "US",
      countryName: "США",
      regions: [{ name: "Нью-Йорк" }, { name: "Лос-Анджелес" }],
    },
    {
      countryShortCode: "TR",
      countryName: "Турция",
      regions: [{ name: "Стамбул" }, { name: "Анкара" }, { name: "Измир" }],
    },
    {
      countryShortCode: "KZ",
      countryName: "Казахстан",
      regions: [
        { name: "Алматы" },
        { name: "Нур-Султан" },
        { name: "Шымкент" },
      ],
    },
    {
      countryShortCode: "AZ",
      countryName: "Азербайджан",
      regions: [{ name: "Баку" }, { name: "Гянджа" }, { name: "Мингечевир" }],
    },
    {
      countryShortCode: "KG",
      countryName: "Кыргызстан",
      regions: [
        { name: "Бишкек" },
        { name: "Ош" },
        { name: "Баткен" },
        { name: "Нарын" },
        { name: "Иссык - Куль" },
        { name: "Талас" },
        { name: "Джалал - Абад" },
      ],
    },

    {
      countryShortCode: "CN",
      countryName: "Китай",
      regions: [{ name: "Пекин" }, { name: "Шанхай" }, { name: "Гуанчжоу" }],
    },
    {
      countryShortCode: "JP",
      countryName: "Япония",
      regions: [{ name: "Токио" }, { name: "Осака" }, { name: "Киото" }],
    },
    {
      countryShortCode: "IN",
      countryName: "Индия",
      regions: [{ name: "Дели" }, { name: "Мумбаи" }, { name: "Бангалор" }],
    },
    {
      countryShortCode: "VN",
      countryName: "Вьетнам",
      regions: [{ name: "Ханой" }, { name: "Хошимин" }, { name: "Дананг" }],
    },
  ];

  const cities = selectedCountry
    ? countries.find((country) => country.countryShortCode === selectedCountry)
        ?.regions || []
    : [];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(null);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={styles.mainBlock}>
      <div className={styles.profileBlock}>
        <MyProfile />
      </div>
      <div className={styles.mainPersonalDate}>
        <div className={styles.text}>
          <Typography variant="h2" weight="regularM">
            Личные данные
          </Typography>
        </div>
        <div className={styles.mainInputs}>
          <div className={styles.inputOne}>
            <div className={styles.name}>
              <Typography variant="bodyXS" weight="light">
                ФИО
              </Typography>
              <input type="text" />
            </div>
            <div className={styles.phone}>
              <Typography variant="bodyXS" weight="light">
                Номер телефон
              </Typography>
              <PhoneInput
                country={"kg"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className={styles.email}>
              <Typography variant="bodyXS" weight="light">
                Email
              </Typography>
              <input type="text" />
            </div>
            <div className={styles.pol}>
              <Typography variant="bodyXS" weight="light">
                Пол
              </Typography>
              <div className={styles.polInput}>
                <div className={styles.women}>
                  <input type="checkbox" />
                  <Typography variant="bodyXS" weight="light">
                    Мужской
                  </Typography>
                </div>
                <div className={styles.men}>
                  <input type="checkbox" />
                  <Typography variant="bodyXS" weight="light">
                    Женский
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputTwo}>
            <div className={styles.date}>
            <Typography variant="bodyXS" weight="light">
              Дата рождения
            </Typography>
           <div className={styles.selected}>
           <label>
                <select value={selectedYear} onChange={handleYearChange}>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <select value={selectedDay} onChange={handleDayChange}>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </label>
           </div>
            </div>
            <div className={styles.country}>
              <Typography variant="bodyXS" weight="light">
                Страна
              </Typography>
              <div>
                <label>
                  <select
                    value={selectedCountry || ""}
                    onChange={handleCountryChange}
                  >
                    <option value="" disabled>
                      Выберите страну
                    </option>
                    {countries.map((country) => (
                      <option
                        key={country.countryShortCode}
                        value={country.countryShortCode}
                      >
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className={styles.city}>
              <Typography variant="bodyXS" weight="light">
                Город
              </Typography>
              <div>
                <label>
                  <select
                    value={selectedCity || ""}
                    onChange={handleCityChange}
                    disabled={!selectedCountry}
                  >
                    <option value="" disabled>
                      Выберите город
                    </option>
                    {cities.map((city, index) => (
                      <option key={index} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className={styles.status}>
              <Typography variant="bodyXS" weight="light">
                Род деятельности
              </Typography>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
