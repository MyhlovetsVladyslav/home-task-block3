<template>
    <div>
        <hr>
        <input type="text" v-model="user">
        <p>Введене значення: {{ user }}</p>
        <button v-bind:disabled="shouldDisableButton">Кнопка</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            user: null
        }
    },
    computed: {
        shouldDisableButton() {
            return this.user !== 'Vlad';
        }
    }
}
</script>
  
<style scoped></style>
  