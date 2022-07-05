import React, { useState } from "react";
import "./App.css";
import { QuoteDisplay } from "./components/QuoteDisplay";

function App() {
  const [quotes, setQuotes] = useState<{
    character: string;
    image: string;
    quote: string;
  }>();

  const [toggle, setToggle] = useState<boolean>(true);

  const toggleTab = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=num")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuotes(data[0]);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={() => toggleTab()}>
        change tab
      </button>
      <div className="quotes">
        <div className="left">
          {toggle ? (
            <QuoteDisplay
              name={quotes?.character}
              image={quotes?.image}
              quote={quotes?.quote}
              handleClick={handleClick}
              setQuotes={setQuotes}
            />
          ) : null}
        </div>
        <div className="right">
          {!toggle ? (
            <QuoteDisplay
              name={quotes?.character}
              image={quotes?.image}
              quote={quotes?.quote}
              handleClick={handleClick}
              setQuotes={setQuotes}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
