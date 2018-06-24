// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import firebase from "firebase/app";
import "firebase/messaging";

var config = {
  apiKey: "<any.project.specific.api.key>",
  authDomain: "example-project.firebaseapp.com",
  databaseURL: "https://example-project.firebaseio.com",
  projectId: "example-project",
  storageBucket: "example-project.appspot.com",
  //Refer to project id in console.cloud.google.com or console.firebase.google.com
  messagingSenderId: "123456789012"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
//Include vapid keys as its recommended for web push
messaging.usePublicVapidKey("");
messaging
  .requestPermission()
  .then(function () {
    console.log("Notification permission granted.");
  })
  .catch(function (err) {
    console.log("Unable to get permission to notify.", err);
  });

messaging
  .getToken()
  .then(function (currentToken) {
    console.log(currentToken);
  })
  .catch(function (err) {
    console.log("An error occurred while retrieving token. ", err);
  });

messaging.onMessage(function (payload) {
  console.log(payload);
});

Vue.use(firebase);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
