<template>
    <div class="ma-0 pa-0" justify="center" align="center">
        <v-progress-circular class="ma-0 pa-0" :rotate="180" :size="100" :width="10" :value="value" color="#874C96">
            {{ value }} %
        </v-progress-circular>

        <v-row class="ma-0 pa-0 mt-2" justify="center" align="center">
            <p class="ma-0 pa-0">81 / 72</p>
        </v-row>

        <v-row class="ma-0 pa-0" justify="center" align="center">
            <p class="ma-0 pa-0">Sugar</p>
        </v-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: 80
        }
    }
}
</script>
