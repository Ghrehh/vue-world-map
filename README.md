# Vue World Map

A Vue JS Component for displaying dynamic data on a world map.

Map from [amCharts](https://www.amcharts.com/svg-maps/?map=world)

## Installation

Install via npm using `npm install vue-world-map`

## Usage

This component is most useful in creating a heat map for various countries. And
will color countries differently based on a props passed.

The component requires a prop of `countryData` to be passed to it, which is a JS
object formatted like so.

``` javascript
{
  US: 100,
  CA: 120,
  UK: 400,
}
```

For Individual Countries pass the ISO 3166 Code to the `map` prop. for US the values for the states can be set like this:

``` javascript
{
  US_CA: 100,
  CA_NY: 120,
  UK_TX: 400,
}
```

note: Only US country map is available.

Where the key is a country's
[ISO 3166 Code](https://en.wikipedia.org/wiki/ISO_3166) and the value is a
numerical value associated with it.

## API

| Props | Description | Optional |
| --- | --- | --- |
| countryData | See Usage Section above for details  | no |
| lowColor | Countries with lower values will be colored more strongly with this color | yes |
| highColor | Countries with higher values will be colored more strongly with this color | yes |
| defaultCountryFillColor | Countries with no data will default to this color | yes |
| countryStrokeColor | The color of the border around countries | yes |
