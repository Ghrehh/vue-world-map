// We multiply this unit by the (value of a country - min) to get the
// decimal value to provide to the Chroma scale instance.
export const getColorScaleUnit = (min, max) => 1 / (max - min);

export const getMaxAndMinCountryDataValues = (countryData) => {
  let min, max;

  Object.keys(countryData).forEach((key) => {
    if (key === 'unknown') return;

    const value = countryData[key];

    if (value < min || min === undefined) min = value;
    if (value > max || max === undefined) max = value;
  });

  return { min, max };
};
