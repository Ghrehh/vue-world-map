import {
  getColorScaleUnit,
  getMaxAndMinCountryDataValues,
} from '@/dynamic-map-helpers';

describe(getColorScaleUnit, () => {
  const min = 4;
  const max = 14;

  const expectedResult = 0.1;
  const result = getColorScaleUnit(min, max);

  it('should return the correct scaling', () => {
    expect(result).toEqual(expectedResult);
  });
});

describe(getMaxAndMinCountryDataValues, () => {
  const countyData = {
    US: 4,
    CA: 7,
    GB: 8,
    IE: 14,
    unknown: 1337,
  };

  const expectedResult = {
    min: 4,
    max: 14,
  };

  const result = getMaxAndMinCountryDataValues(countyData);

  it('should return the min and max country values', () => {
    expect(result).toEqual(expectedResult);
  });
});
