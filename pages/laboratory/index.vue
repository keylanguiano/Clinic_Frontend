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
                        <user-progress-circular :percentage="60" :data="'142'" :color="'#874C96'" :topic="'In Progress'" />
                    </v-row>

                    <v-spacer />

                    <v-row class="ma-0 pa-0 align-center justify-center">
                        <user-progress-circular :percentage="90" :data="'562'" :color="'#ffccba'" :topic="'Done'" />
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
                        <user-progress-circular :percentage="60" :data="'142'" :color="'#874C96'" :topic="'not issued'" />
                    </v-row>

                    <v-spacer />

                    <v-row class="ma-0 pa-0 align-center justify-center">
                        <user-progress-circular :percentage="90" :data="'562'" :color="'#ffccba'" :topic="'issued'" />
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
            headers: [
                { text: 'Name', value: 'name', align: 'center', sortable: true },
                { text: 'Date', value: 'date', align: 'center', sortable: false },
                { text: 'Admin', value: 'admin', align: 'center', sortable: false },
                { text: 'Status', value: 'status', align: 'center', sortable: false },
                { text: 'Time Taken', value: 'time_taken', align: 'center', sortable: false }
            ],
            items_total_testing: [
                { name: 'Mathews', date: '01/01/2023', admin: 'samnatha', status: 'in-progress', time_taken: '2 hrs' },
                { name: 'Swetha Menon', date: '07/01/2023', admin: 'bobP', status: 'in-progress', time_taken: '1.25 hrs' },
                { name: 'Jack Ma', date: '24/01/2023', admin: 'kate.F', status: 'completed', time_taken: '20 mins' },
                { name: 'Jack', date: '27/01/2023', admin: 'jack O', status: 'in-progress', time_taken: '60 mins' }
            ],
            items_total_result: [
                { name: 'antony', date: '01/01/2023', admin: 'samnatha', status: 'completed', time_taken: '2 hrs' },
                { name: 'Divya', date: '07/01/2023', admin: 'bobP', status: 'completed', time_taken: '1.25 hrs' },
                { name: 'manish', date: '24/01/2023', admin: 'kate.F', status: 'completed', time_taken: '20 mins' },
                { name: 'kanam', date: '27/01/2023', admin: 'jack O', status: 'completed', time_taken: '60 mins' }
            ]
        }
    },
    methods: {
        statusClass (status) {
            return {
                'laboratory-table-status-completed': status === 'completed',
                'laboratory-table-status-done': status === 'done',
                'laboratory-table-status-in-progress': status === 'in-progress'
            }
        }
    }
}
</script>
