<template>
    <div>
        <label for="fruit">Оберіть компонент:</label>
        <select v-model="selectedComponent">
            <option value="first">Перший компонент</option>
            <option value="second">Другий компонент</option>
            <option value="third">Третій компонент</option>
        </select>
        <div v-if="selectedComponent === 'first'">
            <first-component></first-component>
        </div>
        <div v-if="selectedComponent === 'second'">
            <second-component></second-component>
        </div>
        <div v-if="selectedComponent === 'third'">
            <third-component></third-component>
        </div>
        <vbind></vbind>
    </div>
</template>
  
<script>
import firstComponent from "./firstComponent.vue"
import secondComponent from "./secondComponent.vue"
import thirdComponent from "./thirdComponent.vue"
import vbind from "./vbind.vue"
export default {
    data() {
        return {
            selectedComponent: null
        }
    },
    components: {
        firstComponent,
        secondComponent,
        thirdComponent,
        vbind
    }
}
</script>
  
<style scoped></style>
  