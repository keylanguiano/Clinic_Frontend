<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="ma-0 pa-0 pl-10 pr-10">
            <v-row class="ma-0 pa-0 mt-10">
                <user-search class="ma-0 pa-0" />

                <v-col cols="2" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col class="ma-0 pa-0">
                            <v-btn rounded color="#ffaa92" to="/" class="ma-0 pa-5 pt-7 pb-7">
                                <p class="ma-0 pa-0 button-secondary">Log In</p>
                            </v-btn>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-btn rounded color="#ffaa92" to="/" class="ma-0 pa-5 pt-7 pb-7">
                                <p class="ma-0 pa-0 button-secondary">Sign Up</p>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="block-dashboard ma-0 pa-0 pt-3 pb-3 mt-6" justify="center" align="center">
                <v-col class="ma-0 pa-0 ml-3" cols="1" justify="center" align="center">
                    <img class="ma-0 pa-0" src="../../assets/home/dashboard/alert.svg" />
                </v-col>

                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0" style="font-size: 20px; font-weight: 600">New Covid-19 Update For Patients</p>
                    </v-row>

                    <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0" style="font-size: 14px;">All patients that have not received their result for covid-19 will need to ensure they stay isolated for a minimum of 14 days</p>
                    </v-row>
                </v-col>

                <v-col class="ma-0 pa-0" cols="2" justify="center" align="center">
                    <v-row justify="center" align="center">
                        <v-btn rounded color="#6C83FF" class="ma-0 pa-3">
                            <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 13px;">See More</span>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-5">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="4"  class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 dashboard-subtitle">Appointment</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-5">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 dashboard-subtitle">Recent Activity</p>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-3">
                        <v-col cols="4" class="block-dashboard ma-0 pa-3" style="height: 200px; align-content: center !important;">
                            <v-row v-if="scheduleNext.id" class="ma-0 pa-0 pl-8 pr-8">
                                <v-col class="ma-0 pa-0" cols="3">
                                    <img class="ma-0 pa-0 dashboard-doctor-photo" :src="doctor.photo" />
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 dashboard-appointment-doctor-name">{{ doctor.name }}</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0 dashboard-appointment-doctor-specialist">{{ doctor.specialist }}</p>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row v-if="scheduleNext.id" class="ma-0 pa-0 mt-4 pl-8 pr-8">
                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="6" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="3" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0 dashboard-appointment-title">Date</p>
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="appointment_date" class="ma-0 pa-0 dashboard-appointment-text">{{ scheduleNext.date }}</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>

                                        <v-col cols="6" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="3" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0 dashboard-appointment-title">Time</p>
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="appointment_time" class="ma-0 pa-0 dashboard-appointment-text">{{ scheduleNext.time }} hrs</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-5">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p style="font-size: 13px; font-weight: 600;" class="ma-0 pa-0">Address</p>
                                            </v-row>
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="appointment_address" class="ma-0 pa-0 dashboard-appointment-text">{{ scheduleNext.address_patient }}</p>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-3">
                                        <v-col cols="6" class="ma-0 pa-0">
                                            <v-btn color="transparent" rounded elevation="0" class="ma-0 pa-0 px-1 dashboard-appointment-button" @click="cancelBooking (schedule.id)">
                                                <v-col cols="2" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/dashboard/cancel.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0 ml-2 dashboard-appointment-button-text">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Cancel Booking</p>
                                                    </v-row>
                                                </v-col>
                                            </v-btn>
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-btn color="transparent" rounded elevation="0" class="ma-0 pa-0 px-1 dashboard-appointment-button" @click="showUpdate = true">
                                                <v-col cols="2" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/nav/schedule.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0 ml-2">
                                                        <p class="ma-0 pa-0 dashboard-appointment-button-text">Reschedule</p>
                                                    </v-row>
                                                </v-col>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row v-if="!scheduleNext.id" class="ma-0 pa-0 d-flex align-center justify-center" align="center" justify="center">
                                <p class="ma-0 pa-0 dashboard-appointment-no-available align-center justify-center" align="center" justify="center">There are no appointments available</p>
                            </v-row>
                        </v-col>

                        <v-col class="block-dashboard ma-0 pa-0 ml-7 px-8 py-4 align-center" justify="center" style="height: 200px !important; align-content: center !important;">
                            <v-row class="ma-0 pa-0" style="height: 100% !important; overflow-y: auto !important;">
                                <v-col class="ma-0 pa-0" >
                                    <v-row class="ma-0 pa-0 mb-4" v-for="(recent, index) in recent_activity" :key="index">
                                        <user-recent-activity class="ma-0 pa-0" :doctor_photo="recent.photo" :doctor_name="recent.doctor" :doctor_specialist="recent.specialist" :recent_activity_details="recent.details" />
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-5">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="4" class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 dashboard-subtitle">Medication</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-7">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 dashboard-subtitle">Current Condition of Patients</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-5">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 dashboard-subtitle">Recent bills</p>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-3">
                        <v-col cols="4" class="ma-0 pa-0" style="height: calc(100vh - 550px); overflow-y: scroll !important; ">
                            <v-row class="ma-0 pa-0" v-for="(medication, index) in medications" :key="index">
                                <user-medication class="ma-0 pa-0 mb-4" :medication="medication.medication" :prescription="medication.prescription"  :date="medication.schedule.date" />
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-7">
                            <v-col v-if="schedule_details" class="block-dashboard ma-0 pa-0 pl-5 pr-5" style="height: 100%; align-content: center;">
                                <v-row class="ma-0 pa-0" >
                                    <p class="ma-0 pa-1 pl-2 pr-2 block-alternative-dashboard" style="color: white; font-size: 14px; font-weight: 600;">{{ schedule_details.degree }}</p>
                                </v-row>

                                <v-row class="ma-0 pa-0 mt-7">
                                    <v-col cols="7" class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_name" style="font-size: 18px; font-weight: 600;" class="ma-0 pa-0">{{ schedule_details.diagnostic }}</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_info" style="font-size: 15px;" class="ma-0 pa-0">{{ schedule_details.diagnostic_details }}</p>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="1" />

                                    <v-col class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p style="font-size: 13px; font-weight: 600;" class="ma-0 pa-0">Next Appointment </p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <v-col class="ma-0 pa-0">
                                                <v-row class="ma-0 pa-0">
                                                    <v-col cols="2" class="ma-0 pa-0">
                                                        <v-row class="ma-0 pa-0">
                                                            <img width="20" class="ma-0 pa-0" src="../../assets/home/nav/schedule.svg" />
                                                        </v-row>
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0">
                                                        <v-row class="ma-0 pa-0 ml-2">
                                                            <p class="ma-0 pa-0" style="font-size: 13px;">Reschedule</p>
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>

                                <v-row class="ma-0 pa-0 mt-7">
                                    <v-col cols="6" class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p style="font-size: 15px; font-weight: 600;" class="ma-0 pa-0">Primary Doctor</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p v-if="schedule_details && schedule_details.doctor && schedule_details.doctor.name" id="current_condition_primary_doctor" style="font-size: 15px;" class="ma-0 pa-0">{{ schedule_details.doctor.name }}</p>
                                        </v-row>
                                    </v-col>

                                    <v-col class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p style="font-size: 15px; font-weight: 600;" class="ma-0 pa-0">Treatment</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_treatment" class="ma-0 pa-0" style="font-size: 15px;">{{ schedule_details.medication }}</p>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-row v-if="!schedule_details" class="ma-0 pa-0" align="center" justify="center">
                                <p class="ma-0 pa-0 dashboard-appointment-no-available">There are no conditions of patients available</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-5">
                            <v-row class="block-dashboard ma-0 pa-0 pl-5 pr-5" justify="center" align="center" style="height: 100%;">
                                <v-col v-if="schedulePrev.patient" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col class="ma-0 pa-0" cols="7" justify="center" align="center">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 15px;">Your Payment</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_bills_your_payment" class="ma-0 pa-0" style="font-size: 25px; font-weight: 600;">${{ payment }}.00</p>
                                            </v-row>
                                        </v-col>

                                        <v-col class="ma-0 pa-0" justify="center" align="center">
                                            <v-row class="ma-0 pa-0">
                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Medicare</p>
                                                    </v-row>

                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_medicare" class="ma-0 pa-0" style="font-size: 18px; font-weight: 600;">${{ medicare }}.00</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>

                                            <v-row class="ma-0 pa-0 mt-2">
                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Total</p>
                                                    </v-row>

                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_total" class="ma-0 pa-0" style="font-size: 18px; font-weight: 600;">${{ total }}</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-4">
                                        <v-col v-if="schedulePrev && schedulePrev.patient" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_bills_paid" class="ma-0 pa-0" style="font-size: 13px;">{{ schedulePrev.patient.address }}</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="1" class="ma-0 pa-0" style="justify-content: center; align-content: center;">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/dashboard/address.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_address" class="ma-0 pa-0" style="font-size: 13px;">{{ schedulePrev.patient.address }}</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-5">
                                        <v-col cols="5" class="ma-0 pa-2 pl-4 pr-4" style="border: 1px solid #575757; border-radius: 50px;">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 13px; font-weight: 600;">Next Appointment</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="3" class="ma-0 pa-0" style="justify-content: center; align-content: center;">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/nav/schedule.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Reschedule</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row v-if="!schedulePrev.patient" class="ma-0 pa-0 d-flex align-center justify-center" align="center" justify="center">
                                        <p class="ma-0 pa-0 dashboard-appointment-no-available align-center justify-center" align="center" justify="center">There are no previous appointments that ended within the last 15 minutes</p>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <user-alert :text="alertText" :color="alertColor" :type="alertType" v-if="showAlert" />

        <v-dialog v-model="showDelete" persistent width="500" class="pa-5" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
            <p class="mt-10" style="font-size: 35px">Delete schedule</p>

            <p class="mt-10" style="font-size: 20px">Are you sure?</p>

            <v-card-actions class="ma-0 pa-0">
                <v-col cols="6">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="showDelete = false">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Cancel</span>
                    </v-btn>
                </v-col>

                <v-col cols="6">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="deleteAppointment (schedule.id)">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Delete</span>
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-dialog>

        <v-dialog v-model="showUpdate" persistent width="500" class="pa-5" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
            <p class="mt-3" style="font-size: 25px">Update Schedule</p>

            <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                <v-form ref="formUpdateSchedule" v-model="validFormUpdateSchedule">
                    <v-row class="ma-0 pa-0 mt-2 align-center justify-center" align="center" justify="center">
                        <v-menu
                            ref="date"
                            v-model="datePickerVisible"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                            class="ma-0 pa-0 align-center justify-center"
                        >
                            <template #activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date_update_appointment"
                                    rounded
                                    label="Date"
                                    style="border: 0.5px solid black !important; border-radius: 50px; height: 56px;"
                                    v-bind="attrs"
                                    readonly
                                    v-on="on"
                                    @click="date = true"
                                    @input="datePickerVisible = false"
                                    :rules="[rules.required]"
                                    class="ma-0 pa-0"
                                >
                                    <template #append>
                                        <v-row class="ma-0 pa-0 d-flex align-center schedule-icon-calendar" @click="openDatePicker">
                                            <img src="../../assets/home/nav/schedule.svg" width="30px" class="ma-0 pa-0" style="cursor: pointer;" />
                                        </v-row>
                                    </template>
                                </v-text-field>
                            </template>

                            <v-date-picker
                                v-model="date_update_appointment"
                                no-title
                                scrollable
                                :min="getToday()"
                                locale="es"
                                header-color="#ffccba"
                                @input="closeDatePicker"
                            />
                        </v-menu>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-2 align-center justify-center" align="center" justify="center">
                        <v-menu
                            ref="time"
                            v-model="clockPickerVisible"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                            class="ma-0 pa-0 align-center justify-center"
                        >
                            <template #activator="{ on, attrs }">
                                <v-text-field
                                    v-model="time_update_appointment"
                                    rounded
                                    label="Time"
                                    :disabled="!date_update_appointment"
                                    style="border: 0.5px solid black !important; border-radius: 50px; height: 56px;"
                                    v-bind="attrs"
                                    clearable
                                    readonly
                                    v-on="on"
                                    @click="time = true"
                                    @input="clockPickerVisible = false"
                                    :rules="[rules.required]"
                                    class="ma-0 pa-0"
                                >
                                    <template #append>
                                        <v-row class="ma-0 pa-0 d-flex align-center schedule-icon-calendar" @click="openClockPicker">
                                            <img src="../../assets/home/schdule/clock.svg" width="30px" class="ma-0 pa-0" style="cursor: pointer;" />
                                        </v-row>
                                    </template>
                                </v-text-field>
                            </template>

                            <v-time-picker
                                v-model="time_update_appointment"
                                :allowed-hours="availableAllHours"
                                :allowed-minutes="availableAllMinutes"
                                class="mt-4"
                                format="24hr"
                                scrollable
                                header-color="#ffccba"
                                :disabled="!date_update_appointment"
                                min="9:00"
                                max="19:30"
                                @click:hour="availableMinutes"
                                @click="availableHours"
                                @input="closeClockPicker"
                            />
                        </v-menu>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-combobox
                            :rules="[rules.required]"
                            class="ma-0 pa-0"
                            v-model="room_update_appointment"
                            :items="rooms"
                            clearable
                            outlined
                            rounded
                            label="Room"
                        />
                    </v-row>
                </v-form>
            </v-card-text>

            <v-card-actions class="ma-0 pa-0">
                <v-col cols="6">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="showUpdate = false">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Cancel</span>
                    </v-btn>
                </v-col>

                <v-col cols="6">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="updateAppointment ()">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Update</span>
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-dialog>
    </div>
</template>

<script>
import * as jose from 'jose'

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            token: '',
            doctors: [],
            schedules: [],
            scheduleNext: [],
            schedulePrev: [],
            medications: [],
            recent_activity: [],
            schedule_details: [],
            idDelete: '',
            showDelete: false,
            showUpdate: false,
            date_update_appointment: '',
            time_update_appointment: '',
            room_update_appointment: null,
            rooms:
            [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10'
            ],
            datePickerVisible: false,
            clockPickerVisible: false,
            availableTimes: [],
            availableAllHours: [],
            availableAllMinutes: [],
            validFormUpdateSchedule: false,
            payment: 100,
            medicare: 0,
            doctor_photo: '',
            doctor_name: '',
            doctor_email: '',
            showAlert: false,
            alertText: '',
            alertColor: '',
            alertType: '',
            rules: {
                required: value => !!value || 'Required field',
                counter: value => value.length <= 20 || 'Max 10 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            }
        }
    },
    computed: {
        total () {
            return (Number(this.payment) + Number(this.medicare)).toFixed(2)
        }
    },
    mounted () {
        this.email_doctor()
        this.getDoctors()
        this.fetchAllSchedulesDetails()
        this.fetchAllSchedules()
        this.fetchAllChanges()

        this.medicare = localStorage.getItem('TotalPrice')
    },
    watch: {
        date_update_appointment (newDate) {
            this.fetchAvailableTimes(newDate)
        }
    },
    methods: {
        async getDoctors () {
            const url = '/get-all-doctors'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.doctors = res.data.doctors

                        this.getDoctor()
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        email_doctor () {
            this.token = localStorage.getItem('Token')

            console.log('Token email doctor funcion:', this.token)

            const secret = new TextEncoder().encode('MySecretPassword')

            if (this.token) {
                try {
                    const claims = jose.decodeJwt(this.token, secret)
                    console.log('@ Keyla => Claims:', claims)

                    this.claims = claims
                } catch (error) {
                    console.error('JWT Decryption Error:', error)
                }
            } else {
                console.error('Token not found in localStorage')
                return null
            }
        },
        getDoctor () {
            console.log('@ Keyla => Claims:', this.claims)
            console.log('@ Keyla => Doctors:', this.doctors)

            if (this.claims) {
                this.doctor = this.doctors.find(doctor => this.claims.email === doctor.email)

                console.log('Doctor encontrado:', this.doctor)

                console.log('Doctor email:', this.doctor.email)

                this.$store.commit('setDoctor', this.doctor.email)
                localStorage.setItem('Doctor', this.doctor.email)

                this.doctor_photo = this.doctor.photo
                this.doctor_name = this.doctor.name
                this.doctor_email = this.doctor.email

                localStorage.setItem('DoctorPhoto', this.doctor_photo)
                localStorage.setItem('DoctorName', this.doctor_name)
                localStorage.setItem('DoctorEmail', this.doctor_email)
            } else {
                console.error('Claims not found')
            }
        },
        getToday () {
            const date = new Date()
            const options = {
                timeZone: 'America/Mexico_City',
                hour12: false,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
            const formattedDate = date.toLocaleString('es-MX', options)
            const isoDateTime = formattedDate.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1T$4:$5:$6.000Z')

            return isoDateTime
        },
        async fetchAllSchedules () {
            const url = '/get-all-schedules'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.schedules = res.data.schedules

                        console.log('@ Keyla => All schedules ', this.schedules)
                        console.log('@ Keyla => dr ', this.doctor.email)

                        this.schedules = this.schedules.filter(schedule => schedule.email_doctor === this.doctor.email)

                        console.log('@ Keyla => Filtered Schedules By Doctor ', this.schedules)

                        this.findNextAppointment()
                        this.findPrevAppointment()
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        findNextAppointment () {
            const currentTimeISO = this.getToday()

            console.log('@ Keyla => currentTimeISO ', currentTimeISO)

            const futureAppointments = this.schedules.filter(schedule => {
                const scheduleDateTime = new Date(schedule.date.split('/').reverse().join('-') + 'T' + schedule.time + ':00').toISOString()

                const currentDateTime = new Date(currentTimeISO).toISOString()

                return scheduleDateTime > currentDateTime
            })

            console.log('@ Keyla => order Appointments ', futureAppointments)

            if (futureAppointments.length > 0) {
                futureAppointments.sort((a, b) => {
                    if (a.date !== b.date) {
                        return a.date.localeCompare(b.date)
                    } else {
                        return a.time.localeCompare(b.time)
                    }
                })

                const nextAppointment = futureAppointments[0]

                console.log('@ Keyla => Next Appointment ', nextAppointment)

                this.scheduleNext = nextAppointment

                return this.scheduleNext
            } else {
                console.log('@ Keyla => No hay citas futuras disponibles')

                return null
            }
        },
        findPrevAppointment () {
            const currentTime = new Date()
            const currentTimeMinus15 = new Date(currentTime.getTime() - 15 * 60000)

            const prevAppointments = this.schedules.filter(schedule => {
                const scheduleDateTime = new Date(schedule.date.split('/').reverse().join('-') + 'T' + schedule.time + ':00')

                return scheduleDateTime < currentTime && scheduleDateTime >= currentTimeMinus15
            })

            console.log('@ Keyla => prev Appointments ', prevAppointments)

            if (prevAppointments.length > 0) {
                prevAppointments.sort((a, b) => {
                    if (a.date !== b.date) {
                        return b.date.localeCompare(a.date)
                    } else {
                        return b.time.localeCompare(a.time)
                    }
                })

                const prevAppointment = prevAppointments[0]

                console.log('@ Keyla => Previous Appointment ', prevAppointment)

                this.schedulePrev = prevAppointment

                return this.schedulePrev
            } else {
                console.log('@ Keyla => No hay citas anteriores que finalizaron dentro de los últimos 15 minutos')

                return null
            }
        },
        cancelBooking (id) {
            this.idDelete = id
            this.showDelete = true
        },
        deleteAppointment () {
            const url = `/schedules/${this.idDelete}`
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.delete(url, config)
                .then((res) => {
                    console.log('@ Keyla => Res ', res)

                    if (res.status === 204) {
                        this.showDelete = false

                        this.findNextAppointment()

                        this.showAlert = true
                        this.alertText = 'Schedule deleted'
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error ', err)

                    this.showAlert = true
                    this.alertText = err.message
                    this.alertColor = '#FF9F8E'
                    this.alertType = 'warning'

                    setTimeout(() => {
                        this.showAlert = false
                    }, 3000)

                    this.email_user = null
                    this.password_user = null
                })
        },
        async fetchAllSchedulesDetails () {
            const url = '/get-all-schedules-details'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.schedules_details = res.data.schedules_details

                        console.log('@ Keyla => All schedules details ', this.schedules_details)

                        this.schedules_details = this.schedules_details.filter(scheduleDetails =>
                            (scheduleDetails.email_doctor === this.doctor.email))

                        console.log('@ Keyla => Doctor schedules details ', this.schedules_details)

                        this.medications = this.schedules_details.sort((a, b) => new Date(b.date) - new Date(a.date))

                        console.log('@ Keyla => Last schedules details', this.medications)

                        this.schedule_details = this.medications[0]
                        console.log('@ Keyla => Last details', this.schedule_details)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        async fetchAllChanges () {
            try {
                const schedulesResponse = await this.$axios.get('/get-all-schedules', { headers: { Authorization: `Bearer ${this.token}` } })
                const detailsResponse = await this.$axios.get('/get-all-schedules-details', { headers: { Authorization: `Bearer ${this.token}` } })

                if (schedulesResponse.data.message === 'Success' && detailsResponse.data.message === 'Success') {
                    const allChanges = [
                        ...schedulesResponse.data.schedules.map(schedule => ({ ...schedule, type: 'schedule' })),
                        ...detailsResponse.data.schedules_details.map(detail => ({ ...detail, type: 'schedule_details' }))
                    ]

                    allChanges.sort((a, b) => {
                        const dateA = a.id.substring(0, 14)
                        const dateB = b.id.substring(0, 14)

                        if (dateA < dateB) return 1
                        if (dateA > dateB) return -1

                        return 0
                    })

                    this.recent_activity = allChanges
                        .filter(change => change.email_doctor === this.doctor.email)
                        .map(change => {
                            if (change.type === 'schedule') {
                                return {
                                    photo: change.doctor.photo,
                                    doctor: change.doctor.name,
                                    specialist: change.doctor.specialist,
                                    details: `An appointment was scheduled with Dr. ${change.doctor.name} for ${change.date} at ${change.time} hrs`
                                }
                            } else if (change.type === 'schedule_details') {
                                return {
                                    photo: change.doctor.photo,
                                    doctor: change.doctor.name,
                                    specialist: change.doctor.specialist,
                                    details: `Patient ${change.patient.name} was attended by Dr. ${change.doctor.name} and prescribed ${change.medication} with the prescription ${change.prescription}`
                                }
                            }

                            return null
                        })

                    console.log('@ Keyla => Recent Activity ', this.recent_activity)
                } else {
                    console.error('Error retrieving all changes')
                }
            } catch (error) {
                console.error('Error fetching all changes:', error)
            }
        },
        openDatePicker () {
            this.datePickerVisible = true
        },
        closeDatePicker () {
            this.datePickerVisible = false
        },
        openClockPicker () {
            this.clockPickerVisible = true
        },
        closeClockPicker () {
            this.clockPickerVisible = false
        },
        async fetchAvailableTimes (date) {
            const url = `/get-available-date-time-schedules?email_doctor=${this.doctor.email}&date=${date}`
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            console.log('@ Keyla => url available times', url)

            this.$axios.get(url, config)
                .then((res) => {
                    if (res.data.availableTimes) {
                        console.log('@ Keyla => available times', res.data.availableTimes)

                        this.availableTimes = res.data.availableTimes

                        this.availableAllHours = [...new Set(this.availableTimes.map(time => parseInt(time.split(':')[0])))]

                        console.log('@ Keyla => available hours', this.availableAllHours)

                        return this.availableAllHours
                    }
                })
                .catch((err) => {
                    console.log('Error fetching available times', err)
                })
        },
        availableHours () {
            if (this.availableTimes) {
                return this.availableAllHours.filter(hour => {
                    const selectedHour = parseInt(this.time_update_appointment.split(':')[0])

                    return hour >= selectedHour
                })
            } else {
                return this.availableAllHours
            }
        },
        async availableMinutes (selectedHour) {
            if (this.availableTimes && this.availableAllHours) {
                const existingReservations = this.schedules.filter(schedule => {
                    const [hour, minute] = schedule.time.split(':').map(Number)

                    console.log('@ Keyla => selected hour', selectedHour)
                    console.log('@ Keyla => hour minute', hour, minute)
                    console.log('@ Keyla => not available minute', minute)

                    return hour === selectedHour && schedule.date === this.date_update_appointment
                })

                console.log('@ Keyla => existing reservations', existingReservations)

                const occupiedMinutes = existingReservations.map(schedule => parseInt(schedule.time.split(':')[1]))
                const allAvailableMinutes = this.availableTimes.flatMap(time => {
                    const [hour, minute] = time.split(':').map(Number)

                    return hour === selectedHour ? [minute.toString().padStart(2, '0')] : []
                })

                console.log('@ Keyla => allAvailableMinutes', allAvailableMinutes)

                const availableMinutes = allAvailableMinutes.filter(minute => !occupiedMinutes.includes(parseInt(minute)))

                console.log('@ Keyla => available minutes', availableMinutes)

                this.availableAllMinutes = availableMinutes.map(minute => parseInt(minute, 10))

                console.log('@ Keyla => available all minutes', this.availableAllMinutes)

                return this.availableAllMinutes
            } else {
                return []
            }
        },
        async updateAppointment () {
            if (this.$refs.formUpdateSchedule.validate()) {
                const url = `/schedules/${this.scheduleNext.id}`
                const data = {
                    date: this.date_update_appointment,
                    time: this.time_update_appointment,
                    room: this.room_update_appointment
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                }

                console.log('this.scheduleNext.id', this.scheduleNext.id)
                console.log('data', data)

                this.$axios.put(url, data, config)
                    .then((res) => {
                        console.log('@ Keyla => Response ', res)

                        if (res.data.message === 'Success') {
                            this.showAlert = true
                            this.alertText = res.data.message
                            this.alertColor = '#6CDACE'
                            this.alertType = 'success'

                            this.fetchAllSchedules()
                            this.fetchAllChanges()

                            this.showUpdate = false

                            setTimeout(() => {
                                this.showAlert = false
                            }, 3000)

                            this.$refs.formUpdateSchedule.reset()
                        }
                    })
                    .catch((err) => {
                        console.log('@ Keyla => Error Frontend', err)

                        if (err.response && err.response.data && err.response.data.message) {
                            this.showAlert = true
                            this.alertText = err.response.data.message
                            this.alertColor = '#FF9F8E'
                            this.alertType = 'warning'
                        }

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)

                        this.date_update_appointment = null
                        this.time_update_appointment = null
                        this.room_update_appointment = null
                    })
            } else {
                console.log('@ Keyla => Missing fields')

                this.showAlert = true
                this.alertText = 'Missing fields'
                this.alertColor = '#FF9F8E'
                this.alertType = 'warning'

                setTimeout(() => {
                    this.showAlert = false
                }, 3000)
            }
        }
    }
}
</script>
