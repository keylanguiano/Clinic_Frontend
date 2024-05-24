<template>
    <div class="ma-0 pa-0 d-flex flex-column align-center justify-center">
        <v-progress-circular
            id="my-progress-circular"
            class="ma-0 pa-0"
            :rotate="180"
            :value="percentage"
            :size="100"
            :width="10"
            :style="{ '--progress-color': color }">
            {{ data }}
        </v-progress-circular>

        <v-row class="ma-0 pa-0 mt-2 align-center justify-center">
            <p class="ma-0 pa-0 progress-circular-value">{{ value }}</p>
        </v-row>

        <v-row class="ma-0 pa-0 align-center justify-center">
            <p class="ma-0 pa-0 progress-circular-topic">{{ topic }}</p>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        percentage: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        topic: {
            type: String,
            default: ''
        },
        data: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.v-progress-circular__overlay {
    stroke: var(--progress-color) !important;
}
</style>
