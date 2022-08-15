<template>
  <div class="vue-world-map" :style="mapStyle">
    <Map :country-data="countryData" :low-color="lowColor" :high-color="highColor"/>
  </div>
</template>

<script>
import Map from './Map';

export default {
  components: { Map },
  props: {
    lowColor: {
      type: String,
      default: '#fde2e2',
    },
    highColor: {
      type: String,
      default: '#d83737',
    },
    countryData: {
      type: Object,
      required: true,
    },
    defaultCountryFillColor: {
      type: String,
      default: '#dadada',
    },
    countryStrokeColor: {
      type: String,
      default: 'black',
    },
  },

  methods: {
    mapStyle() {
      return `fill:${this.defaultCountryFillColor};stroke:${this.countryStrokeColor};`;
    },
  },
};
</script>

<style>
  .vue-world-map {
    height: 100%;
  }

  #map-svg {
    height: 100%;
  }
</style>
