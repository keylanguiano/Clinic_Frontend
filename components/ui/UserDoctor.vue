<template>
    <v-row class="ma-0 pa-0 d-flex align-center">
        <v-col cols="4" sm="5" md="5" lg="4" class="ma-0 pa-0">
            <img class="ma-0 pa-0 schedule-doctors-photo" width="80" height="80" :src="photo" />
        </v-col>

        <v-col class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <p id="schedule_doctors_name" class="ma-0 pa-0 schedule-doctors-name">{{ name }}</p>
            </v-row>

            <v-row class="ma-0 pa-0">
                <p v-if="degree.length > 0" id="schedule_doctors_degree_0" class="ma-0 pa-0 schedule-doctors-degree">{{ degree[0] }}.</p>

                <p v-if="degree.length > 1" id="schedule_doctors_degree_1" class="ma-0 pa-0 ml-1 schedule-doctors-degree">, {{ degree[1] }}.</p>
            </v-row>

            <v-row class="ma-0 pa-0">
                <p id="schedule_doctors_specialist" class="ma-0 pa-0 schedule-doctors-specialist">
                    <span v-for="(spec, index) in specialist" :key="index">
                        {{ spec }}<span v-if="index !== specialist.length - 1">, </span>
                    </span>
                </p>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        photo: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        specialist: {
            type: Array,
            default: () => []
        },
        degree: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            //
        }
    }
}
</script>
