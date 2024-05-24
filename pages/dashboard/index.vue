<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="ma-0 pa-0 pl-10 pr-10">
            <v-row class="ma-0 pa-0 mt-10">
                <user-search class="ma-0 pa-0" />

                <v-col cols="2" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col class="ma-0 pa-0">
                            <v-btn rounded color="#ffaa92" class="ma-0 pa-5 pt-7 pb-7">
                                <p class="ma-0 pa-0 button-secondary">Log In</p>
                            </v-btn>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-btn rounded color="#ffaa92" class="ma-0 pa-5 pt-7 pb-7">
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
                        <v-col cols="4" class="block-dashboard ma-0 pa-0" style="height: 200px; align-content: center !important;">
                            <v-row v-if="schedule.id" class="ma-0 pa-0">
                                <v-col class="ma-0 pa-0" cols="3" justify="center" align="center">
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

                            <v-row v-if="schedule.id" class="ma-0 pa-0 mt-4 pl-8 pr-8">
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
                                                        <p id="appointment_date" class="ma-0 pa-0 dashboard-appointment-text">{{ schedule.date }}</p>
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
                                                        <p id="appointment_time" class="ma-0 pa-0 dashboard-appointment-text">{{ schedule.time }} hrs</p>
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
                                                <p id="appointment_address" class="ma-0 pa-0 dashboard-appointment-text">{{ schedule.address_patient }}</p>
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
                                            <v-btn color="transparent" rounded elevation="0" class="ma-0 pa-0 px-1 dashboard-appointment-button">
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
                        </v-col>

                        <v-col class="block-dashboard ma-0 pa-0 ml-7 pl-7 pr-7" justify="center" style="height: 200px; align-content: center !important;">
                            <v-row class="ma-0 pa-0">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <img id="recent_activity_doctor_photo" class="ma-0 pa-0 dashboard-recent-activity-photo" src="../../assets/home/dashboard/alert.svg" />
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_activity_doctor" class="ma-0 pa-0" style="font-size: 16px; font-weight: 600;">Dr. Paul MBBS,.MS.</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_activity_speciality" class="ma-0 pa-0" style="font-size: 15px;">Orthopedists  specialist </p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p id="recent_activity_info" class="ma-0 pa-0" style="font-size: 15px;">Dr Ramadi Entersiliokaz added two new conditons to your health record on the 09 May regarding your symptoms</p>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-4">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <img class="ma-0 pa-0 dashboard-recent-activity-photo" src="../../assets/home/dashboard/alert.svg" />
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 16px; font-weight: 600;">Dr. Jeni MBBS,.MS.</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 15px;">Hearts specialist </p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" style="font-size: 15px;">Medicare has sent a benefit of $132.44 for item (token id65316152)</p>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-4">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <img class="ma-0 pa-0 dashboard-recent-activity-photo" src="../../assets/home/dashboard/alert.svg" />
                                        </v-col>

                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 16px; font-weight: 600;">Dr. Micheal MBBS,.MS.</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 15px;">Lungs specialist </p>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" style="font-size: 15px;">Dr Kalish has updated the prescription of Alfuosin from 8mg to 10mg</p>
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
                        <v-col cols="4" class="ma-0 pa-0">
                            <v-row class="block-alternative-dashboard ma-0 pa-0 pl-5 pr-5" justify="center" align="center">
                                <v-col>
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_name" style="font-size: 18px; font-weight: 600;">Fenofibrate (48mg)</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_indication" style="font-size: 15px;">Take with food every morning</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_last_refil" style="font-size: 15px; color: #874C96">Last refil 21/01/2023</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0" cols="1" justify="center" align="center">
                                    <img class="ma-0 pa-0" src="../../assets/home/dashboard/more.svg" />
                                </v-col>
                            </v-row>

                            <v-row class="block-alternative-dashboard ma-0 pa-0 pl-5 pr-5 mt-2" justify="center" align="center">
                                <v-col>
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_name" style="font-size: 19px; font-weight: 600;">Alfuzosin (10mg)</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_indication" style="font-size: 15px;">take 1 with food twice a day and avoid drinking aalcohol for 2 hours after</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_last_refil" style="font-size: 15px; color: #874C96">Last refil 27/01/2023</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0" cols="1" justify="center" align="center">
                                    <img class="ma-0 pa-0" src="../../assets/home/dashboard/more.svg" />
                                </v-col>
                            </v-row>

                            <v-row class="block-alternative-dashboard ma-0 pa-0 pl-5 pr-5 mt-2" justify="center" align="center">
                                <v-col>
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_name" style="font-size: 18px; font-weight: 600;">Dexamethasone (4mg)</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_indication" style="font-size: 15px;">Take 3 tablets 3 times a day for 7 days</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" id="medication_last_refil" style="font-size: 15px; color: #874C96">Last refil 24/01/2023</p>
                                    </v-row>
                                </v-col>

                                <v-col class="ma-0 pa-0" cols="1" justify="center" align="center">
                                    <img class="ma-0 pa-0" src="../../assets/home/dashboard/more.svg" />
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-7">
                            <v-col class="block-dashboard ma-0 pa-0 pl-5 pr-5" style="height: 100%; align-content: center;">
                                <v-row class="ma-0 pa-0" >
                                    <p class="ma-0 pa-1 pl-2 pr-2 block-alternative-dashboard" style="color: white; font-size: 14px; font-weight: 600;">Moderate</p>
                                </v-row>

                                <v-row class="ma-0 pa-0 mt-7">
                                    <v-col cols="7" class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_name" style="font-size: 18px; font-weight: 600;" class="ma-0 pa-0">Sinusitis</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_diagnostic_info" style="font-size: 15px;" class="ma-0 pa-0">A condition in which the cavities around the nasal passages become inflamed</p>
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
                                            <p id="current_condition_primary_doctor" style="font-size: 15px;" class="ma-0 pa-0">Dr.Jenni</p>
                                        </v-row>
                                    </v-col>

                                    <v-col class="ma-0 pa-0">
                                        <v-row class="ma-0 pa-0">
                                            <p style="font-size: 15px; font-weight: 600;" class="ma-0 pa-0">Treatment</p>
                                        </v-row>

                                        <v-row class="ma-0 pa-0">
                                            <p id="current_condition_treatment" class="ma-0 pa-0" style="font-size: 15px;">Nasonex Aerosol</p>
                                            <p class="ma-0 pa-0" style="font-size: 15px;">Mometasone furate 50mcg/spray</p>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-5">
                            <v-row class="block-dashboard ma-0 pa-0 pl-5 pr-5" justify="center" align="center" style="height: 100%;">
                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col class="ma-0 pa-0" cols="7" justify="center" align="center">
                                            <v-row class="ma-0 pa-0">
                                                <p class="ma-0 pa-0" style="font-size: 15px;">Your Payment</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_bills_your_payment" class="ma-0 pa-0" style="font-size: 25px; font-weight: 600;">$110.00</p>
                                            </v-row>
                                        </v-col>

                                        <v-col class="ma-0 pa-0" justify="center" align="center">
                                            <v-row class="ma-0 pa-0">
                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Medicare</p>
                                                    </v-row>

                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_medicare" class="ma-0 pa-0" style="font-size: 18px; font-weight: 600;">$125.00</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>

                                            <v-row class="ma-0 pa-0 mt-2">
                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Total</p>
                                                    </v-row>

                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_total" class="ma-0 pa-0" style="font-size: 18px; font-weight: 600;">$234.00</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-4">
                                        <v-col class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <p id="recent_bills_paid" class="ma-0 pa-0" style="font-size: 13px;">Paid on the 27 april, 2020 to Dorian Med Pty Ltd</p>
                                            </v-row>

                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="1" class="ma-0 pa-0" style="justify-content: center; align-content: center;">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/dashboard/address.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="recent_bills_address" class="ma-0 pa-0" style="font-size: 13px;">Suite 206/203-233 New King James Rd, Edgecliff NSW 2027</p>
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
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <v-dialog v-model="showDelete" persistent width="500" class="pa-5" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
            <p class="mt-10" style="font-size: 35px">Delete user</p>

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
    </div>
</template>

<script>
import { mapState } from 'vuex'
import * as jose from 'jose'

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            doctors: [],
            doctor: [],
            schedules: [],
            schedule: [],
            idDelete: '',
            showDelete: false
        }
    },
    computed: {
        ...mapState({
            token: state => state.token
        })
    },
    mounted () {
        this.getDoctors()
        this.email_doctor()
        this.getDoctors()
        this.fetchAllSchedules()
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
            const token = localStorage.getItem('Token')

            console.log('Token email doctor funcion:', token)

            const secret = new TextEncoder().encode('MySecretPassword')

            if (token) {
                try {
                    const claims = jose.decodeJwt(token, secret)
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
        fetchAllSchedules () {
            const url = '/get-all-schedules'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.schedules = res.data.schedules

                        console.log('@ Keyla => All schedules ', this.schedules)

                        this.schedules = this.schedules.filter(schedule => schedule.email_doctor === this.doctor.email)

                        console.log('@ Keyla => Filtered Schedules By Doctor ', this.schedules)

                        this.findNextAppointment()
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        async findNextAppointment () {
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

                this.schedule = nextAppointment

                return this.schedule
            } else {
                console.log('@ Keyla => No hay citas futuras disponibles')

                return null
            }
        },
        cancelBooking (id) {
            this.idDelete = id
            this.showDelete = true
        },
        deleteAppointment () {
            const url = `/delete-user/${this.idDelete}`
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.delete(url, config)
                .then((res) => {
                    console.log('@ Keyla => Res ', res)

                    if (res.data.message === 'User deleted successfully') {
                        this.showDelete = false
                        this.getAllUsers()

                        this.showAlert = true
                        this.alertText = res.data.message
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)

                        this.email_user = null
                        this.password_user = null
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error ', err)

                    this.showAlert = true
                    this.alertText = err.response.data.message
                    this.alertColor = '#FF9F8E'
                    this.alertType = 'warning'

                    setTimeout(() => {
                        this.showAlert = false
                    }, 3000)

                    this.email_user = null
                    this.password_user = null
                })
        }
    }
}
</script>
