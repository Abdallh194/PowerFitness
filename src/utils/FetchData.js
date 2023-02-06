export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "f81d5c7777msh2d926f7bd8e2c22p1af665jsn76a239cf9aaa",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
