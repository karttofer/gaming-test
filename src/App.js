// Dependencies
import { useEffect, useRef, useState } from 'react';

// Component
import CardComponent from './components/CardsComponent';

// Style
import './App.css';

const AppComponent = () => {
  const [countrySearch, setCountrySearch] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    country();
  }, []);

  const country = (e) => {
    const el = inputRef.current.value || e || 'Africa';
    console.log(e, countrySearch);
    fetch(`/specific/search?name=${el}`)
      .then((e) => e.json())
      .then(setCountrySearch);

    inputRef.current.placeholder =
      inputRef.current.value || e || 'Search By Continent...';
    inputRef.current.value = '';
  };

  const deleteCard = (e) => {
    console.log(e);
    const el = countrySearch.timezones.filter((country) => country !== e);
    setCountrySearch({ timezones: el });
  };

  return (
    <main>
      <nav>
        <input
          ref={inputRef}
          type="text"
          onKeyDown={(e) => (e.key === 'Enter' ? country() : false)}
        />
        <button onClick={() => country()}>Search</button>
      </nav>
      <div className="weather__country-list">
        {countrySearch && Array.isArray(countrySearch.timezones) ? (
          countrySearch.timezones.map((e, i) => (
            <CardComponent
              selectCard={() => country(e)}
              id={e}
              onClose={(e) => deleteCard(e)}
              countryName={e}
              canSelect
            ></CardComponent>
          ))
        ) : countrySearch.timezones && countrySearch.timezones.timezone ? (
          <CardComponent
            id={countrySearch.timezones.timezone}
            onClose={(e) => deleteCard(e)}
            countryName={countrySearch.timezones.timezone}
          ></CardComponent>
        ) : (
          false
        )}
      </div>
    </main>
  );
};

export default AppComponent;
