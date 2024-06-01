<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="ma-0 pa-7">
            <v-row class="ma-0 pa-3">
                <user-search class="ma-0 pa-0" />

                <v-col cols="2" class="ma-0 pa-0 d-flex align-center">
                    <v-row class="ma-0 pa-0">
                        <v-spacer />

                        <v-col cols="3" class="ma-0 pa-0 d-flex justify-center">
                            <img class="ma-0 pa-0" width="35" src="../../assets/home/nav/order.svg" />
                        </v-col>

                        <v-spacer />

                        <v-col cols="3" class="ma-0 pa-0 d-flex justify-center">
                            <img class="ma-0 pa-0" width="35" src="../../assets/home/patients/time.svg" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ma-0 pa-0 mt-6 pb-6 orders-medicine" justify="space-between">
                <v-row class="ma-0 pa-0">
                    <v-col cols="4" class="pa-3" v-for="(medicine, index) in medicines" :key="index">
                        <user-medicine :photo="medicine.photo" :name="medicine.name" :description="medicine.description" :price="medicine.price" />
                    </v-col>
                </v-row>
            </v-row>

            <v-row class="ma-0 pa-0 d-flex align-center justify-center orders-footer">
                <v-btn rounded color="#ffaa92" class="ma-0 pa-9 pl-12 pr-12 orders-footer-add-button" @click="addToCart()">
                    <p class="ma-0 pa-0 orders-footer-add-button-text">Add Cart</p>
                </v-btn>
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
            medicines: []
        }
    },
    mounted () {
        this.token = localStorage.getItem('Token')
        this.doctor = localStorage.getItem('Doctor')

        console.log('token', this.token)
        console.log('doctor', this.doctor)

        this.getMedicines()
    },
    methods: {
        getMedicines () {
            const url = '/get-all-medicines'
            const config = {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }

            this.$axios.get(url, config)
                .then((res) => {
                    console.log('@ Keyla => Response ', res)

                    if (res.data.message === 'Success') {
                        this.medicines = res.data.medicines.map(medicine => {
                            return {
                                ...medicine,
                                price: Number(medicine.price)
                            }
                        })
                    }
                })
                .catch((err) => {
                    console.log('@ Keyla => Error Frontend', err)
                })
        },
        addToCart () {
            let totalPrice = 0

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)

                if (key.startsWith('Quantity')) {
                    const itemName = key.substring('Quantity'.length)
                    const medicine = this.medicines.find(m => m.name === itemName)

                    if (medicine) {
                        const quantity = parseInt(localStorage.getItem(key)) || 0
                        totalPrice += quantity
                    }
                }
            }

            localStorage.setItem('TotalPrice', totalPrice)
            this.$store.commit('setTotalPrice', totalPrice)

            console.log('Total cart price:', totalPrice)

            for (let i = localStorage.length - 1; i >= 0; i--) {
                const key = localStorage.key(i)

                if (key.startsWith('Quantity') || key.startsWith('Count')) {
                    localStorage.removeItem(key)
                }
            }

            this.$root.$emit('countUpdated')
        }
    }
}
</script>
