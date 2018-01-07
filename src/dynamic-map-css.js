const getMaxAndMinCountryDataValues = (countryData) => {
  let min, max;

  for (let key in countryData) {
    if (key === "unknown") continue;

    const value = countryData[key]

    if (value < min || min === undefined) {
      min = value
    }

    if (value > max || max === undefined) {
      max = value
    }
  }

  return { min, max }
};

// We multiply this unit by the (value of a country - min) to get the
// decimal value to provide to the Chroma scale instance.
const getColorScaleUnit = (min, max) => {
  const difference = max - min;

  return 1 / difference;
};

export const getBaseCss = ({ defaultCountryFillColor, countryStrokeColor }) => {
  return `.vue-world-map .land {fill:${defaultCountryFillColor};stroke:${countryStrokeColor};}`;
};

export const getDynamicMapCss = (countryData, chromaScale) => {
  const { min, max } = getMaxAndMinCountryDataValues(countryData);
  const colorScaleUnit = getColorScaleUnit(min, max);

  let css = []

  for (let key in countryData) {
    if (key === "unknown") continue;

    const value = countryData[key]
    const scaleValue = colorScaleUnit * (value - min);
    const hex = chromaScale(scaleValue).hex();

    css.push(`.vue-world-map #${key} { fill: ${hex}; }`)
  }

  return css;
}

export const getCombinedCssString = (baseCss, dynamicCss) => {
  dynamicCss.push(baseCss)

  return dynamicCss.join(" ");
}
