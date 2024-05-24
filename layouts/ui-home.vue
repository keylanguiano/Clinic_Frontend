<template>
    <v-app>
        <v-navigation-drawer app permanent color="#ffdac9">
            <v-sheet color="transparent" class="d-flex pa-4 justify-center align-center" height="280px">
                <img src="../assets/logo.png" width="80%"/>
            </v-sheet>

            <v-list class="ml-2 v-navigation-drawer-list">
                <v-list-item color="#ffe7db" v-for="(item, index) in links" :key="index" :to="item.route" link :class="{ 'selected': selectedIndex === index }" @click="selectItem (index)">
                    <v-list-item-icon class="pl-3">
                        <img :src="selectedIndex === index ? item.icon_selected : item.icon" height="35px"/>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title :class="{ 'selected-text': selectedIndex === index }">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-sheet color="transparent" class="d-flex ma-0 pa-0 justify-center align-center v-navigation-drawer-footer" width="100%" height="200">
                <v-col class="ma-0 pa-0">
                    <v-row class="pa-0 ma-0" justify="center" align="center">
                        <v-avatar color="#000" size="100"></v-avatar>
                    </v-row>

                    <v-row class="pa-0 ma-0" justify="center" align="center">
                        <p class="pa-0 ma-0 mt-2">Keyla Anguiano</p>
                    </v-row>

                    <v-row class="pa-0 ma-0" justify="center" align="center">
                        <p class="pa-0 ma-0">keyla_anguiano@hotmail.com</p>
                    </v-row>
                </v-col>
            </v-sheet>
        </v-navigation-drawer>

        <v-main style="background-color: #fff6f1 !important;">
            <v-container class="ma-0 pa-0" fluid>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        selectedIndex: 0,
        links: [
            { icon: require('../assets/home/nav/dashboard.svg'), icon_selected: require('../assets/home/nav/dashboard_white.svg'), text: 'Dashboard', route: '/dashboard' },
            { icon: require('../assets/home/nav/schedule.svg'), icon_selected: require('../assets/home/nav/schedule_white.svg'), text: 'Schedule', route: '/schedule' },
            { icon: require('../assets/home/nav/patient.svg'), icon_selected: require('../assets/home/nav/patient_white.svg'), text: 'Patients', route: '/patients' },
            { icon: require('../assets/home/nav/order.svg'), icon_selected: require('../assets/home/nav/order_white.svg'), text: 'Orders', route: '/orders' },
            { icon: require('../assets/home/nav/microscope.svg'), icon_selected: require('../assets/home/nav/microscope_white.svg'), text: 'Laboratory', route: '/laboratory' }
        ]
    }),
    methods: {
        selectItem (index) {
            this.selectedIndex = index
        }
    }
}
</script>
