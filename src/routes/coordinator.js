export const goToHomePage = navigate => {
  navigate('/');
};
export const goToPokedexPage = navigate => {
  navigate(-1);
};
export const goToDetailsPage = (navigate, id) => {
  navigate(`/${idOrName}`);
};
