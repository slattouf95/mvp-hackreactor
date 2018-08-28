import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { Card, CardSection, Button, Input, Spinner } from "../common";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      error: "",
      success: "",
      loading: false
    };
  }

  loadSuccess() {
    this.setState({
      error: "",
      success: "Successfully logged in",
      loading: false,
      userName: "",
      password: ""
    });
  }

  loadFail(error) {
    this.setState({
      error,
      loading: false
    });
  }

  login() {
    var that = this;
    const { userName, password } = this.state;
    this.setState({
      error: "",
      success: "",
      loading: true
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(userName, password)
      .then(this.loadSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(userName, password)
          .then(this.loadSuccess.bind(this))
          .catch(error => that.loadFail(error.message));
      });
  }

  toggleButton() {
    if (this.state.loading) {
      return <Spinner size={"large"} color={"blue"} />;
    }
    return (
      <Button style={{ height: 20 }} onPress={() => this.login()}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="John@email.com"
            value={this.state.userName}
            onChangeText={userName =>
              this.setState({
                userName
              })
            }
            label="login:"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password =>
              this.setState({
                password
              })
            }
            label="Password:"
          />
        </CardSection>
        <CardSection>{this.toggleButton()}</CardSection>
        <Text style={{ color: "red" }}>{this.state.error}</Text>
        <Text style={{ color: "blue" }}>{this.state.success}</Text>
      </Card>
    );
  }
}

export default LoginForm;
