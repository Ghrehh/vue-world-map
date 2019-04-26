import {
  getDynamicMapCss,
  getBaseCss,
  getCombinedCssString,
} from '@/dynamic-map-css';

describe('getDynamicMapCss', () => {
  const fakeChromaScale = (scaleValue) => ({
    hex: () => `${scaleValue} hex`,
  });

  const countyData = {
    US: 4,
    CA: 7,
    GB: 8,
    IE: 14,
    unknown: 1337,
  };

  const expectedResult = [
    '.vue-world-map #US { fill: 0 hex; }',
    '.vue-world-map #CA { fill: 0.30000000000000004 hex; }',
    '.vue-world-map #GB { fill: 0.4 hex; }',
    '.vue-world-map #IE { fill: 1 hex; }',
  ];

  const result = getDynamicMapCss(countyData, fakeChromaScale);

  it('should return the correct hex values', () => {
    expect(result).toEqual(expectedResult);
  });
});

describe('getBaseCss', () => {
  const props = {
    defaultCountryFillColor: 'foo',
    countryStrokeColor: 'bar',
  };

  const expectedResult = '.vue-world-map .land{fill:foo;stroke:bar;}';
  const result = getBaseCss(props);

  it('should return the css string', () => {
    expect(result).toEqual(expectedResult);
  });
});

describe('getCombinedCssString', () => {
  const baseCss = 'foo';
  const dynamicCss = ['bar', 'baz'];
  const expectedResult = 'bar baz foo';
  const result = getCombinedCssString(baseCss, dynamicCss);

  it('should return the combined css string', () => {
    expect(result).toEqual(expectedResult);
  });
});
