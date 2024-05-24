<template>
    <div>
        <v-card class="d-flex flex-column pa-10 justify-center" rounded="xxl" color="#ffdac9" justify="center" align="center">
            <v-card-title justify="center" align="center" class="mt-10 mb-1">
                <v-row class="ma-0 pa-0" style="width: 100%; font-size: 3.5vw; font-weight: 600;" justify="center" align="center">Welcome</v-row>

                <v-row style="width: 100%; font-size: 3.5vw; font-weight: 600; margin-top: 2vw;" justify="center" align="center">Back</v-row>
            </v-card-title>

            <v-card-text class="mt-16">
                <v-row>
                    <v-text-field type="email" v-model="email_login" :rules="[rules.required, rules.email]" rounded label="E-mail" outlined />
                </v-row>

                <v-row class="mt-7">
                    <v-text-field type="password" v-model="password_login" :rules="[rules.required]" rounded label="Password" outlined />
                </v-row>
            </v-card-text>

            <v-card-actions class="ma-0 pa-4 mt-5">
                <v-row>
                    <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="login">
                        <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Log-In</span>
                    </v-btn>
                </v-row>
            </v-card-actions>

            <v-card-text class="mt-5 mb-10">
                <v-row justify="center" style="font-size: 20px;">
                    <span>If you didn’t have account</span>

                    <a class="ml-2" style="color: #575757; text-decoration: underline;" @click="showDialog = true">Sign-up</a>
                </v-row>
            </v-card-text>

            <v-dialog v-model="showDialog" persistent width="500" class="ma-0 pa-0 d-flex flex-column justify-center" transition="dialog-bottom-transition" align="center" justify="center" content-class="background-dialog">
                <p class="mt-8" style="font-size: 35px">Doctor Registration</p>

                <v-card-text class="ma-0 pa-0 pl-6 pr-6 mt-5">
                    <v-row width="100%" class="ma-0 mt-0">
                        <v-file-input :rules="[rules.required]" v-model="photo" accept="image/png, image/jpeg" prepend-icon="" append-icon="mdi-camera" label="Photo" rounded outlined />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required]" v-model="name" label="Name" type="text" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-combobox height="56px" :rules="[rules.required]" class="ma-0 pa-0 d-flex align-center justify-center" v-model="specialist" :items="specialties" multiple clearable outlined rounded dense chips label="Specialist" />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-combobox height="56px" :rules="[rules.required]" v-model="degree" :items="degrees" multiple clearable outlined rounded dense chips label="Degree" />
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required, rules.email]" v-model="email" label="Correo" type="email" rounded outlined/>
                    </v-row>

                    <v-row width="100%" class="ma-0 mt-2">
                        <v-text-field :rules="[rules.required]" v-model="password" label="Password" type="password" rounded outlined />
                    </v-row>
                </v-card-text>

                <v-card-actions class="ma-0 pa-0 pl-4 pr-4 mt-5">
                    <v-col cols="6" class="ma-0 mt-0">
                        <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="showDialog = false">
                            <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Cancel</span>
                        </v-btn>
                    </v-col>

                    <v-col cols="6" class="ma-0 mt-0">
                        <v-btn block rounded color="#ffaa92" class="ma-0 pa-6" @click="registerDoctor ()">
                            <span style="text-transform: none; color: white; font-size: 15px; font-weight :bold;">Register</span>
                        </v-btn>
                    </v-col>
                </v-card-actions>
            </v-dialog>
        </v-card>

        <user-alert :text="alertText" :color="alertColor" :type="alertType" v-if="showAlert" />
    </div>
</template>

<script>

export default {
    data () {
        return {
            email_login: null,
            password_login: null,
            showDialog: false,
            photo: null,
            name: null,
            specialist: [],
            degree: [],
            email: null,
            password: null,
            specialties: [
                'General Surgeon',
                'Cardiothoracic Surgeon',
                'Neurosurgeon',
                'Orthopedic Surgeon',
                'Plastic Surgeon',
                'Urologist',
                'Ophthalmologist',
                'Otolaryngologist',
                'Gynecological Surgeon',
                'Pediatric Surgeon',
                'Colon and Rectal Surgeon',
                'Vascular Surgeon',
                'Transplant Surgeon',
                'Maxillofacial Surgeon',
                'Hand Surgeon',
                'Trauma Surgeon'
            ],
            degrees: [
                'MBBS',
                'MS'
            ],
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
            }
        }
    },
    methods: {
        async login () {
            this.showAlert = false

            await console.log('@ Keyla => Datos ', this.email_login, this.password_login)
            const sendData = {
                email: this.email_login,
                password: this.password_login
            }
            await this.$auth.loginWith('local', {
                data: sendData
            }).then(async (res) => {
                const result = await res.data
                if (result.message === 'Success') {
                    console.log('@ Keyla => Result ', result.message)

                    this.showAlert = true
                    this.alertText = result.message
                    this.alertColor = '#6CDACE'
                    this.alertType = 'success'

                    this.$store.commit('setToken', result.token)
                    console.log('@ Keyla => Token ', result.token)

                    localStorage.setItem('Token', result.token)

                    setTimeout(() => {
                        this.$router.push('/dashboard')
                    }, 3000)
                }
            }).catch((err) => {
                this.showAlert = true
                this.alertText = err.response.data.message
                this.alertColor = '#FF9F8E'
                this.alertType = 'warning'

                console.error('@ Keyla => Error ', err.response.data.message)
            })
        },
        registerDoctor () {
            const url = '/register-doctor'
            const data = new FormData()

            console.log('specialist', this.specialist)
            console.log('degree', this.degree)

            data.append('photo', this.photo)
            data.append('name', this.name)
            data.append('specialist', this.specialist)
            data.append('degree', this.degree)
            data.append('email', this.email)
            data.append('password', this.password)

            console.log('photo signup', this.photo)

            this.$axios.post(url, data)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Doctor registered successfully') {
                        this.showDialog = false
                        this.showAlert = true
                        this.alertText = res.data.message
                        this.alertColor = '#6CDACE'
                        this.alertType = 'success'

                        setTimeout(() => {
                            this.showAlert = false
                        }, 3000)

                        this.photo = null
                        this.name = null
                        this.specialist = []
                        this.degree = []
                        this.email = null
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

                    this.photo = null
                    this.name = null
                    this.specialist = []
                    this.degree = []
                    this.email = null
                    this.password = null
                })
        }
    }
}
</script>
