import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./common";
import LoginForm from "./components/LoginForm";
import AlbumList from "./components/AlbumList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyASFlC3khHlVW5lhe1mpt66F4t_Yj9_hQY",
      authDomain: "login-fd161.firebaseapp.com",
      databaseURL: "https://login-fd161.firebaseio.com",
      projectId: "login-fd161",
      storageBucket: "login-fd161.appspot.com",
      messagingSenderId: "927840909533"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logRender() {
    if (this.state.loggedIn) {
      return (
        <View style={{ height: 700 }}>
          <Header headerText={"Huddle"} />
          <AlbumList />
          <Button
            onPress={() => {
              firebase.auth().signOut();
            }}
          >
            Log Out
          </Button>
        </View>
      );
    } else if (!this.state.loggedIn) {
      return <LoginForm />;
    } else {
      return (
        <Spinner style={{ alignItems: "center" }} color="green" size="large" />
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Huddle" />
        {this.logRender()}
      </View>
    );
  }
}

export default App;
