import React from "react";
import "./Filters.css";

const Filters = ({ category, onFilter }) => {
  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <div className="filters">
      <h2>Filters</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <label>
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={() => onFilter(cat)}
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
