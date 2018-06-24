# vue-firebase-push

- A vanilla integration with firebase cloud messaging for non-firebase console deployment.

- It uses webpack template of vue to get started.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Before deployment

- Make sure 'Firebase Cloud Messaging API' enabled for your project in console.developer.google.com

- Change config in main.js according to your firebase project. Copy paste web config snippet from console.firebase.google.com.

```js
var config = {
  apiKey: "<any.project.specific.api.key>",
  authDomain: "example-project.firebaseapp.com",
  databaseURL: "https://example-project.firebaseio.com",
  projectId: "example-project",
  storageBucket: "example-project.appspot.com",
  messagingSenderId: "123456789012"
};
firebase.initializeApp(config);
```

- Change `messagingSenderId` in firebase-messaging-sw.js according to your project.

```js
firebase.initializeApp({
  messagingSenderId: "123456789012"
});
```

## Post deployment

- Manually copy manifest.json and firebase-messaging-sw into your product deployment root directory.

- Keep firebase-messaging-sw.js in root level otherwise it won't register and work.

## Testing Push notification

- Get the push token in console.log on your browser.

- Trigger some notification in fireground and background mode and check it reaches accordingly.

```bash
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=<Firebase console >> Project Settings >> Cloud Messaging >> Server Key>' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"notification": {
    "title": "Test me!"
    "body": "Simple",
    "click_action" : "https://dummypage.com"
  },
  "to" : "cAP87UbbPvQ:APA91bEEWWfdQHKu8hK2dTxVzf-BgZVbH-xOTi8TwT3Gt4xg5CWfZM23S6huPf4Ju1MKTf88Yv1JdE4lrwTEVkgouwPxzdVA_6Fc6sRU10"
}'
```

## Local dev deployment

TBD
