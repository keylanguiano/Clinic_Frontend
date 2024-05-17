<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="ma-0 pa-0">
        <v-col class="ma-0 pa-1 pl-3 pr-3">
            <v-row class="ma-0 pa-0">
                <user-search />

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

            <v-row class="block_dashboard ma-0 pa-0 pt-3 pb-3 mt-10" justify="center" align="center">
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

            <v-row class="ma-0 pa-0 mt-10">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="4"  class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 subtitle_dashboard">Appointment</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-5">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 subtitle_dashboard">Recent Activity</p>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-4">
                        <v-col cols="4" class="block_dashboard ma-0 pa-0" style="height: 250px; align-content: center !important;">
                            <v-row class="ma-0 pa-0">
                                <v-col class="ma-0 pa-0" cols="3" justify="center" align="center">
                                    <img class="ma-0 pa-0 avatar_dashboard" src="../../assets/home/dashboard/alert.svg" />
                                </v-col>

                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" style="font-size: 16px; font-weight: 600;">Dr. Paul MBBS, .MS.</p>
                                    </v-row>

                                    <v-row class="ma-0 pa-0">
                                        <p class="ma-0 pa-0" style="font-size: 15px;">Orthopedists specialist </p>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-4 pl-8 pr-8">
                                <v-col class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="6" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="3" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px; font-weight: 600;">Date</p>
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="appointment_date" style="font-size: 13px;" class="ma-0 pa-0">02/02/2023</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>

                                        <v-col cols="6" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="3" class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p style="font-size: 13px; font-weight: 600;" class="ma-0 pa-0">Time</p>
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0">
                                                    <v-row class="ma-0 pa-0">
                                                        <p id="appointment_time" style="font-size: 13px;" class="ma-0 pa-0">11.30am</p>
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
                                                <p id="appointment_address" style="font-size: 13px;" class="ma-0 pa-0">610-1a 10th St Vietnam, Indo.</p>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-row class="ma-0 pa-0 mt-5">
                                        <v-col cols="6" class="ma-0 pa-0">
                                            <v-row class="ma-0 pa-0">
                                                <v-col cols="2" class="ma-0 pa-0" style="justify-content: center; align-content: center;">
                                                    <v-row class="ma-0 pa-0">
                                                        <img width="20" class="ma-0 pa-0" src="../../assets/home/dashboard/cancel.svg" />
                                                    </v-row>
                                                </v-col>

                                                <v-col class="ma-0 pa-0 ml-2" style="justify-content: center; align-content: center;">
                                                    <v-row class="ma-0 pa-0">
                                                        <p class="ma-0 pa-0" style="font-size: 13px;">Cancel Booking</p>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-col>

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
                        </v-col>

                        <v-col class="block_dashboard ma-0 pa-0 ml-7 pl-7 pr-7" justify="center" style="height: 250px; align-content: center !important;">
                            <v-row class="ma-0 pa-0">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <img id="recent_activity_doctor_photo" class="ma-0 pa-0 avatar_dashboard" src="../../assets/home/dashboard/alert.svg" />
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

                            <v-row class="ma-0 pa-0 mt-6">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <img class="ma-0 pa-0 avatar_dashboard" src="../../assets/home/dashboard/alert.svg" />
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

                            <v-row class="ma-0 pa-0 mt-6">
                                <v-col cols="5" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="3" class="ma-0 pa-0">
                                            <img class="ma-0 pa-0 avatar_dashboard" src="../../assets/home/dashboard/alert.svg" />
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

            <v-row class="ma-0 pa-0 mt-10">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="4" class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 subtitle_dashboard">Medication</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-7">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 subtitle_dashboard">Current Condition of Patients</p>
                            </v-row>
                        </v-col>

                        <v-col class="ma-0 pa-0 ml-5">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 subtitle_dashboard">Recent bills</p>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-4">
                        <v-col cols="4" class="ma-0 pa-0">
                            <v-row class="block_alternative_dashboard ma-0 pa-0 pl-5 pr-5" justify="center" align="center">
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

                            <v-row class="block_alternative_dashboard ma-0 pa-0 pl-5 pr-5 mt-2" justify="center" align="center">
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

                            <v-row class="block_alternative_dashboard ma-0 pa-0 pl-5 pr-5 mt-2" justify="center" align="center">
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
                            <v-col class="block_dashboard ma-0 pa-0 pl-5 pr-5" style="height: 100%; align-content: center;">
                                <v-row class="ma-0 pa-0" >
                                    <p class="ma-0 pa-1 pl-2 pr-2 block_alternative_dashboard" style="color: white; font-size: 14px; font-weight: 600;">Moderate</p>
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
                            <v-row class="block_dashboard ma-0 pa-0 pl-5 pr-5" justify="center" align="center" style="height: 100%;">
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
    </div>
</template>

<script>
export default {
    layout: 'ui-home',
    auth: true
}
</script>
