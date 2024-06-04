<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="ma-0 pa-6 pl-10 pr-10 d-flex flex-column justify-center" align="center">
            <v-row class="ma-0 pa-6 pl-16 pr-16 laboratoty-card d-flex align-center justify-center" style="font-size: 50px;">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0 laboratory-card-title">Total testing</p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-1">
                        <p class="ma-0 pa-0 laboratory-card-subtitle">1,100 people proceed to resolve them</p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-6">
                        <v-data-table height="235" item-key="name" hide-default-footer :headers="headers" :items="items_total_testing" show-select class="ma-0 pa-0 laboratoty-table" style="width: 100%;">
                            <template #[`item.status`]="{ item }">
                                <td style="text-align: center !important;" :class="statusClass(item.status)">
                                    {{ item.status }}
                                </td>
                            </template>
                        </v-data-table>
                    </v-row>
                </v-col>

                <v-col cols="3" class="ma-0 pa-0 d-flex flex-column" style="height: 293px !important;">
                    <v-row class="ma-0 pa-0 align-center justify-center">
                        <user-progress-circular :percentage="calculatePercentage(items_total_testing, 'In-Progress')" :data="inProgressCountTesting" :color="'#874C96'" :topic="'In Progress'" />
                    </v-row>

                    <v-spacer />

                    <v-row class="ma-0 pa-0 align-center justify-center">
                        <user-progress-circular :percentage="calculatePercentage(items_total_testing, 'Completed')" :data="completedCountTesting" :color="'#ffccba'" :topic="'Done'" />
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-6 pl-16 pr-16 mt-8 laboratoty-card d-flex align-center justify-center" style="font-size: 50px;">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p class="ma-0 pa-0 laboratory-card-title">Result</p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-1">
                        <p class="ma-0 pa-0 laboratory-card-subtitle">700 people proceed to resolve them</p>
                    </v-row>

                    <v-row class="ma-0 pa-0 mt-6">
                        <v-data-table height="235" item-key="name" hide-default-footer :headers="headers" :items="items_total_result" show-select class="ma-0 pa-0 laboratoty-table" style="width: 100%;">
                            <template #[`item.status`]="{ item }">
                                <td style="text-align: center !important;" :class="statusClass(item.status)">
                                    {{ item.status }}
                                </td>
                            </template>
                        </v-data-table>
                    </v-row>
                </v-col>

                <v-col cols="3" class="ma-0 pa-0 d-flex flex-column" style="height: 293px !important;">
                    <v-row class="ma-0 pa-0 align-center justify-center">
                        <user-progress-circular :percentage="calculatePercentage(items_total_result, 'In-Progress')" :data="inProgressCountResult" :color="'#874C96'" :topic="'not issued'" />
                    </v-row>

                    <v-spacer />

                    <v-row class="ma-0 pa-0 align-center justify-center">
                        <user-progress-circular :percentage="calculatePercentage(items_total_result, 'Completed')" :data="completedCountResult" :color="'#ffccba'" :topic="'issued'" />
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-3">
                <v-row class="ma-0 pa-0 d-flex justify-end align-center">
                    <v-col cols="1" class="ma-0 pa-0">
                        <p class="ma-0 pa-0">See more</p>
                    </v-col>

                    <v-col cols="auto" class="ma-0 pa-0">
                        <img class="ma-0 pa-0" width="35" src="../../assets/home/laboratory/arrow.svg" />
                    </v-col>
                </v-row>
            </v-row>
        </v-col>
    </div>
</template>

<script>

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            token: '',
            doctor: '',
            headers: [
                { text: 'Name', value: 'patient', align: 'center', sortable: true },
                { text: 'Date', value: 'date', align: 'center', sortable: false },
                { text: 'Admin', value: 'admin', align: 'center', sortable: false },
                { text: 'Status', value: 'status', align: 'center', sortable: false },
                { text: 'Time Taken', value: 'time_taken', align: 'center', sortable: false }
            ],
            items_total_testing: [],
            items_total_result: [],
            doctors: [],
            patients: [],
            admins: [],
            tests: [],
            inProgressCountTesting: 0,
            completedCountTesting: 0,
            inProgressCountResult: 0,
            completedCountResult: 0
        }
    },
    mounted () {
        this.token = localStorage.getItem('Token')
        this.doctor = localStorage.getItem('Doctor')

        console.log('token', this.token)
        console.log('doctor', this.doctor)

        this.getPatients()
        this.getDoctors()
        this.getAdmins()
        this.getTest()
    },
    methods: {
        statusClass (status) {
            return {
                'laboratory-table-status-completed': status === 'Completed',
                'laboratory-table-status-done': status === 'Done',
                'laboratory-table-status-in-progress': status === 'In-Progress'
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
        async getDoctors () {
            const url = '/get-all-doctors'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.doctors = res.data.doctors

                        console.log('@ Keyla => Doctors ', this.doctors)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        async getAdmins () {
            const url = '/get-all-admins'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.admins = res.data.admins

                        console.log('@ Keyla => Admins ', this.admins)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        async getTest () {
            const url = '/get-all-tests'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.tests = res.data.tests

                        console.log('@ Keyla => Tests ', this.tests)

                        this.items_total_testing = this.tests
                            .filter(test => test.result === null && test.email_doctor === this.doctor)
                            .map(test => {
                                const patient = this.patients.find(p => p.email === test.email_patient)
                                const doctor = this.doctors.find(d => d.email === test.email_doctor)
                                const admin = this.admins.find(a => a.email === test.email_admin)

                                return {
                                    ...test,
                                    patient: patient.name,
                                    doctor: doctor.name,
                                    admin: admin.name
                                }
                            })

                        console.log('@ Keyla => items_total_testing ', this.items_total_testing)

                        this.items_total_result = this.tests
                            .filter(test => test.result !== null && test.email_doctor === this.doctor)
                            .map(test => {
                                const patient = this.patients.find(p => p.email === test.email_patient)
                                const doctor = this.doctors.find(d => d.email === test.email_doctor)
                                const admin = this.admins.find(a => a.email === test.email_admin)

                                return {
                                    ...test,
                                    patient: patient.name,
                                    doctor: doctor.name,
                                    admin: admin.name
                                }
                            })

                        console.log('@ Keyla => items_total_result ', this.items_total_result)

                        this.inProgressCountTesting = this.countItemsByStatus(this.items_total_testing, 'In-Progress')
                        this.completedCountTesting = this.countItemsByStatus(this.items_total_testing, 'Completed')
                        this.inProgressCountResult = this.countItemsByStatus(this.items_total_result, 'In-Progress')
                        this.completedCountResult = this.countItemsByStatus(this.items_total_result, 'Completed')
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        calculatePercentage (items, status) {
            const itemCount = this.countItemsByStatus(items, status)
            if (items.length === 0) {
                return 0
            }
            return (itemCount / items.length) * 100
        },
        countItemsByStatus (items, status) {
            return items.filter(item => item.status === status).length
        }
    }
}
</script>
