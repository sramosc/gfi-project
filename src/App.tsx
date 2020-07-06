import React, { Component } from "react";
import './App.css';
import Login from './Login/Login'

interface IProps {
}

interface IState {
  isAuthenticated?: boolean;
  userData: object;
  loading: boolean;
}

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userData: {},
      loading: false
    }
    //Binds
    this.login = this.login.bind(this)
  }

  authenticate(body: object) {
    let mockedResponse = {
      userName: 'Prueba Prueba',
      favs: [1, 2, 10]
    }
    return new Promise<any>((resolve, reject) => { setTimeout(() => { resolve(mockedResponse) }, 200) })
  }

  login(username: string, password: string) {
    let body = {
      username,
      password
    }

    this.authenticate(body)
      .then((response) => {
        window.sessionStorage.setItem('userName', response.userName)
        window.sessionStorage.setItem('favs', response.favs)
        this.setState({ isAuthenticated: true })
      })
      .catch(error => {
      })
      .finally(() => this.setState({ loading: false }))
  }

  logout() {
    this.setState({ isAuthenticated: false })
    window.sessionStorage.removeItem('userName')
    window.sessionStorage.removeItem('favs')

  }
  render() {
    return (
      <div>
        {(this.state.isAuthenticated) ? (
          <div>Logado como: {window.sessionStorage.getItem('userName')}</div>
        ) : (
            <Login login={this.login} />
          )}
      </div>
    );
  }
}

export default App;
