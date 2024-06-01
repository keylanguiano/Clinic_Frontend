<template>
    <v-row class="block-alternative-dashboard ma-0 pa-0 pl-5 pr-5 mt-2" justify="center" align="center">
        <v-col>
            <v-row class="ma-0 pa-0">
                <p class="ma-0 pa-0" id="medication_name" style="font-size: 19px; font-weight: 600;">{{ medication }}</p>
            </v-row>

            <v-row class="ma-0 pa-0">
                <p class="ma-0 pa-0" id="medication_indication" style="font-size: 15px;">{{ prescription }}</p>
            </v-row>

            <v-row class="ma-0 pa-0">
                <p class="ma-0 pa-0" id="medication_last_refil" style="font-size: 15px; color: #874C96">Last refil {{ date }}</p>
            </v-row>
        </v-col>

        <v-col class="ma-0 pa-0" cols="1" justify="center" align="center">
            <img class="ma-0 pa-0" src="../../assets/home/dashboard/more.svg" />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        medication: {
            type: String,
            default: ''
        },
        prescription: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        }
    },
    mounted () {
        console.log('pops', this.medication, this.prescription, this.date)
    }
}
</script>
