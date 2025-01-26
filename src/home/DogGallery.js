import React, { useState, useEffect } from "react";
import DogCard from "../components/DogCard";
import Button from "../components/Button";
import { saveFavorite } from "../utils/localStorageHelpers";

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false); // For visual feedback

  const fetchDogs = async () => {
    setLoading(true);
    const dogUrls = [];
    while (dogUrls.length < 6) {
      const response = await fetch("https://random.dog/woof.json");
      const data = await response.json();
      if (!data.url.endsWith(".mp4") && !data.url.endsWith(".webm")) {
        dogUrls.push(data.url);
      }
    }
    setDogs(dogUrls);
    setSelectedDog(dogUrls[0]); // Set the first dog as the default large picture
    setLoading(false);
  };

  const handleAddToFavorites = () => {
    saveFavorite(selectedDog);
    setShowConfirmation(true); // Show the tick
    setTimeout(() => setShowConfirmation(false), 2000); // Hide the tick after 2 seconds
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="gallery-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Large Picture with Favorite Button */}
          <div className="large-dog">
            <img src={selectedDog} alt="Selected Dog" />
            <div className="favorite-button">
              <Button onClick={handleAddToFavorites} label="Add to Favorites" />
              {showConfirmation && (
                <div className="confirmation-tick">✔ Added!</div>
              )}
            </div>
          </div>

          {/* Gallery of Smaller Pictures */}
          <div className="small-gallery">
            {dogs.map((url, index) => (
              <DogCard
                key={index}
                url={url}
                isSelected={url === selectedDog}
                onClick={() => setSelectedDog(url)}
              />
            ))}
          </div>

          <Button onClick={fetchDogs} label="Refresh" />
        </>
      )}
    </div>
  );
};

export default DogGallery;