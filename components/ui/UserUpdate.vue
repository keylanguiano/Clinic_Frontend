<template>
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
</template>

<script>

export default {
    layout: 'ui-dashboard',
    auth: true,
    data () {
        return {
            showUpdate: false,
            name: null,
            paternal_surname: null,
            maternal_surname: null,
            address: null,
            phone: null,
            email: null,
            password: null,
            userToUpdate: {}
        }
    },
    methods: {
        registrarUsuario () {
            const url = `/users/${this.userToUpdate.email}`

            this.$axios.put(url, this.userToUpdate)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
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
        }
    }
}
</script>
