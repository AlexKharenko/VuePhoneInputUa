# Vue Phoen Input Ua component

This component handles scenarios for entering Ukrainian mobile numbers with a mask. International numbers are allowed to enter, but there is no mask for this. 

* Vue3 based component.

## Instalation

### npm
```
npm install vue-phone-input-ua
```

## Usage

You can register it globally or use it locally.

### Global

* main.js file

```
import { createApp } from 'vue'
import App from './App.vue'
import VuePhoneInputUa from "vue-phone-input-ua";

createApp(App).use(VuePhoneInputUa).mount('#app')
```

* component.vue

```
<template>
  <VuePhoneInputUa v-model="phone" placeholder="Your text" />
</template>
```

### Locally

* component.vue

```
import {VuePhoneInputUa} from "vue-phone-input-ua";
```

```
<template>
  <VuePhoneInputUa v-model="phone" placeholder="Your text" />
</template>
```

## Props

| Name        | Type   | Default            | Description              |
| ----------- | ------ | ------------------ | ------------------------ |
| v-model     | String |                    | Return data about number |
| placeholder | String | +380(xx) xxx-xx-xx | Placeholder to be shown  |
