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
                                    <v-row class="ma-0 pa-0 mt-1">
                                        <v-col cols="2" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p style="font-size: 13px; font-weight: 600;" class="ma-0 pa-0">Patient</p>
                                            </v-row>
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="appointment_patient" class="ma-0 pa-0 dashboard-appointment-text">{{ scheduleNext.name_patient }}</p>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-1">
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

                                    <v-row class="ma-0 pa-0 mt-1">
                                        <v-col cols="2" class="ma-0 pa-0">
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

                                <v-row v-if="schedule_details && schedule_details.patient" class="ma-0 pa-0 mt-5">
                                    <v-col cols="7" class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_name" style="font-size: 18px; font-weight: 600;" class="ma-0 pa-0">Patient</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_info" style="font-size: 15px;" class="ma-0 pa-0">{{ schedule_details.patient.name }}</p>
                                        </v-row>
                                    </v-col>
                                </v-row>

                                <v-row class="ma-0 pa-0 mt-4">
                                    <v-col cols="7" class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_name" style="font-size: 18px; font-weight: 600;" class="ma-0 pa-0">{{ schedule_details.diagnostic }}</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_info" style="font-size: 15px;" class="ma-0 pa-0">{{ schedule_details.diagnostic_details }}</p>
                                        </v-row>
                                    </v-col>

                                    <v-btn class="ma-0 pa-0 px-4 py-7 dashboard-current-condition-btn-schedule" elevation="0" @click="showScheduleNextCurrentCondition = true">
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
                                                                <p class="ma-0 pa-0" style="font-size: 13px;">Schedule</p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-btn>
                                </v-row>

                                <v-row class="ma-0 pa-0 mt-5">
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
                            <v-row class="block-dashboard ma-0 pa-0 px-10" justify="center" align="center" style="height: 100%;">
                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col class="ma-0 pa-0" cols="8" justify="center" align="center">
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
                                        <v-col v-if="scheduleRecent && scheduleRecent.patient" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_bills_paid" class="ma-0 pa-0" style="font-size: 13px;">Pay on {{ scheduleRecent.date }} to {{ scheduleRecent.doctor.name }}</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 13px;">{{ scheduleRecent.patient.name }}</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 13px;">Appointment: {{ scheduleRecent.time }}</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="1" class="ma-0 pa-0" style="justify-content: center; align-content: center;">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/dashboard/address.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_address" class="ma-0 pa-0" style="font-size: 13px;">{{ scheduleRecent.patient.address }}</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>

                                        <v-col v-if="!scheduleRecent.patient" class="ma-0 pa-0 mt-4">
                                            <v-row class="ma-0 pa-0 px-3">
                                                <p class="ma-0 pa-0 dashboard-appointment-no-available align-center justify-center" align="center" justify="center">There are no appointments in progress or that have concluded in the last 15 minutes.</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0 mt-4" align="end" justify="end">
                                                <v-col class="ma-0 pa-0 d-flex flex-column align-center justify-center" cols="1" justify="center" align="center">
                                                    <img class="ma-0 pa-0" src="../../assets/home/dashboard/more.svg" />
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row v-if="scheduleRecent && scheduleRecent.patient" class="ma-0 pa-0 mt-5">
                                        <v-col class="ma-0 pa-0">
                                            <v-btn class="ma-0 pa-0 py-7 px-4 dashboard-recent-bills-btn-schedule" @click="showScheduleNextRecent = true">
                                                <v-col cols="auto" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0 dashboard-recent-bills-btn-schedule-title">Next Appointment</p>
                                                    </v-row>

                                                    <v-row class="ma-0 pa-0">
                                                        <v-col cols="3" class="ma-0 pa-0" style="">
                                                            <v-row class="ma-0 pa-0">
                                                                <img width="20" class="ma-0 pa-0 dashboard-recent-bills-btn-schedule-text" src="../../assets/home/nav/schedule.svg" />
                                                            </v-row>
                                                        </v-col>

                                                        <v-col class="ma-0 pa-0">
                                                            <v-row class="ma-0 pa-0">
                                                                <p class="ma-0 pa-0">Schedule</p>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-btn>
                                        </v-col>

                                        <v-col class="ma-0 pa-0 d-flex flex-column align-center justify-center" cols="1" justify="center" align="center">
                                            <img class="ma-0 pa-0" src="../../assets/home/dashboard/more.svg" />
                                        </v-col>
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
                    <v-row width="100%" class="ma-0 mt-0">
                        <v-text-field
                            v-model="name_update_appointment"
                            disabled
                            label="Name"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="email_update_appointment"
                            disabled
                            label="Email"
                            type="email"
                            :rules="[rules.required, rules.email]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="phone_update_appointment"
                            disabled
                            label="Phone"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="address_update_appointment"
                            disabled
                            label="Address"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

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

        <v-dialog v-model="showScheduleNextCurrentCondition" persistent width="500" class="pa-5" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
            <p class="mt-3" style="font-size: 25px">Schedule Next Appointment</p>

            <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                <v-form ref="formScheduleNextCurrentCondition" v-model="validFormScheduleNextCurrentCondition">
                    <v-row width="100%" class="ma-0 mt-0">
                        <v-text-field
                            v-model="name_next_appointment_current"
                            disabled
                            label="Name"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="email_next_appointment_current"
                            disabled
                            label="Email"
                            type="email"
                            :rules="[rules.required, rules.email]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="phone_next_appointment_current"
                            disabled
                            label="Phone"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="address_next_appointment_current"
                            disabled
                            label="Address"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

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
                                    v-model="date_next_appointment_current"
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
                                v-model="date_next_appointment_current"
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
                                    v-model="time_next_appointment_current"
                                    rounded
                                    label="Time"
                                    :disabled="!date_next_appointment_current"
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
                                v-model="time_next_appointment_current"
                                :allowed-hours="availableAllHours"
                                :allowed-minutes="availableAllMinutes"
                                class="mt-4"
                                format="24hr"
                                scrollable
                                header-color="#ffccba"
                                :disabled="!date_next_appointment_current"
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
                            v-model="room_next_appointment_current"
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
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="showScheduleNextCurrentCondition = false">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Cancel</span>
                    </v-btn>
                </v-col>

                <v-col cols="6">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="scheduleNextAppointmentCurrentCondition ()">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Schedule</span>
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-dialog>

        <v-dialog v-model="showScheduleNextRecent" persistent width="500" class="pa-5" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
            <p class="mt-3" style="font-size: 25px">Schedule Next Appointment</p>

            <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                <v-form ref="formScheduleNext" v-model="validFormScheduleNextRecent">
                    <v-row width="100%" class="ma-0 mt-0">
                        <v-text-field
                            v-model="name_next_appointment_recent"
                            disabled
                            label="Name"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="email_next_appointment_recent"
                            disabled
                            label="Email"
                            type="email"
                            :rules="[rules.required, rules.email]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="phone_next_appointment_recent"
                            disabled
                            label="Phone"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field
                            v-model="address_next_appointment_recent"
                            disabled
                            label="Address"
                            type="text"
                            :rules="[rules.required]"
                            rounded
                            outlined
                        />
                    </v-row>

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
                                    v-model="date_next_appointment_recent"
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
                                v-model="date_next_appointment_recent"
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
                                    v-model="time_next_appointment_recent"
                                    rounded
                                    label="Time"
                                    :disabled="!date_next_appointment_recent"
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
                                v-model="time_next_appointment_recent"
                                :allowed-hours="availableAllHours"
                                :allowed-minutes="availableAllMinutes"
                                class="mt-4"
                                format="24hr"
                                scrollable
                                header-color="#ffccba"
                                :disabled="!date_next_appointment_recent"
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
                            v-model="room_next_appointment_recent"
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
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="showScheduleNextRecent = false">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Cancel</span>
                    </v-btn>
                </v-col>

                <v-col cols="6">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="scheduleNextAppointmentRecent  ()">
                        <span class="ma-0 pa-0 dashboard-dialog-button-text">Schedule</span>
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
            scheduleRecent: [],
            medications: [],
            recent_activity: [],
            schedule_details: [],
            idDelete: '',
            showDelete: false,
            showUpdate: false,
            name_update_appointment: null,
            email_update_appointment: null,
            phone_update_appointment: null,
            address_update_appointment: null,
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
            payment: 0,
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
            },
            showScheduleNextCurrentCondition: false,
            validFormScheduleNextCurrentCondition: false,
            name_next_appointment_current: null,
            email_next_appointment_current: null,
            phone_next_appointment_current: null,
            address_next_appointment_current: null,
            date_next_appointment_current: '',
            time_next_appointment_current: '',
            room_next_appointment_current: null,
            showScheduleNextRecent: false,
            validFormScheduleNextRecent: false,
            name_next_appointment_recent: null,
            email_next_appointment_recent: null,
            phone_next_appointment_recent: null,
            address_next_appointment_recent: null,
            date_next_appointment_recent: '',
            time_next_appointment_recent: '',
            room_next_appointment_recent: null
        }
    },
    computed: {
        total () {
            const baseAmount = Number(this.medicare)
            const additionalAmount = this.scheduleRecent.patient ? 100 : 0

            return (baseAmount + additionalAmount).toFixed(2)
        }
    },
    mounted () {
        this.email_doctor()
        this.getDoctors()
        this.fetchAllSchedulesDetails()
        this.fetchAllSchedules()
        this.fetchAllChanges()
        this.checkAppointments()

        this.medicare = localStorage.getItem('TotalPrice')
    },
    watch: {
        date_update_appointment (newDate) {
            this.fetchAvailableTimes(newDate)
        },
        date_next_appointment_recent (newDate) {
            this.fetchAvailableTimes(newDate)
        },
        date_next_appointment_current (newDate) {
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
            const currentTime = new Date().getTime()

            const futureAppointments = this.schedules.filter(schedule => {
                const scheduleDateTime = new Date(schedule.date.split('/').reverse().join('-') + 'T' + schedule.time + ':00').getTime()

                return scheduleDateTime > currentTime
            })

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

                this.name_update_appointment = this.scheduleNext.patient.name
                this.email_update_appointment = this.scheduleNext.patient.email
                this.phone_update_appointment = this.scheduleNext.patient.phone
                this.address_update_appointment = this.scheduleNext.patient.address

                return this.scheduleNext
            } else {
                console.log('@ Keyla => No hay citas futuras disponibles')

                return null
            }
        },
        findPrevAppointment () {
            const currentTime = new Date()
            const currentTimeMinus15 = new Date(Date.now() - 15 * 60000)
            const currentTimePlus15 = new Date(Date.now() + 15 * 60000)

            const prevAppointments = this.schedules.filter(schedule => {
                const scheduleStartDateTime = new Date(schedule.date.split('/').reverse().join('-') + 'T' + schedule.time + ':00')
                const scheduleEndDateTime = new Date(scheduleStartDateTime.getTime() + 30 * 60000)
                return scheduleEndDateTime >= currentTimeMinus15 && scheduleEndDateTime <= currentTimePlus15
            })

            const currentAppointments = this.schedules.filter(schedule => {
                const scheduleStartDateTime = new Date(schedule.date.split('/').reverse().join('-') + 'T' + schedule.time + ':00')
                const scheduleEndDateTime = new Date(schedule.date.split('/').reverse().join('-') + 'T' + schedule.time + ':00')
                scheduleEndDateTime.setMinutes(scheduleEndDateTime.getMinutes() + 30)

                return scheduleStartDateTime <= currentTimePlus15 && scheduleEndDateTime >= currentTime
            })

            if (prevAppointments.length > 0) {
                const appointment = prevAppointments[0]
                this.scheduleRecent = appointment
                this.name_next_appointment_recent = appointment.patient.name
                this.email_next_appointment_recent = appointment.patient.email
                this.phone_next_appointment_recent = appointment.patient.phone
                this.address_next_appointment_recent = appointment.patient.address

                console.log('cita prev 15')

                return this.scheduleRecent
            }

            if (currentAppointments.length > 0) {
                const appointment = currentAppointments[0]
                this.scheduleRecent = appointment
                this.name_next_appointment_recent = appointment.patient.name
                this.email_next_appointment_recent = appointment.patient.email
                this.phone_next_appointment_recent = appointment.patient.phone
                this.address_next_appointment_recent = appointment.patient.address

                console.log('cita current')

                return this.scheduleRecent
            }

            console.log('@ Keyla => No hay citas en el rango de tiempo especificado')
            return null
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

                        const currentTime = new Date().getTime()

                        this.medications = this.schedules_details.filter(scheduleDetails => {
                            const scheduleDateTime = new Date(scheduleDetails.schedule.date.split('/').reverse().join('-') + 'T' + scheduleDetails.schedule.time + ':00').getTime()
                            return scheduleDateTime < currentTime
                        })

                        if (this.medications.length > 0) {
                            this.medications.sort((a, b) => {
                                const dateTimeA = new Date(a.schedule.date.split('/').reverse().join('-') + 'T' + a.schedule.time + ':00').getTime()
                                const dateTimeB = new Date(b.schedule.date.split('/').reverse().join('-') + 'T' + b.schedule.time + ':00').getTime()
                                return dateTimeB - dateTimeA
                            })
                        }

                        console.log('@ Keyla => Medication order', this.medications)

                        this.schedule_details = this.medications[0]

                        this.doctor_email_appointment_current = this.schedule_details.email_doctor
                        this.name_next_appointment_current = this.schedule_details.patient.name
                        this.email_next_appointment_current = this.schedule_details.patient.email
                        this.phone_next_appointment_current = this.schedule_details.patient.phone
                        this.address_next_appointment_current = this.schedule_details.patient.address

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
        },
        async scheduleNextAppointmentRecent () {
            if (this.$refs.formScheduleNext.validate()) {
                const url = '/register-schedule'
                const data = {
                    email_doctor: this.doctor_email,
                    name_patient: this.name_next_appointment_recent,
                    email_patient: this.email_next_appointment_recent,
                    phone_patient: this.phone_next_appointment_recent,
                    address_patient: this.address_next_appointment_recent,
                    date: this.date_next_appointment_recent,
                    time: this.time_next_appointment_recent,
                    room: this.room_next_appointment_recent
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                }

                console.log('data', data)

                this.$axios.post(url, data, config)
                    .then((res) => {
                        console.log('@ Keyla => Response ', res)

                        if (res.data.message === 'Schedule registered successfully') {
                            this.showAlert = true
                            this.alertText = res.data.message
                            this.alertColor = '#6CDACE'
                            this.alertType = 'success'

                            this.fetchAllSchedules()
                            this.fetchAllChanges()
                            this.showScheduleNextRecent = false

                            setTimeout(() => {
                                this.showAlert = false
                            }, 3000)

                            this.$refs.formAppointment.reset()
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

                        this.name_appointment = null
                        this.email_appointment = null
                        this.phone_appointment = null
                        this.address_appointment = null
                        this.date_appointment = null
                        this.time_appointment = null
                        this.room_appointment = null
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
        },
        async scheduleNextAppointmentCurrentCondition () {
            if (this.$refs.formScheduleNextCurrentCondition.validate()) {
                const url = '/register-schedule'
                const data = {
                    email_doctor: this.doctor_email_appointment_current,
                    name_patient: this.name_next_appointment_current,
                    email_patient: this.email_next_appointment_current,
                    phone_patient: this.phone_next_appointment_current,
                    address_patient: this.address_next_appointment_current,
                    date: this.date_next_appointment_current,
                    time: this.time_next_appointment_current,
                    room: this.room_next_appointment_current
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                }

                console.log('data', data)

                this.$axios.post(url, data, config)
                    .then((res) => {
                        console.log('@ Keyla => Response ', res)

                        if (res.data.message === 'Schedule registered successfully') {
                            this.showAlert = true
                            this.alertText = res.data.message
                            this.alertColor = '#6CDACE'
                            this.alertType = 'success'

                            this.fetchAllSchedules()
                            this.fetchAllChanges()
                            this.showScheduleNextCurrentCondition = false

                            setTimeout(() => {
                                this.showAlert = false
                            }, 3000)

                            this.$refs.formScheduleNextCurrentCondition.reset()
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

                        this.date_appoidate_next_appointment_currentntment = null
                        this.time_next_appointment_current = null
                        this.room_room_next_appointment_currentappointment = null
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
        },
        checkAppointments () {
            const now = new Date()
            const nextHour = now.getHours() + 1
            const nextHourTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nextHour, 0, 0, 0)
            const nextQuarterHour = Math.ceil(now.getMinutes() / 15) * 15
            const nextCheckTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), nextQuarterHour, 0, 0)

            const waitTimeUntilNextHour = nextHourTime - now

            const waitTimeUntilNextQuarterHour = nextCheckTime - now

            setTimeout(() => {
                setInterval(checkAppointments, 15 * 60 * 1000)
            }, waitTimeUntilNextHour)

            setTimeout(() => {
                checkAppointments()
            }, waitTimeUntilNextQuarterHour)
        }

    }
}
</script>
