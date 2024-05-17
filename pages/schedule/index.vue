<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="pa-1 pl-3 pr-3" >
            <v-row class="ma-0 pa-0">
                <user-search />

                <v-col cols="2" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0 d-flex justify-end">
                        <v-btn rounded color="#ffaa92" class="ma-0 pa-5 pt-7 pb-7" @click="showNewPatient = true">
                            <p class="ma-0 pa-0 button-secondary">New Patients</p>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-10">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="schedule_schedule_yesterday_schedule" rounded class="ma-0 pa-5 schedule-schedule-button">
                                    <span class="ma-0 pa-0 schedule-schedule-button-text">Yesterday Schedule</span>
                                </v-btn>
                            </v-row>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="schedule_schedule_today_schedule" rounded class="ma-0 pa-5 schedule-schedule-button">
                                    <span class="ma-0 pa-0 schedule-schedule-button-text">Today Schedule</span>
                                </v-btn>
                            </v-row>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="schedule_schedule_tomorrow_schedule" rounded class="ma-0 pa-5 schedule-schedule-button">
                                    <span class="ma-0 pa-0 schedule-schedule-button-text">Tomorow Schedule</span>
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="3" />
            </v-row>

            <v-row class="ma-0 pa-0 mt-3 pb-5 schedule-schedule-list">
                <v-col class="ma-0 pa-0 overflow-auto">
                    <user-schedule />

                    <user-schedule />

                    <user-schedule />

                    <user-schedule />
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 pl-10 pr-10 d-flex align-center schedule-schedule-footer">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0 schedule-doctors-title">Doctors</p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-4 schedule-doctors">
                        <user-doctor />

                        <user-doctor />

                        <user-doctor />

                        <user-doctor />

                        <user-doctor />
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <v-dialog v-model="showNewPatient" persistent width="500" class="ma-0 pa-0" transition="dialog-bottom-transition" content-class="schedule-new-patient-dialog">
            <v-col class="ma-0 pa-0 d-flex flex-column justify-center align-center">
                <v-row cols="4" class="ma-0 pa-0">
                    <img class="ma-0 pa-0" width="150" src="../../assets/home/dashboard/alert.svg" />
                </v-row>

                <v-row class="ma-0 pa-0 mt-3 justify-center align-center">
                    <v-col class="ma-0 pa-0">
                        <v-row class="ma-0 pa-0 justify-center align-center">
                            <p id="schedule_new_patient_dialog_doctor_name" class="ma-0 pa-0 schedule-new-patient-dialog-doctor-name">dr. paul MBBS,.MS.</p>
                        </v-row>

                        <v-row class="ma-0 pa-0 mt-1 justify-center align-center">
                            <p id="schedule_new_patient_dialog_doctor_specialist" class="ma-0 pa-0 schedule-new-patient-dialog-doctor-specialist">Orthopedists specialist</p>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

            <p class="mt-4" style="font-size: 30px">For a Appointment</p>

            <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                <v-form ref="form" v-model="validForm">
                    <v-row width="100%" class="ma-0 mt-0">
                        <v-text-field v-model="name" clearable label="Name" type="text" :rules="[required]" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field v-model="email" clearable label="Email" type="email" :rules="[required]" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field v-model="phone" clearable label="Phone" type="text" :rules="[required]" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field v-model="address" clearable label="Address" type="text" :rules="[required]" rounded outlined/>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-2">
                        <v-menu
                            ref="date"
                            v-model="datePickerVisible"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template #activator="{ on, attrs }">
                                <v-text-field
                                    v-model="dates"
                                    rounded
                                    label="Date"
                                    style="border: 0.5px solid black !important; border-radius: 50px; height: 56px;"
                                    v-bind="attrs"
                                    readonly
                                    v-on="on"
                                    @click="date = true"
                                    @input="datePickerVisible = false"
                                    :rules="[required]"
                                    class="ma-0 pa-0">
                                    <template #append>
                                        <v-row class="ma-0 pa-0 d-flex align-center" @click="openDatePicker">
                                            <img src="../../assets/home/nav/schedule.svg" width="30px" class="ma-0 pa-0" style="cursor: pointer;" />
                                        </v-row>
                                    </template>
                                </v-text-field>
                            </template>

                            <v-date-picker
                            v-model="dates"
                            no-title
                            scrollable
                            locale="es"
                            header-color="#00468C"
                            @input="closeDatePicker"
                            />
                        </v-menu>
                    </v-row>
                </v-form>
            </v-card-text>

            <v-card-actions class="ma-0 pa-0 pl-4 pr-4 mt-5">
                <v-col cols="6" class="ma-0 mt-0">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="showNewPatient = false">
                        <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Cancel</span>
                    </v-btn>
                </v-col>

                <v-col cols="6" class="ma-0 mt-0">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="booking">
                        <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Booking</span>
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-dialog>
    </div>
</template>

<script>

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            name: null,
            email: null,
            phone: null,
            address: null,
            datePickerVisible: false,
            dates: '',
            showNewPatient: false,
            showAlert: false,
            alertText: '',
            alertColor: '',
            alertType: '',
            validForm: false,
            required: value => !!value || 'Required field'
        }
    },
    methods: {
        booking () {
            console.log('@ Keyla => Booking')
        },
        openDatePicker () {
            this.datePickerVisible = true
        },
        closeDatePicker () {
            this.datePickerVisible = false
        }
    }
}
</script>

<style scoped>
    .v-text-field .v-label--active
    {
        position: absolute !important;
        left: 0 !important;
        right: auto !important;
        transform-origin: top left !important;
        transform: translateY(-24px) scale(0.75) !important;
        background-color: #ffe7db !important;
        padding: 0px 5px !important;
    }
</style>
