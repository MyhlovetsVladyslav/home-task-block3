<template>
    <div>
      <div v-if="showMessage1">Hello World!</div>
      <div v-if="showMessage2">Hello People!</div>
      <div v-show="showMessage3">Hello Guys!</div>
      <button @click="toggleMessages">Перемикнути повідомлення</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMessage1: true,
        showMessage2: false,
        showMessage3: true
      };
    },
    methods: {
      toggleMessages() {
        this.showMessage1 = !this.showMessage1;
        this.showMessage2 = !this.showMessage2;
        this.showMessage3 = !this.showMessage3;
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  