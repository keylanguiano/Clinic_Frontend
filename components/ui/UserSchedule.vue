<template>
    <v-row class="ma-0 pa-4 d-flex align-center mb-5 schedule-schedule-card-schedule">
        <v-col cols="3" class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <img class="ma-0 pa-0 schedule-schedule-photo-patient" width="150" :src="photo" />
            </v-row>
        </v-col>

        <v-col class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <v-col cols="6" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p id="schedule_schedule_name" class="ma-0 pa-0 schedule-schedule-title">{{ name_patient }}</p>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-2">
                                <v-col cols="6" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0 schedule-schedule-subtitle">Age:</p>
                                            </v-row>
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="schedule_schedule_age" class="ma-0 pa-0 schedule-schedule-text">{{ age_patient }}</p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="6" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0 schedule-schedule-subtitle">Sex:</p>
                                            </v-row>
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="schedule_schedule_sex" class="ma-0 pa-0 schedule-schedule-text">{{ sex_patient }}</p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-1">
                                <v-col cols="4" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 schedule-schedule-subtitle">Phone Number:</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p id="schedule_schedule_phone" class="ma-0 pa-0 schedule-schedule-text">{{ phone_patient }}</p>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-1">
                                <v-col cols="2" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 schedule-schedule-subtitle">E-Mail:</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p id="schedule_schedule_email" class="ma-0 pa-0" style="font-size: 15px; text-transform: lowercase;">{{ email_patient }}</p>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-1">
                                <v-col cols="3" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 schedule-schedule-subtitle">Address:</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p id="schedule_schedule_address" class="ma-0 pa-0" style="font-size: 15px; text-transform: capitalize;">{{ address_patient }}</p>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="6" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p id="schedule_schedule_doctor" class="ma-0 pa-0 schedule-schedule-title">{{ name_doctor }}</p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-2">
                        <v-col cols="3" class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 schedule-schedule-subtitle">Token Id:</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p id="schedule_schedule_id" class="ma-0 pa-0 schedule-schedule-text">{{ id }}</p>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-1">
                        <v-col cols="8" class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-col cols="4" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 schedule-schedule-subtitle">Schedule:</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p id="schedule_schedule_schedule" class="ma-0 pa-0 schedule-schedule-text">{{ time }} hrs / {{ endTime() }} hrs</p>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 schedule-schedule-subtitle">Room:</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p id="schedule_schedule_room" class="ma-0 pa-0 schedule-schedule-text">{{ room }}</p>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-1">
                        <v-col cols="2" class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 schedule-schedule-subtitle">Date:</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p id="schedule_schedule_schedule" class="ma-0 pa-0 schedule-schedule-text">{{ date }}</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        photo: {
            type: String,
            default: ''
        },
        name_patient: {
            type: String,
            default: ''
        },
        age_patient: {
            type: String,
            default: ''
        },
        sex_patient: {
            type: String,
            default: ''
        },
        phone_patient: {
            type: String,
            default: ''
        },
        email_patient: {
            type: String,
            default: ''
        },
        address_patient: {
            type: String,
            default: ''
        },
        name_doctor: {
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
        room: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            //
        }
    },
    methods: {
        endTime () {
            const startTime = new Date(`2000-01-01T${this.time}`)

            const endTime = new Date(startTime.getTime() + 30 * 60000)

            const endTimeString = `${endTime.getHours()}:${endTime.getMinutes().toString().padStart(2, '0')}`

            return endTimeString
        }
    }
}
</script>
