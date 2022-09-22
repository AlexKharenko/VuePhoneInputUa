<template>
  <input
    class="custom-phone-input"
    type="tel"
    v-model="formatedValue"
    @input="inputUpdate"
    :placeholder="placeholder || '+380 (xx) xxx-xx-xx'"
    maxlenght="18"
  />
</template>

<script>
export default {
  name: "VuePhoneInputUa",
  props: ["placeholder", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      selectionStart: "",
      formatedValue: "",
      countryCode: "380",
      operatorCodes: [
        "050",
        "066",
        "095",
        "099",
        "063",
        "073",
        "093",
        "067",
        "068",
        "096",
        "097",
        "098",
        "091",
        "092",
        "094",
      ],
    };
  },
  methods: {
    inputUpdate(event) {
      const input = event.target;
      const inputNumbersValue = this.getInputNumbersValue(this.formatedValue);
      this.selectionStart = input.selectionStart;
      if (!inputNumbersValue) return (this.formatedValue = "");
      if (this.formatedValue.length !== this.selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
          this.formatedValue = inputNumbersValue;
        }
        return;
      }
      if (
        this.checkIfStartFromUaCode(inputNumbersValue) ||
        this.checkIfstartFromOperatorsCodes(inputNumbersValue)
      ) {
        this.maskLogic(inputNumbersValue);
      } else {
        this.formatedValue = "+" + inputNumbersValue.substring(0, 16);
      }
      this.$emit(
        "update:modelValue",
        this.getInputNumbersValue(this.formatedValue)
      );
    },
    getInputNumbersValue(value) {
      return value.replace(/\D/g, "");
    },
    checkIfStartFromUaCode(value) {
      return value
        .substring(0, this.countryCode.length)
        .includes(this.countryCode);
    },
    checkIfstartFromOperatorsCodes(value) {
      return this.operatorCodes.includes(value.substring(0, 3));
    },
    maskLogic(inputNumbersValue) {
      let localFormatedValue = "";
      if (!this.checkIfStartFromUaCode(inputNumbersValue)) {
        inputNumbersValue = `${this.countryCode}${inputNumbersValue.substring(
          1
        )}`;
      }
      localFormatedValue = "+" + inputNumbersValue.substring(0, 3);
      if (inputNumbersValue.length > 3) {
        localFormatedValue += ` (${inputNumbersValue.substring(3, 5)}`;
      }
      if (inputNumbersValue.length > 5) {
        localFormatedValue += `) ${inputNumbersValue.substring(5, 8)}`;
      }
      if (inputNumbersValue.length > 8) {
        localFormatedValue += `-${inputNumbersValue.substring(8, 10)}`;
      }
      if (inputNumbersValue.length > 10) {
        localFormatedValue += `-${inputNumbersValue.substring(10, 12)}`;
      }
      this.formatedValue = localFormatedValue;
    },
  },
};
</script>

<style scoped>
.custom-phone-input {
  padding: 5px 10px;
  font: inherit;
}

.custom-phone-input:focus-visible {
  outline: none;
}
</style>
