export const goToHomePage = navigate => {
  navigate('/');
};
export const goToPokedexPage = navigate => {
  navigate('/pokedex');
};
export const goToDetailsPage = (navigate, idOrName) => {
  navigate(`/details/${idOrName}`);
};

export const goToBackPage = (navigate) => {
  navigate(-1);
};
