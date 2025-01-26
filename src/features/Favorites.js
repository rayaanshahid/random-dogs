import React, { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../utils/localStorageHelpers";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedFavorites, setSelectedFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleSelectFavorite = (url) => {
    if (selectedFavorites.includes(url)) {
      setSelectedFavorites(selectedFavorites.filter((item) => item !== url));
    } else {
      setSelectedFavorites([...selectedFavorites, url]);
    }
  };

  const handleRemoveFavorite = (url) => {
    removeFavorite(url);
    setFavorites(getFavorites());
    setSelectedFavorites(selectedFavorites.filter((item) => item !== url));
  };

  return (
    <div className="favorites-container">
      {favorites.length === 0 ? (
        <p>No favorite dogs yet!</p>
      ) : (
        <div className="favorites-gallery">
          {favorites.map((url, index) => (
            <div
              key={index}
              className={`dog-card ${
                selectedFavorites.includes(url) ? "selected" : ""
              }`}
              onClick={() => handleSelectFavorite(url)}
            >
              <img src={url} alt="Dog" />
              {selectedFavorites.includes(url) && (
                <button
                  className="remove-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering parent click
                    handleRemoveFavorite(url);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;