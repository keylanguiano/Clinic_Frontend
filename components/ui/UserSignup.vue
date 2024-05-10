<template>
    <div>
        <v-dialog v-model="showDialog" persistent width="500" class="ma-0 pa-0 d-flex flex-column justify-center" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog" style="position: absolute !important;">
            <p class="mt-8" style="font-size: 35px">Add User</p>

            <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="name" label="Name" type="text" rounded outlined/>
                </v-row>

                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="paternal_surname" type="text" label="Paternal surname" rounded outlined/>
                </v-row>

                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="maternal_surname" type="text" label="Maternal surname" rounded outlined/>
                </v-row>

                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="address" label="Address" type="text" rounded outlined/>
                </v-row>

                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="phone" label="Phone" type="text" rounded outlined/>
                </v-row>

                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="email" label="Correo" type="email" rounded outlined/>
                </v-row>

                <v-row width="100%" class="ma-0 mt-0">
                    <v-text-field v-model="password" label="Password" type="password" rounded outlined />
                </v-row>
            </v-card-text>

            <v-card-actions class="ma-0 pa-0 pl-4 pr-4">
                <v-col cols="6" class="ma-0 mt-0">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="showDialog = false">
                        <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Cancel</span>
                    </v-btn>
                </v-col>

                <v-col cols="6" class="ma-0 mt-0">
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="registrarUsuario">
                        <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Register</span>
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-dialog>

        <user-alert :text="alertText" :color="alertColor" :type="alertType" v-if="showAlert" />
    </div>
</template>

<!--<user-signup :dialog-visible="showDialog" />-->

<script>

export default {
    layout: 'ui-dashboard',
    auth: true,
    props: {
        dialogVisible: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            name: null,
            paternal_surname: null,
            maternal_surname: null,
            address: null,
            phone: null,
            email: null,
            password: null,
            showDialog: false,
            showAlert: false,
            alertText: '',
            alertColor: '',
            alertType: ''
        }
    },
    watch: {
        dialogVisible (newVal) {
            this.showDialog = newVal
        }
    },
    methods: {
        registrarUsuario () {
            const url = '/register'
            const data = {
                name: this.name,
                paternal_surname: this.paternal_surname,
                maternal_surname: this.maternal_surname,
                address: this.address,
                phone: this.phone,
                email: this.email,
                password: this.password
            }

            this.$axios.post(url, data)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'User registered successfully') {
                        this.showDialog = false
                        this.showAlert = true
                        this.alertText = res.data.message
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)

                        this.name = null
                        this.paternal_surname = null
                        this.maternal_surname = null
                        this.address = null
                        this.phone = null
                        this.email = null
                        this.password = null
                        this.password = null
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

                    this.name = null
                    this.paternal_surname = null
                    this.maternal_surname = null
                    this.address = null
                    this.phone = null
                    this.email = null
                    this.password = null
                })
        },
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
