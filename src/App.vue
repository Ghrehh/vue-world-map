<template>
<div class="vue-world-map">
  <div id="color_bar"></div>
  <Map @mouseenter="on_mouseenter" @mouseleave="on_mouseleave" />
</div>
</template>

<script>
import chroma from 'chroma-js';
import Map from './Map';
import {
  getDynamicMapCss,
  getBaseCss,
  getCombinedCssString,
} from './dynamic-map-css';


export default {
  components: { Map },
  watch: {
    countryData() {
      this.renderMapCSS();
    },
  },
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
  data() {
    return {
      node: document.createElement('style'),
      chromaScale: chroma.scale([this.$props.lowColor, this.$props.highColor]),
    };
  },
  methods: {
    on_mouseenter(e) {
      this.$emit('mouseenter', e);
    },
    on_mouseleave(e) {
      this.$emit('mouseleave', e);
    },
    renderMapCSS() {
      const baseCss = getBaseCss(this.$props);
      const dynamicMapCss = getDynamicMapCss(this.$props.countryData, this.chromaScale);
      this.$data.node.innerHTML = getCombinedCssString(baseCss, dynamicMapCss);
    },
    colorGradient() {
      const colorBar = document.getElementById('color_bar');
      const prefixes = ['', '-o-', '-ms-', '-moz-', '-webkit-'];
      for (let x = 0; x < prefixes.length; x += 1) {
        colorBar.style.background = `${prefixes[x]}linear-gradient(to right, ${this.lowColor}, ${this.highColor})`;
      }
    },
  },
  mounted() {
    document.body.appendChild(this.$data.node);
    this.renderMapCSS();
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

#color_bar {
  width: 100%;
  height: 5%;
  margin: auto;
}

#color_bar::before {
  position: relative;
  top: 100%;
  left:5%;
  content: "Low"
}

#color_bar::after {
  position: relative;
  top: 100%;
  left:85%;
  content: "High"
}
</style>
