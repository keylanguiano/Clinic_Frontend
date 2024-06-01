<template>
    <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-5 pl-7 pr-7 patients-prescription-row">
            <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0">
                    <p id="patients_prescription_doctor" class="ma-0 pa-0 patients-prescription-doctor">{{ doctor_name }}</p>
                </v-col>

                <v-col class="ma-0 pa-0" cols="2">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="auto" class="ma-0 pa-0">
                            <p id="patients_prescription_date" class="ma-0 pa-0 patients-prescription-date">{{ date }}</p>
                        </v-col>

                        <v-col cols="1" />

                        <v-col cols="2" class="ma-0 pa-0">
                            <p id="patients_prescription_time" class="ma-0 pa-0 patients-prescription-time">{{ time }}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-2">
                <p id="patients_prescription_indication" class="ma-0 pa-0 patients-prescription-indication">{{ medication }} {{ prescription }}</p>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        doctor_name: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        time: {
            type: String,
            default: ''
        },
        medication: {
            type: String,
            default: ''
        },
        prescription: {
            type: String,
            default: ''
        }
    }
}
</script>
