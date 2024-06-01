<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0" >
            <v-row class="ma-0 pa-0 pl-10 pr-10 mt-10">
                <user-search />

                <v-col cols="2" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0 d-flex justify-end">
                        <v-btn rounded color="#ffaa92" class="ma-0 pa-5 pt-7 pb-7" @click="showNewPatient = true">
                            <p class="ma-0 pa-0 button-secondary">New Patients</p>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0 pl-10 pr-10 schedule-schedule-col">
                    <v-row class="ma-0 pa-0 mt-6">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-col cols="3" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-btn id="schedule_schedule_yesterday_schedule" rounded class="ma-0 pa-5 schedule-schedule-button" :class="{ 'patients-prescription-button-active': show_all_schedules }" @click="toggleSection('All')">
                                            <span class="ma-0 pa-0 schedule-schedule-button-text">All Schedules</span>
                                        </v-btn>
                                    </v-row>
                                </v-col>

                                <v-col cols="3" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-btn id="schedule_schedule_yesterday_schedule" rounded class="ma-0 pa-5 schedule-schedule-button" :class="{ 'schedule-schedule-button-active': show_schedules_yesterday }" @click="updateSchedules(getYesterday()), toggleSection('Yesterday')">
                                            <span class="ma-0 pa-0 schedule-schedule-button-text">Yesterday Schedule</span>
                                        </v-btn>
                                    </v-row>
                                </v-col>

                                <v-col cols="3" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-btn id="schedule_schedule_today_schedule" rounded class="ma-0 pa-5 schedule-schedule-button" :class="{ 'schedule-schedule-button-active': show_schedules_today }" @click="updateSchedules(getToday()), toggleSection('Today')">
                                            <span class="ma-0 pa-0 schedule-schedule-button-text">Today Schedule</span>
                                        </v-btn>
                                    </v-row>
                                </v-col>

                                <v-col cols="3" class="ma-0 pa-0">
                                    <v-row class="ma-0 pa-0">
                                        <v-btn id="schedule_schedule_tomorrow_schedule" rounded class="ma-0 pa-5 schedule-schedule-button" :class="{ 'schedule-schedule-button-active': show_schedules_tomorrow }" @click="updateSchedules(getTomorrow()), toggleSection('Tomorrow')">
                                            <span class="ma-0 pa-0 schedule-schedule-button-text">Tomorow Schedule</span>
                                        </v-btn>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-7 pb-5 schedule-schedule-list" v-if="show_all_schedules">
                        <v-col class="ma-0 pa-0 overflow-auto">
                            <v-row class="ma-0 pa-0" v-for="(schedule, index) in schedules" :key="index">
                                <user-schedule :photo="schedule.patient.photo" :id="schedule.id" :name_patient="schedule.name_patient" :age_patient="schedule.patient.age" :sex_patient="schedule.patient.sex" :phone_patient="schedule.phone_patient" :address_patient="schedule.address_patient" :email_patient="schedule.email_patient" :name_doctor="schedule.doctor.name" :date="schedule.date" :time="schedule.time" :room="schedule.room" />
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-7 pb-5 schedule-schedule-list" v-if="show_schedules_yesterday">
                        <v-col class="ma-0 pa-0 overflow-auto">
                            <v-row class="ma-0 pa-0" v-for="(schedule, index) in schedulesDate" :key="index">
                                <user-schedule :photo="schedule.patient.photo" :id="schedule.id" :name_patient="schedule.name_patient" :age_patient="schedule.patient.age" :sex_patient="schedule.patient.sex" :phone_patient="schedule.phone_patient" :address_patient="schedule.address_patient" :email_patient="schedule.email_patient" :name_doctor="schedule.doctor.name" :date="schedule.date" :time="schedule.time" :room="schedule.room" />
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-7 pb-5 schedule-schedule-list" v-if="show_schedules_today">
                        <v-col class="ma-0 pa-0 overflow-auto">
                            <v-row class="ma-0 pa-0" v-for="(schedule, index) in schedulesDate" :key="index">
                                <user-schedule :photo="schedule.patient.photo" :id="schedule.id" :name_patient="schedule.name_patient" :age_patient="schedule.patient.age" :sex_patient="schedule.patient.sex" :phone_patient="schedule.phone_patient" :address_patient="schedule.address_patient" :email_patient="schedule.email_patient" :name_doctor="schedule.doctor.name" :date="schedule.date" :time="schedule.time" :room="schedule.room" />
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-7 pb-5 schedule-schedule-list" v-if="show_schedules_tomorrow">
                        <v-col class="ma-0 pa-0 overflow-auto">
                            <v-row class="ma-0 pa-0" v-for="(schedule, index) in schedulesDate" :key="index">
                                <user-schedule :photo="schedule.patient.photo" :id="schedule.id" :name_patient="schedule.name_patient" :age_patient="schedule.patient.age" :sex_patient="schedule.patient.sex" :phone_patient="schedule.phone_patient" :address_patient="schedule.address_patient" :email_patient="schedule.email_patient" :name_doctor="schedule.doctor.name" :date="schedule.date" :time="schedule.time" :room="schedule.room" />
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row class="ma-0 pa-0 pl-5 d-flex align-center schedule-schedule-footer">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <p class="ma-0 pa-0 schedule-doctors-title">Doctors</p>
                            </v-row>

                            <v-row class="ma-0 pa-0 mt-4 schedule-doctors">
                                <v-col cols="12" sm="6" md="4" lg="3" v-for="doctor in doctors" :key="doctor.id" class="ma-0 pa-0">
                                    <user-doctor :photo="doctor.photo" :name="doctor.name" :specialist="doctor.specialist" :degree="doctor.degree" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="3" class="ma-0 pa-4 align-center justify-center">
                    <v-col class="ma-0 pa-0 schedule-appointment align-center justify-center">
                        <v-row class="ma-0 pa-0 align-center justify-center">
                            <img class="ma-0 pa-0 schedule-appointment-doctor-photo" width="90" height="90" :src="doctor.photo" />
                        </v-row>

                        <v-row class="ma-0 pa-0 mt-3">
                            <v-col class="ma-0 pa-0">
                                <v-row class="ma-0 pa-0 align-center justify-center">
                                    <p id="schedule-appointment_doctor_name" class="ma-0 pa-0 schedule-appointment-doctor-name">{{ doctor.name }}</p>
                                </v-row>

                                <v-row class="ma-0 pa-0 align-center justify-center">
                                    <span class="ma-0 pa-0 schedule-appointment-doctor-specialist" v-for="(specialist, index) in doctor.specialist" :key="index">
                                        {{ specialist }}<span v-if="index !== doctor.specialist.length - 1">, </span>
                                    </span>
                                </v-row>
                            </v-col>
                        </v-row>

                        <p class="mt-3" style="font-size: 25px">For an Appointment</p>

                        <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                            <v-form ref="formAppointment" v-model="validFormAppointment">
                                <v-row width="100%" class="ma-0 mt-0">
                                    <v-combobox
                                        :rules="[rules.required]"
                                        class="ma-0 pa-0"
                                        v-model="name_appointment"
                                        :items="patients.map(patient => patient.name)"
                                        clearable
                                        outlined
                                        rounded
                                        label="Name"
                                        @change="loadAppointment"
                                    />
                                </v-row>

                                <v-row width="100%" class="ma-0 mt-2">
                                    <v-text-field
                                        v-model="email_appointment"
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
                                        v-model="phone_appointment"
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
                                        v-model="address_appointment"
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
                                                v-model="date_appointment"
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
                                            v-model="date_appointment"
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
                                                v-model="time_appointment"
                                                rounded
                                                label="Time"
                                                :disabled="!date_appointment"
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
                                            v-model="time_appointment"
                                            :allowed-hours="availableAllHours"
                                            :allowed-minutes="availableAllMinutes"
                                            class="mt-4"
                                            format="24hr"
                                            scrollable
                                            header-color="#ffccba"
                                            :disabled="!date_appointment"
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
                                        v-model="room_appointment"
                                        :items="rooms"
                                        clearable
                                        outlined
                                        rounded
                                        label="Room"
                                    />
                                </v-row>
                            </v-form>
                        </v-card-text>

                        <v-card-actions class="ma-0 pa-0 pl-6 pr-6 mt-5">
                            <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="registerSchedule ()">
                                <span style="text-transform: none; color: white; font-size: 15px; font-weight: bold;">Booking</span>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-col>
            </v-row>
        </v-col>

        <v-dialog v-model="showNewPatient" persistent width="500" class="ma-0 pa-0" transition="dialog-bottom-transition" content-class="schedule-new-patient-dialog">
            <p class="mt-8" style="font-size: 35px">Patient Registration</p>

            <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-14">
                <v-form ref="formPatient" v-model="validFormNewPatient">
                    <v-row width="100%" class="ma-0 mt-0">
                        <v-file-input :rules="[rules.required,]" v-model="photo_new_patient" accept="image/png, image/jpeg" prepend-icon="" append-icon="mdi-camera" label="Photo" rounded outlined />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required,]" v-model="name_new_patient" label="Name" type="text" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required,]"  v-model="age_new_patient" label="Age" type="text" rounded outlined />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required,]" v-model="phone_new_patient" label="Phone" type="text" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-combobox :rules="[rules.required,]" class="ma-0 pa-0" v-model="sex_new_patient" :items="sex" clearable outlined rounded label="Sex" />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required, rules.email]" v-model="email_new_patient" label="Email" type="email" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required,]" v-model="address_new_patient" label="Address" type="text" rounded outlined/>
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
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="registerPatient ()">
                        <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Register</span>
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-dialog>

        <user-alert :text="alertText" :color="alertColor" :type="alertType" v-if="showAlert" />
    </v-row>
</template>

<script>

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            name_appointment: null,
            email_appointment: null,
            phone_appointment: null,
            address_appointment: null,
            date_appointment: '',
            time_appointment: '',
            room_appointment: null,
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
            validFormAppointment: false,
            showNewPatient: false,
            photo_new_patient: null,
            name_new_patient: null,
            age_new_patient: null,
            phone_new_patient: null,
            email_new_patient: null,
            address_new_patient: null,
            sex_new_patient: null,
            sex: [
                'F',
                'M'
            ],
            validFormNewPatient: false,
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
            doctors: [],
            doctor: [],
            claims: [],
            patients: [],
            schedules: [],
            schedulesDate: [],
            availableTimes: [],
            availableAllHours: [],
            availableAllMinutes: [],
            show_all_schedules: true,
            show_schedules_yesterday: false,
            show_schedules_today: false,
            show_schedules_tomorrow: false,
            token: ''
        }
    },
    watch: {
        date_appointment (newDate) {
            this.fetchAvailableTimes(newDate)
        }
    },
    mounted () {
        this.token = localStorage.getItem('Token')
        this.doctor = localStorage.getItem('Doctor')

        console.log('token', this.token)
        console.log('doctor', this.doctor)

        this.getDoctors()
        this.getPatients()
        this.fetchAllSchedules()
    },
    methods: {
        getDateOffset (daysOffset) {
            const date = new Date()

            date.setDate(date.getDate() + daysOffset)

            const formattedDate = date.toLocaleDateString('es-MX', { timeZone: 'America/Mexico_City' })
            const [day, month, year] = formattedDate.split('/').map(part => part.padStart(2, '0'))
            const formattedDateISO = `${year}-${month}-${day}`

            return formattedDateISO
        },
        getYesterday () {
            return this.getDateOffset(-1)
        },
        getToday () {
            return this.getDateOffset(0)
        },
        getTomorrow () {
            return this.getDateOffset(1)
        },
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
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        async fetchAllSchedules () {
            const url = '/get-all-schedules'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.schedules = res.data.schedules

                        console.log('@ Keyla => All schedules ', this.schedules)

                        this.schedules = this.schedules.filter(schedule => schedule.email_doctor === this.doctor)

                        console.log('@ Keyla => Filtered Schedules By Doctor ', this.schedules)

                        this.schedulesDate = this.updateSchedules(this.getToday())
                        console.log('@ Keyla => Schedules Date:', this.schedules)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        updateSchedules (date) {
            this.schedulesDate = this.schedules.filter(schedule => schedule.date === date)

            console.log('@ Keyla => Filtered Schedules for', date, this.schedulesDate)
        },
        toggleSection (section) {
            this.show_all_schedules = false
            this.show_schedules_yesterday = false
            this.show_schedules_today = false
            this.show_schedules_tomorrow = false

            if (section === 'All') {
                this.show_all_schedules = true
            } else if (section === 'Yesterday') {
                this.show_schedules_yesterday = true
            } else if (section === 'Today') {
                this.show_schedules_today = true
            } else if (section === 'Tomorrow') {
                this.show_schedules_tomorrow = true
            }
        },
        registerPatient () {
            if (this.$refs.formPatient.validate()) {
                const url = '/register-patient'
                const data = new FormData()

                data.append('photo', this.photo_new_patient)
                data.append('name', this.name_new_patient)
                data.append('age', this.age_new_patient)
                data.append('sex', this.sex_new_patient)
                data.append('phone', this.phone_new_patient)
                data.append('email', this.email_new_patient)
                data.append('address', this.address_new_patient)

                console.log('photo signup', this.photo_new_patient)

                this.$axios.post(url, data)
                    .then((res) => {
                        console.log('@ Keyla => Response ', res)

                        if (res.data.message === 'Patient registered successfully') {
                            this.showNewPatient = false
                            this.showAlert = true
                            this.alertText = res.data.message
                            this.alertColor = '#6CDACE'
                            this.alertType = 'success'

                            this.getPatients()

                            setTimeout(() => {
                                this.showAlert = false
                            }, 3000)

                            this.photo_new_patient = null
                            this.name_new_patient = null
                            this.age_new_patient = null
                            this.phone_new_patient = null
                            this.sex_new_patient = null
                            this.email_new_patient = null
                            this.address_new_patient = null
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

                        this.photo_new_patient = null
                        this.name_new_patient = null
                        this.age_new_patient = null
                        this.phone_new_patient = null
                        this.sex_new_patient = null
                        this.email_new_patient = null
                        this.address_new_patient = null
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
        async getPatients () {
            const url = '/get-all-patients'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
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
        loadAppointment () {
            const selectedPatient = this.patients.find(patient => patient.name === this.name_appointment)
            if (selectedPatient) {
                this.email_appointment = selectedPatient.email
                this.phone_appointment = selectedPatient.phone
                this.address_appointment = selectedPatient.address
            } else {
                this.email_appointment = ''
                this.phone_appointment = ''
                this.address_appointment = ''
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
            const url = `/get-available-date-time-schedules?email_doctor=${this.doctor}&date=${date}`
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
                    const selectedHour = parseInt(this.time_appointment.split(':')[0])

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

                    return hour === selectedHour && schedule.date === this.date_appointment
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
        async registerSchedule () {
            if (this.$refs.formAppointment.validate()) {
                const url = '/register-schedule'
                const data = {
                    email_doctor: this.doctor,
                    name_patient: this.name_appointment,
                    email_patient: this.email_appointment,
                    phone_patient: this.phone_appointment,
                    address_patient: this.address_appointment,
                    date: this.date_appointment,
                    time: this.time_appointment,
                    room: this.room_appointment
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
