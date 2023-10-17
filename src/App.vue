<template>
  <my-global-component></my-global-component>
  <my-local-component></my-local-component>
  <show-message></show-message>
  <select-component></select-component>
</template>

<script>
import axiosInstance from './axios-instance';
import myLocalComponent from './components/myLocalComponent.vue';
import showMessage  from './components/showMessage.vue'
import selectComponent from './components/selectComponent.vue';
axiosInstance.get('/users/2')
  .then(response => {

    console.log(response.data);
  })
  .catch(error => {

    console.error(error);
  });


export default {
  name: 'App',
  components: {
     myLocalComponent,
     showMessage,
     selectComponent
  },
}
</script>

<style></style>
