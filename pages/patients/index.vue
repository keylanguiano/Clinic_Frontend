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
                            <user-progress-circular :percentage="parseFloat(healthy_patient.sugar_percentage)" :data="`${parseFloat(healthy_patient.sugar_percentage)} %`" :value="healthy_patient.sugar.toString()" :color="'#ffccba'" :topic="'Sugar'" />

                            <v-spacer />

                            <user-progress-circular :percentage="parseFloat(healthy_patient.oxygen)" :data="`${parseFloat(healthy_patient.oxygen)} %`" :value="healthy_patient.oxygen.toString()"  :color="'#ffccba'" :topic="'Oxygen'" />

                            <v-spacer />

                            <user-progress-circular :percentage="parseFloat(healthy_patient.blood_pressure_percentage)" :data="`${parseFloat(healthy_patient.blood_pressure_percentage)} %`" :value="healthy_patient.blood_pressure.toString()" :color="'#ffccba'" :topic="'Blood Pressure'" />
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
                    <v-col class="ma-0 pa-0">
                        <v-row class="ma-0 pa-0" v-for="(schedule_details, index) in schedules_details" :key="index">
                            <user-prescription class="ma-0 pa-0 mb-4" :doctor_name="schedule_details.doctor.name" :prescription="schedule_details.prescription" :time="schedule_details.schedule.time" :date="schedule_details.schedule.date" />
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-10" v-if="show_checkups">
                    <v-col class="ma-0 pa-0 patients-checkups" id="patients_checkups">
                        <v-data-table hide-default-footer :headers="headers_checkups" :items="checkups" class="ma-0 pa-0 patients-table" style="width: 100%;">
                            <template #[`item.date_and_time`]="{item}">
                                <v-row class="ma-0 pa-0" align="center" justify="center">
                                    <span class="date-time-column">{{ item.date_and_time }}</span>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>

                <v-row class="ma-0 pa-0 mt-10" v-if="show_documents">
                    <v-col class="ma-0 pa-0 patients-checkups" id="patients_checkups">
                        <v-data-table hide-default-footer :headers="headers_documents" :items="documents" class="ma-0 pa-0 patients-table" style="width: 100%;">
                            <template #[`item.download`]="{item}">
                                <v-row class="ma-0 pa-0" align="center" justify="center">
                                    <v-btn icon color="grey darken-1" class="ma-0 pa-0" @click="generate_pdf(item.date_and_time)">
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
import * as jose from 'jose'
import JsPDF from 'jspdf'
import 'jspdf-autotable'
import PoiretOne from '../../assets/PoiretOne-Regular.ttf'
import logo from '../../assets/logo.json'

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            doctors: [],
            claims: [],
            doctor: [],
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
            patient: [],
            schedules_details: [],
            healthy_patient: {
                sugar: '0',
                sugar_percentage: 0,
                blood_pressure: '0/0',
                blood_pressure_percentage: 0,
                oxygen: 0
            },
            document: []
        }
    },
    mounted () {
        this.email_doctor()
        this.getDoctors()
        this.getPatients()
    },
    methods: {
        async getDoctors () {
            const url = '/get-all-doctors'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.doctors = res.data.doctors.map(doctor => ({
                            ...doctor,
                            specialist: Array.isArray(doctor.specialist) ? doctor.specialist : doctor.specialist.split(','),
                            degree: Array.isArray(doctor.degree) ? doctor.degree : doctor.degree.split(',')
                        }))

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

                this.fetchAllSchedulesDetails()
            } else {
                this.patient.photo = null
                this.patient.name = null
                this.patient.age = null
                this.patient.sex = null
                this.patient.phone = null
                this.patient.email = null
                this.patient.address = null
            }
        },
        async fetchAllSchedulesDetails () {
            const url = '/get-all-schedules-details'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.schedules_details = res.data.schedules_details

                        console.log('@ Keyla => All schedules details ', this.schedules_details)

                        this.schedules_details = this.schedules_details.filter(scheduleDetails =>
                            (scheduleDetails.email_doctor === this.doctor.email &&
                            scheduleDetails.email_patient === this.patient.email))

                        this.getLastDate()

                        this.checkups = this.schedules_details.map(scheduleDetails => ({
                            date_and_time: scheduleDetails.schedule.date + ' ' + scheduleDetails.schedule.time,
                            treatment: scheduleDetails.treatment,
                            doctor: scheduleDetails.doctor.name,
                            comments: scheduleDetails.comments
                        }))

                        this.documents = this.schedules_details.map(scheduleDetails => ({
                            date_and_time: scheduleDetails.schedule.date + ' ' + scheduleDetails.schedule.time,
                            treatment: scheduleDetails.treatment
                        }))

                        this.payments = this.schedules_details.map(scheduleDetails => ({
                            date_and_time: scheduleDetails.schedule.date + ' ' + scheduleDetails.schedule.time,
                            treatment: scheduleDetails.treatment,
                            payments: scheduleDetails.payment
                        }))

                        console.log('@ Keyla => doc', this.document)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        getLastDate () {
            const dates = this.schedules_details.map(detail => detail.schedule.date)

            const lastDate = dates.reduce((max, date) => (date > max ? date : max), '')

            console.log('Última cita:', lastDate)

            const latestDetails = this.schedules_details.filter(detail => detail.schedule.date === lastDate)

            console.log('latestDetails:', latestDetails)

            const latestDetail = latestDetails[0]

            this.healthy_patient =
            {
                sugar: latestDetail.sugar,
                blood_pressure: latestDetail.blood_pressure,
                oxygen: latestDetail.oxygen_saturation
            }

            console.log('Últimos registros:', this.healthy_patient)

            if (this.healthy_patient) {
                const [systolic, diastolic] = this.healthy_patient.blood_pressure.split('/').map(val => parseInt(val.trim()))

                const systolicPercentage = (systolic / 120) * 100
                const diastolicPercentage = (diastolic / 80) * 100

                this.healthy_patient.blood_pressure_percentage = (parseFloat(systolicPercentage + diastolicPercentage) / 2).toFixed(2)

                const sugarLevel = parseFloat(this.healthy_patient.sugar)
                const minHealthySugar = 80
                const maxHealthySugar = 100

                this.healthy_patient.sugar_percentage = ((sugarLevel - minHealthySugar) / (maxHealthySugar - minHealthySugar)) * 100
            } else {
                console.error('Blood pressure is undefined.')
            }
        },
        async generate_pdf (dateTime) {
            const [date, time] = dateTime.split(' ')
            const doc = new JsPDF()
            const pageWidth = doc.internal.pageSize.getWidth()
            const centerX = pageWidth / 2

            const patientData = this.schedules_details.find(detail =>
                detail.schedule.date === date && detail.schedule.time === time)

            try {
                const logoBase64 = logo.logo

                doc.addFont(PoiretOne, 'PoiretOne', 'normal')
                doc.setFont('PoiretOne')

                const xPos = 15
                let yPos = 30
                doc.addImage(logoBase64, 'PNG', xPos, 10, 30, 30)

                doc.setFontSize(22)
                doc.text('Medical Consultation Details', centerX, yPos, { align: 'center' })

                yPos += 10

                doc.setFontSize(12)
                doc.text(`Dr. ${patientData.doctor.name}`, centerX, yPos, { align: 'center' })

                yPos += 20

                doc.setFontSize(15)
                doc.text('Date: ', 155, yPos)

                doc.setFontSize(12)
                doc.text(this.getToday(), 170, yPos)

                yPos += 15

                doc.setFontSize(15)
                doc.text('• Personal Information', xPos, yPos)

                yPos += 10

                doc.setFontSize(12)
                doc.text(`Name: ${patientData.patient.name}`, xPos, yPos); yPos += 5
                doc.text(`Age: ${patientData.patient.age}`, xPos, yPos); yPos += 5
                doc.text(`Sex: ${patientData.patient.sex}`, xPos, yPos); yPos += 5
                doc.text(`Phone: ${patientData.patient.phone}`, xPos, yPos); yPos += 5
                doc.text(`Email: ${patientData.patient.email}`, xPos, yPos); yPos += 5
                doc.text(`Address: ${patientData.patient.address}`, xPos, yPos)

                yPos += 15

                doc.setFontSize(15)
                doc.text('• Appointment', xPos, yPos)

                yPos += 10

                doc.setFontSize(12)
                doc.text(`Date: ${patientData.schedule.date}`, xPos, yPos); yPos += 5
                doc.text(`Time: ${patientData.schedule.time}`, xPos, yPos)

                yPos += 15

                doc.setFontSize(15)
                doc.text('• Check Up', xPos, yPos)

                yPos += 10

                doc.setFontSize(12)
                doc.text(`Sugar: ${patientData.sugar}`, xPos, yPos); yPos += 5
                doc.text(`Oxygen Saturation: ${patientData.oxygen_saturation}`, xPos, yPos); yPos += 5
                doc.text(`Blood Pressure: ${patientData.blood_pressure}`, xPos, yPos)

                yPos += 15

                doc.setFontSize(15)
                doc.text('• Diagnostic', xPos, yPos)

                yPos += 10

                doc.setFontSize(12)
                doc.text(`Diagnostic: ${patientData.diagnostic}`, xPos, yPos); yPos += 5
                doc.text(`Degree: ${patientData.degree}`, xPos, yPos); yPos += 5

                const addMultilineText = (text, x, y) => {
                    const textLines = doc.splitTextToSize(text, pageWidth - 20)

                    doc.text(textLines, x, y)

                    return y + (textLines.length * 5)
                }

                yPos = addMultilineText(`Details: ${patientData.diagnostic_details}`, xPos, yPos)
                yPos = addMultilineText(`Comments: ${patientData.comments}`, xPos, yPos)

                yPos += 10

                doc.setFontSize(15)
                doc.text('• Treatment', xPos, yPos)

                yPos += 10

                doc.setFontSize(12)
                yPos = addMultilineText(`Treatment: ${patientData.treatment}`, xPos, yPos)
                yPos = addMultilineText(`Prescription: ${patientData.prescription}`, xPos, yPos)

                yPos += 15

                doc.save(`${patientData.patient.name} - ${patientData.schedule.date}.pdf`)
            } catch (error) {
                console.error('Error:', error)
            }
        },
        getToday () {
            const date = new Date()

            date.setDate(date.getDate())

            const formattedDate = date.toLocaleDateString('es-MX', { timeZone: 'America/Mexico_City' })
            const [day, month, year] = formattedDate.split('/').map(part => part.padStart(2, '0'))
            const formattedDateISO = `${year}-${month}-${day}`

            return formattedDateISO
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

    .date-time-column {
        word-spacing: 10px !important; /* Ajusta el valor según sea necesario */
    }
</style>
