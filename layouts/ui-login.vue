<template>
    <v-app>
        <v-main>
            <v-sheet height="100vh" width="100%" color="#ffe7db">
                <v-row class="pa-0 ma-0">
                    <v-col cols="6" class="d-flex justify-center align-center pl-10 pr-10" height="100vh">
                        <div class="image-container">
                            <h1 class="mt-15 pt-10" style="text-align: center; z-index: 10;">Clinic Patient's Dashboard</h1>

                            <div class="contain-image">
                                <v-img :src="require('@/assets/logo.png')" class="background-image"/>
                            </div>
                        </div>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center align-center" height="100vh">
                        <Nuxt />
                    </v-col>
                </v-row>
            </v-sheet>
        </v-main>
    </v-app>
</template>
