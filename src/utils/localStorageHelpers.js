const FAVORITES_KEY = "favoriteDogs";

export const saveFavorite = (url) => {
  const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  if (!favorites.includes(url)) {
    favorites.push(url);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
};

export const removeFavorite = (url) => {
  const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  const updatedFavorites = favorites.filter((favorite) => favorite !== url);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};