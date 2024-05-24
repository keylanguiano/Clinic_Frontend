<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="ma-0 pa-0">
        <v-col class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <user-search class="ma-0 pa-1 pl-3 pr-3" />

                <v-col cols="2" class="ma-0 pa-1 pl-3 pr-3 d-flex align-center">
                    <v-row>
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
                <v-btn rounded color="#ffaa92" class="ma-0 pa-9 pl-12 pr-12 orders-footer-add-button">
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
            medicines: []
        }
    },
    mounted () {
        this.getMedicines()
    },
    methods: {
        getMedicines () {
            const url = '/get-all-medicines'

            this.$axios.get(url)
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
        }
    }
}
</script>
