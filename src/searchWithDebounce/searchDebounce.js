import React, { useCallback, useState } from "react";

const DebounceSearch = () => {
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 2000);
    };
  };

  const handleChange = (value, target) => {
      target.classList.add('loading');
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => {
         target.classList.remove('loading');
          setSuggestions(json.data.items);
        });
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Debouncing in React JS</h2>

      <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => optimizedFn(e.target.value, e.target)}
      />

      {suggestions.length > 0 && (
        <div className="autocomplete">
          {suggestions.map((el, i) => (
            <div key={i} className="autocompleteItems">
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DebounceSearch;