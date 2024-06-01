<template>
    <v-col class="ma-0 pa-0 mb-5">
        <v-row class="ma-0 pa-6 pl-7 pr-7 orders-medicine-card justify-center align-center" align="center" justify="center">
            <v-col class="ma-0 pa-0 d-flex flex-column justify-center align-center">
                <v-row class="ma-0 pa-0 align-center justify-center">
                    <img class="ma-0 pa-0 orders-medicine-photo align-center justify-center" width="100" height="100" :src="photo" />
                </v-row>

                <v-row class="ma-0 pa-0 mt-4 align-center justify-center" align="center" justify="center">
                    <p class="ma-0 pa-0 orders-medicine-name align-center justify-center" id="orders_medicine_name">{{ name }}</p>
                </v-row>

                <v-row class="ma-0 pa-0 mt-2 align-center justify-center" align="center" justify="center">
                    <p class="ma-0 pa-0 orders-medicine-description align-center justify-center" align="center" justify="center" id="orders_medicine_description">{{ description }}</p>
                </v-row>

                <v-row class="ma-0 pa-0 mt-7 align-center justify-center" align="center" justify="center">
                    <p class="ma-0 pa-0 orders-medicine-price align-center justify-center" id="orders_medicine_price">$ {{ price }}.00</p>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="ma-0 pa-0 mt-6 d-flex justify-center">
            <v-col cols="1" class="ma-0 pa-0 align-center justify-center">
                <img class="ma-0 pa-0" width="30" src="../../assets/home/orders/substract.svg" @click="decrementQuantity" />
            </v-col>

            <v-col cols="3" class="ma-0 pa-0">
                <v-row class="ma-0 pa-0 align-center justify-center">
                    <p class="ma-0 pa-0 orders-medicine-add-text align-center justify-center">{{ count }}</p>
                </v-row>
            </v-col>

            <v-col cols="1" class="ma-0 pa-0 align-center justify-center">
                <img class="ma-0 pa-0" width="30" src="../../assets/home/orders/add.svg" @click="incrementQuantity" />
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    props: {
        photo: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            quantity: 0,
            count: 0
        }
    },
    mounted () {
        this.$root.$on('countUpdated', this.countUpdated)

        const storedQuantity = localStorage.getItem('Quantity' + this.name)
        const storedCount = localStorage.getItem('Count' + this.name)

        if (storedQuantity !== null) {
            this.quantity = parseInt(storedQuantity)
            this.count = parseInt(storedCount)
        }

        console.log('Count inicial:', this.count)
        console.log('Quantity inicial:', this.quantity)
    },
    methods: {
        incrementQuantity () {
            this.count++
            this.updateLocalStorage()
        },
        decrementQuantity () {
            if (this.count > 0) {
                this.count--
                this.updateLocalStorage()
            }
        },
        updateLocalStorage () {
            localStorage.setItem('Count' + this.name, this.count)
            localStorage.setItem('Quantity' + this.name, (this.count * this.price))

            const storedQuantity = localStorage.getItem('Quantity' + this.name)
            const storedCount = localStorage.getItem('Count' + this.name)

            console.log('Count', storedQuantity)
            console.log('Quantity:', storedCount)
        },
        countUpdated () {
            this.count = 0
        }
    }
}
</script>
