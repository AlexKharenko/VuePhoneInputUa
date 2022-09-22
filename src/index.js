import VuePhoneInputUa from "./components/VuePhoneInputUa.vue";

const useVuePhoneInputUa = (app, options) => {
  app.component("VuePhoneInputUa", VuePhoneInputUa);
};

export { VuePhoneInputUa };

export default {
  install: useVuePhoneInputUa,
};
