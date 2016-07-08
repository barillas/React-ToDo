import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCqx2wCtntW-wM1EO-mucqyEXhFqbtiFfg",
      authDomain: "barillas-todo-app.firebaseapp.com",
      databaseURL: "https://barillas-todo-app.firebaseio.com",
      storageBucket: "barillas-todo-app.appspot.com",
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
