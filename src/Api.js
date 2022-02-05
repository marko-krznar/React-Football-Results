export const GETapi = async (term) => {
  const data = await fetch(term);
  return data.json();
};
