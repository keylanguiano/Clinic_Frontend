<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="pa-0 pa-10" >
            <v-row class="ma-0 pa-0">
                <v-combobox v-model="patient.name" class="ma-0 pa-0 mr-5" :items="patients.map(patient => patient.name)" outlined rounded @change="loadPatient ()">
                    <template #append>
                        <v-row class="ma-0 pa-0 d-flex align-center">
                            <img src="../../assets/home/dashboard/config.svg" class="ma-0 pa-0" />
                            <img src="../../assets/home/dashboard/search.svg" class="ma-0 pa-0 ml-3" />
                        </v-row>
                    </template>
                </v-combobox>

                <v-col cols="2" class="ma-0 pa-0 d-flex align-center">
                    <v-row class="ma-0 pa-0 d-flex justify-end">
                        <img class="ma-0 pa-0" width="35" src="../../assets/home/patients/time.svg" />
                    </v-row>
                </v-col>
            </v-row>

            <v-col class="ma-0 pa-0" v-if="patient.name">
                <v-row class="ma-0 pa-0 mt-6" >
                    <v-col cols="3" class="ma-0 pa-0">
                        <img class="ma-0 pa-0 patient-photo" width="150" :src="patient.photo" />
                    </v-col>

                    <v-col class="ma-0 pa-0">
                        <v-row class="ma-0 pa-0">
                            <p id="schedule_schedule_name" class="ma-0 pa-0 schedule-schedule-title">{{ patient.name }}</p>
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
                                            <p id="schedule_schedule_age" class="ma-0 pa-0 schedule-schedule-text">{{ patient.age }}</p>
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
                                            <p id="schedule_schedule_sex" class="ma-0 pa-0 schedule-schedule-text">{{ patient.sex }}</p>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-row class="ma-0 pa-0 mt-1">
                            <v-col cols="3" class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <p class="ma-0 pa-0 schedule-schedule-subtitle">Phone Number:</p>
                                </v-row>
                            </v-col>

                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <p id="schedule_schedule_phone" class="ma-0 pa-0 schedule-schedule-text">{{ patient.phone }}</p>
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
                                    <p id="schedule_schedule_email" class="ma-0 pa-0" style="font-size: 15px; text-transform: lowercase;">{{ patient.email }}</p>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-row class="ma-0 pa-0 mt-1">
                            <v-col cols="2" class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <p class="ma-0 pa-0 schedule-schedule-subtitle">Address:</p>
                                </v-row>
                            </v-col>

                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <p id="schedule_schedule_address" class="ma-0 pa-0" style="font-size: 15px; text-transform: capitalize;">{{ patient.address }}</p>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="5" class="ma-0 pa-0">
                        <v-row class="ma-0 pa-0" align="center" justify="center">
                            <user-progress-circular :percentage="88" :data="'88 %'" :value="'81/72'" :color="'#ffccba'" :topic="'Sugar'" />

                            <v-spacer />

                            <user-progress-circular :percentage="66" :data="'66 %'" :value="'118/120'" :color="'#ffccba'" :topic="'Sugar'" />

                            <v-spacer />

                            <user-progress-circular :percentage="50" :data="'50 %'" :value="'118/90'" :color="'#ffccba'" :topic="'Blood Pressure'" />
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-6">
                    <v-col class="ma-0 pa-0">
                        <v-row class="ma-0 pa-0">
                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <v-btn :class="{ 'patients-prescription-button-active': show_prescription }" id="patients_prescription_button_prescription" rounded class="ma-0 pa-5 patients-prescription-button" @click="toggleSection('Prescription')">
                                        <span class="ma-0 pa-0 patients-prescription-button-text">Prescription</span>
                                    </v-btn>
                                </v-row>
                            </v-col>

                            <v-col cols="1" class="ma-0 pa-0" />

                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <v-btn :class="{ 'patients-prescription-button-active': show_checkups }" id="schedule_schedule_today_schedule" rounded class="ma-0 pa-5 patients-prescription-button" @click="toggleSection('Checkups')">
                                        <span class="ma-0 pa-0 patients-prescription-button-text">Checkups</span>
                                    </v-btn>
                                </v-row>
                            </v-col>

                            <v-col cols="1" class="ma-0 pa-0" />

                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <v-btn :class="{ 'patients-prescription-button-active': show_documents }" id="schedule_schedule_documents_schedule" rounded class="ma-0 pa-5 patients-prescription-button" @click="toggleSection('Documents')">
                                        <span class="ma-0 pa-0 patients-prescription-button-text">Document's</span>
                                    </v-btn>
                                </v-row>
                            </v-col>

                            <v-col cols="1" class="ma-0 pa-0" />

                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0">
                                    <v-btn :class="{ 'patients-prescription-button-active': show_payments }" id="schedule_schedule_payments_schedule" rounded class="ma-0 pa-5 patients-prescription-button" @click="toggleSection('Payments')">
                                        <span class="ma-0 pa-0 patients-prescription-button-text">Payments </span>
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-10" v-if="show_prescription">
                    <v-col class="ma-0 pa-0 patients-prescription" id="patients_prescription">
                        <user-prescription class="ma-0 pa-0 mb-4" />

                        <user-prescription class="ma-0 pa-0 mb-4" />

                        <user-prescription class="ma-0 pa-0 mb-4" />

                        <user-prescription class="ma-0 pa-0 mb-4" />
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-10" v-if="show_checkups">
                    <v-col class="ma-0 pa-0 patients-checkups" id="patients_checkups">
                        <v-data-table hide-default-footer :headers="headers_checkups" :items="checkups" class="ma-0 pa-0 patients-table" style="width: 100%;">
                        </v-data-table>
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-10" v-if="show_documents">
                    <v-col class="ma-0 pa-0 patients-checkups" id="patients_checkups">
                        <v-data-table hide-default-footer :headers="headers_documents" :items="documents" class="ma-0 pa-0 patients-table" style="width: 100%;">
                            <template #[`item.download`]>
                                <v-row class="ma-0 pa-0">
                                    <v-btn icon color="#ff4f60" class="ma-0 pa-0">
                                        <v-icon class="ma-0 pa-0">mdi-download</v-icon>
                                    </v-btn>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-10" v-if="show_payments">
                    <v-col class="ma-0 pa-0 patients-checkups" id="patients_checkups">
                        <v-data-table hide-default-footer :headers="headers_payments" :items="payments" class="ma-0 pa-0 patients-table" style="width: 100%;">
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-col>
        </v-col>
    </div>
</template>

<script>

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            prescriptions: [],
            checkups: [],
            documents: [],
            payments: [],
            headers_checkups: [
                { text: 'Date & Time', value: 'date_and_time', align: 'center', sortable: true },
                { text: 'Treatment', value: 'treatment', align: 'center', sortable: false },
                { text: 'Doctor', value: 'doctor', align: 'center', sortable: true },
                { text: 'Comments', value: 'comments', align: 'center', sortable: false }
            ],
            headers_documents: [
                { text: 'Date & Time', value: 'date_and_time', align: 'center', sortable: true },
                { text: 'Treatment', value: 'treatment', align: 'center', sortable: false },
                { text: 'Download', value: 'download', align: 'center', sortable: false }
            ],
            headers_payments: [
                { text: 'Date & Time', value: 'date_and_time', align: 'center', sortable: true },
                { text: 'Treatment', value: 'treatment', align: 'center', sortable: false },
                { text: 'Payments', value: 'payments', align: 'center', sortable: true }
            ],
            button_color: '',
            show_prescription: true,
            show_checkups: false,
            show_documents: false,
            show_payments: false,
            patients: [],
            patient: []
        }
    },
    mounted () {
        this.getPatients()
    },
    methods: {
        toggleSection (section) {
            this.show_prescription = false
            this.show_checkups = false
            this.show_documents = false
            this.show_payments = false

            if (section === 'Prescription') {
                this.show_prescription = true
            } else if (section === 'Checkups') {
                this.show_checkups = true
            } else if (section === 'Documents') {
                this.show_documents = true
            } else if (section === 'Payments') {
                this.show_payments = true
            }
        },
        async getPatients () {
            const url = '/get-all-patients'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.patients = res.data.patients

                        console.log('@ Keyla => Patients ', this.patients)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        loadPatient () {
            const selectedPatient = this.patients.find(patient => patient.name === this.patient.name)

            if (selectedPatient) {
                this.patient.photo = selectedPatient.photo
                this.patient.name = selectedPatient.name
                this.patient.age = selectedPatient.age
                this.patient.sex = selectedPatient.sex
                this.patient.phone = selectedPatient.phone
                this.patient.email = selectedPatient.email
                this.patient.address = selectedPatient.address
            } else {
                this.patient.photo = null
                this.patient.name = null
                this.patient.age = null
                this.patient.sex = null
                this.patient.phone = null
                this.patient.email = null
                this.patient.address = null
            }
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
