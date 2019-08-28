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

## Hover Events

The component emits the event `mouseenter` when the mouse enters a country's border, with the country's node as the payload.  
Similarly the component also emits the `mouseleave` event when the mouse leaves the country's border.   
Together, these two events can be used for hover actions, or displaying additional data on hover.

Use then in your component as:  
``` javascript
  <vueWorldMap :countryData="stats.group_by_country" @mouseleave="on_mouseleave" @mouseenter="on_mouseenter" />
```
where `on_mouseenter` and `on_mouseleave` are defined among the methods of your component.
