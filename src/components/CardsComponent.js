// Dependencies
import { useState, useEffect } from 'react';

// Images
import closeIcon from '../assets/icon/close.svg';

const CardComponent = ({ countryName, onClose, id, selectCard, canSelect }) => {
  const [countryInfo, setCountryInfo] = useState({
    timezones: { data: { datetime: { date: '', time: '' } } },
  });

  useEffect(() => {
    fetch(`/specific/timezone?name=${countryName}`)
      .then((e) => e.json())
      .then(setCountryInfo);
  }, []);

  return (
    <div className="weather__card">
      <div className="weather__card-close" onClick={() => onClose(id)}>
        <img src={closeIcon} alt="close icon" />
      </div>
      <p>{countryName}</p>
      <p>{countryInfo.timezones.data.datetime.date}</p>
      <p>{countryInfo.timezones.data.datetime.time}</p>

      {canSelect && (
        <div className="weather__select-button">
          <button onClick={() => selectCard()}>Select</button>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
