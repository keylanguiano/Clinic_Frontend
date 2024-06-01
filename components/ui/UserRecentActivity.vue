<template>
    <v-row class="ma-0 pa-0">
        <v-col cols="4" class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <v-col cols="3" class="ma-0 pa-0">
                    <img id="recent_activity_doctor_photo" class="ma-0 pa-0 dashboard-recent-activity-photo" :src="doctor_photo" width="35" height="35" style="border-radius: 50% !important;" />
                </v-col>

                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p id="recent_activity_doctor" class="ma-0 pa-0" style="font-size: 16px; font-weight: 600;">{{ doctor_name }}</p>
                    </v-row>

                    <v-row class="ma-0 pa-0">
                        <p id="recent_activity_speciality" class="ma-0 pa-0" style="font-size: 15px;">{{ doctor_specialist }}</p>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <v-col class="ma-0 pa-0 d-flex flex-column">
            <v-row class="ma-0 pa-0 align-center" align="center">
                <p id="recent_activity_info" class="ma-0 pa-0" style="font-size: 15px;">{{ recent_activity_details }}</p>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        doctor_photo: {
            type: String,
            default: ''
        },
        doctor_name: {
            type: String,
            default: ''
        },
        doctor_specialist: {
            type: String,
            default: ''
        },
        recent_activity_details: {
            type: String,
            default: ''
        }
    }
}
</script>
