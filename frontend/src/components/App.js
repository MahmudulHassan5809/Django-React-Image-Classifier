import React,{ Fragment,useEffect } from 'react';
import { HashRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Home from './images/Home';

import { Provider } from 'react-redux';
import store from '../store';

//Alert Options
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const App = () => {
  return (

        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Router>
                    <Fragment>
                        <Header />
                        <Alerts />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>

                    </Fragment>
                </Router>
            </AlertProvider>
        </Provider>
        );
}

export default App;
