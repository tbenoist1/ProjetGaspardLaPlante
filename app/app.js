import Vue from 'nativescript-vue';

// Vue.registerElement('CardView', () => require('./nativescript-cardview').CardView);


import App from './components/App';
//import App from './components/CityOverview';
// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
import orientation from './nativescript-orientation'



new Vue({

    render: h => h('frame', [h(App)]),
    mounted() {
        setTimeout(() => {
            orientation.setOrientation('portrait')
            orientation.disableRotation();
        },0)
    }


}).$start();


