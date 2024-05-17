<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="pa-1 pl-3 pr-3" >
            <v-row class="ma-0 pa-0">
                <user-search class="ma-0 pa-0" />

                <v-col cols="2" class="ma-0 pa-0 d-flex align-center">
                    <v-row class="ma-0 pa-0 d-flex justify-end">
                        <img class="ma-0 pa-0" width="35" src="../../assets/home/patients/time.svg" />
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-16">
                <v-col cols="3" class="ma-0 pa-0">
                    <img class="ma-0 pa-0" width="150" src="../../assets/home/patients/time.svg" />
                </v-col>

                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <p id="schedule_schedule_name" class="ma-0 pa-0 schedule-schedule-title">Miss. Mathews</p>
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
                                        <p id="schedule_schedule_age" class="ma-0 pa-0 schedule-schedule-text">32</p>
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
                                        <p id="schedule_schedule_sex" class="ma-0 pa-0 schedule-schedule-text">F</p>
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
                                <p id="schedule_schedule_phone" class="ma-0 pa-0 schedule-schedule-text">321-255-35695</p>
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
                                <p id="schedule_schedule_email" class="ma-0 pa-0" style="font-size: 15px; text-transform: lowercase;">mathewswife@hotmail.com</p>
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
                                <p id="schedule_schedule_address" class="ma-0 pa-0" style="font-size: 15px; text-transform: capitalize;">10 main st, las vegas, nevada</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="5" class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0" align="center" justify="center">
                        <user-progress-circular />

                        <v-spacer />

                        <user-progress-circular />

                        <v-spacer />

                        <user-progress-circular />
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-10">
                <v-col class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="patients_prescription_button_prescription" rounded class="ma-0 pa-5 patients-prescription-button">
                                    <span class="ma-0 pa-0 patients-prescription-button-text">Prescription</span>
                                </v-btn>
                            </v-row>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="schedule_schedule_today_schedule" rounded class="ma-0 pa-5 patients-prescription-button">
                                    <span class="ma-0 pa-0 patients-prescription-button-text">Checkups</span>
                                </v-btn>
                            </v-row>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="schedule_schedule_tomorrow_schedule" rounded class="ma-0 pa-5 patients-prescription-button">
                                    <span class="ma-0 pa-0 patients-prescription-button-text">Document's</span>
                                </v-btn>
                            </v-row>
                        </v-col>

                        <v-col cols="1" class="ma-0 pa-0" />

                        <v-col class="ma-0 pa-0">
                            <v-row class="ma-0 pa-0">
                                <v-btn id="schedule_schedule_tomorrow_schedule" rounded class="ma-0 pa-5 patients-prescription-button">
                                    <span class="ma-0 pa-0 patients-prescription-button-text">Payments </span>
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-10">
                <v-col class="ma-0 pa-0 patients-prescription" id="patients_prescription">
                    <user-prescription class="ma-0 pa-0 mb-5" />

                    <user-prescription class="ma-0 pa-0 mb-5" />

                    <user-prescription class="ma-0 pa-0 mb-5" />

                    <user-prescription class="ma-0 pa-0 mb-5" />
                </v-col>
            </v-row>

            <v-row class="ma-o pa-0">
                <v-col class="ma-0 pa-0 patients-checkups" id="patients_checkups">
                    <v-data-table :headers="headers" :items="usuarios" class="ma-0 pa-6 mt-10" style="width: 100%;">
                    <!--<template #[`item.email`] = "{item}">
                        <span style="font-size: 18px;">{{ item.email }}</span>
                    </template>-->

                        <template #[`item.actions`] = "{item}">
                            <v-row>
                                <v-col cols="6">
                                    <v-btn icon color="#ff4f60" @click="deleteUser (item)">
                                        <v-icon>mdi-trash-can</v-icon>
                                    </v-btn>
                                </v-col>

                                <v-col cols="6">
                                    <v-btn icon @click="updateUser (item)">
                                        <v-icon>mdi-account</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-col>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    layout: 'ui-home',
    auth: true,
    data () {
        return {
            usuarios: [],
            headers: [
                { text: 'Name', value: 'name', align: 'center', sortable: true },
                { text: 'Paternal surname', value: 'paternal_surname', align: 'center', sortable: true },
                { text: 'Maternal surname', value: 'maternal_surname', align: 'center', sortable: true },
                { text: 'Address', value: 'address', align: 'center', sortable: false },
                { text: 'Phone', value: 'phone', align: 'center', sortable: false },
                { text: 'Email', value: 'email', align: 'center', sortable: true }
            ]
        }
    },
    computed: {
        ...mapState({
            token: state => state.token
        })
    },
    mounted () {
        this.obtenerUsuarios()
    },
    methods: {
        obtenerUsuarios () {
            const url = '/get-all-users'

            this.$axios.get(url)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.usuarios = res.data.users
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
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
