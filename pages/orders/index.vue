<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div>
        <v-col cols="12">
            <v-row class="ma-0 pa-16" justify="center" align="center" style="font-size: 50px;">
                <p>Usuarios</p>

                <v-row class="pa-9" style="width: 100%;">
                    <v-btn rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="showDialog = true" style="width: 100%;">
                        <span style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Add user</span>
                    </v-btn>
                </v-row>

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

                <v-dialog v-model="showDialog" persistent width="500" class="ma-0 pa-0 d-flex flex-column justify-center" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
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

                <v-dialog v-model="showDelete" persistent width="500" class="pa-0 ma-0" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
                    <p class="mt-10" style="font-size: 35px">Delete user</p>

                    <p class="mt-10" style="font-size: 20px">Are you sure?</p>

                    <v-card-actions class="ma-0 pa-0">
                        <v-col cols="6">
                            <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="showDelete = false">
                                <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Cancel</span>
                            </v-btn>
                        </v-col>

                        <v-col cols="6">
                            <v-btn block rounded color="#ffaa92" class="ma-0 pa-6 mt-10" @click="borrarUsuario">
                                <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Delete</span>
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-dialog>

                <v-dialog v-model="showUpdate" persistent width="500" class="ma-0 pa-0 d-flex flex-column justify-center" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
                    <p class="mt-8" style="font-size: 35px">Update user</p>

                    <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                        <v-row width="100%" class="ma-0 mt-0">
                            <v-text-field v-model="userToUpdate.name" label="Name" type="text" rounded outlined/>
                        </v-row>

                        <v-row width="100%" class="ma-0 mt-0">
                            <v-text-field v-model="userToUpdate.paternal_surname" type="text" label="Paternal surname" rounded outlined/>
                        </v-row>

                        <v-row width="100%" class="ma-0 mt-0">
                            <v-text-field v-model="userToUpdate.maternal_surname" type="text" label="Maternal surname" rounded outlined/>
                        </v-row>

                        <v-row width="100%" class="ma-0 mt-0">
                            <v-text-field v-model="userToUpdate.address" label="Address" type="text" rounded outlined/>
                        </v-row>

                        <v-row width="100%" class="ma-0 mt-0">
                            <v-text-field v-model="userToUpdate.phone" label="Phone" type="text" rounded outlined/>
                        </v-row>

                        <v-row width="100%" class="ma-0 mt-0">
                            <v-text-field v-model="userToUpdate.password" label="Password" type="password" rounded outlined />
                        </v-row>
                    </v-card-text>

                    <v-card-actions class="ma-0 pa-0 pl-4 pr-4">
                        <v-col cols="6" class="ma-0 mt-0">
                            <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="showUpdate = false">
                                <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Cancel</span>
                            </v-btn>
                        </v-col>

                        <v-col cols="6" class="ma-0 mt-0">
                            <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="actualizarUsuario">
                                <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Update</span>
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-dialog>
            </v-row>
        </v-col>

        <user-alert :text="alertText" :color="alertColor" :type="alertType" v-if="showAlert" />
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
                { text: 'Email', value: 'email', align: 'center', sortable: true },
                { text: 'Actions', value: 'actions', align: 'center', sortable: false }
            ],
            showDialog: false,
            name: null,
            paternal_surname: null,
            maternal_surname: null,
            address: null,
            phone: null,
            email: null,
            password: null,
            showAlert: false,
            alertText: '',
            alertColor: '',
            alertType: '',
            userToDelete: null,
            showDelete: false,
            showUpdate: false,
            userToUpdate: {}
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
        },
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
                        this.obtenerUsuarios()

                        this.showAlert = true
                        this.alertText = res.data.message
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)

                        this.email = null
                        this.password = null
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)

                    this.showAlert = true
                    this.alertText = err.response.data.message
                    this.alertColor = '#FF9F8E'
                    this.alertType = 'warning'

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
        deleteUser (user) {
            this.userToDelete = user
            this.showDelete = true

            console.log('@ Keyla => User ', this.userToDelete)
        },
        borrarUsuario () {
            const url = `/users/${this.userToDelete.email}`

            console.log('@ Keyla => Url ', url)

            this.$axios.delete(url)
                .then((res) => {
                    console.log('@ Keyla => Res ', res)

                    if (res.status === 204) {
                        this.showDelete = false
                        this.obtenerUsuarios()

                        this.showAlert = true
                        this.alertText = res.data.message
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error ', err)
                })
        },
        updateUser (user) {
            this.userToUpdate = { ...user }
            this.showUpdate = true

            this.name = user.name
            this.paternal_surname = user.paternal_surname
            this.maternal_surname = user.maternal_surname
            this.address = user.address
            this.phone = user.phone
            this.email = user.email
            this.password = user.password
        },
        actualizarUsuario () {
            const url = `/users/${this.userToUpdate.email}`

            this.$axios.put(url, this.userToUpdate)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.showUpdate = false
                        this.obtenerUsuarios()

                        this.showAlert = true
                        this.alertText = res.data.message
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)

                    this.showAlert = true
                    this.alertText = err.response.data.message
                    this.alertColor = '#FF9F8E'
                    this.alertType = 'warning'

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
        }
    }
}
</script>
