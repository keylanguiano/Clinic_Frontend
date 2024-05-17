import Vue from 'vue'

import userLogin from '@/components/ui/UserLogin.vue'
import userSignup from '@/components/ui/UserSignup.vue'
import userAlert from '@/components/ui/UserAlert.vue'
import userSearch from '@/components/ui/UserSearch.vue'
import userSchedule from '@/components/ui/UserSchedule.vue'
import userDoctor from '@/components/ui/UserDoctor.vue'
import userProgressCircular from '@/components/ui/UserProgressCircular.vue'
import userPrescription from '@/components/ui/UserPrescription.vue'

Vue.component('UserLogin', userLogin)
Vue.component('UserSignup', userSignup)
Vue.component('UserAlert', userAlert)
Vue.component('UserSearch', userSearch)
Vue.component('UserSchedule', userSchedule)
Vue.component('UserDoctor', userDoctor)
Vue.component('UserProgressCircular', userProgressCircular)
Vue.component('UserPrescription', userPrescription)
