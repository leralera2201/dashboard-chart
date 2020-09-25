import React from 'react';
import {Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css';
import Login from "./pages/Login";
import {Provider} from 'react-redux'
import store from "./store/store";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <div className="App">
              <Navbar/>
              <Switch>
                  <Route path={'/signin'} exact component={Login}/>
                  <Route path={'/signup'} exact component={SignUp}/>
                  <ProtectedRoute path={'/'} exact component={Dashboard}/>
              </Switch>
          </div>
      </Provider>

  );
}

export default App;
