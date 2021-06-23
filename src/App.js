import React from 'react';
import Layout from './components/layout'
import HomePage from './pages/home'
import PrivacyPage from './pages/privacy'
import TermsOfService from './pages/tos'
import { BrowserRouter, Router, Route, Switch, useLocation } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter basename="/">
          <Layout>
            <Switch>
              <Route path="/" exact render={() => <HomePage />}></Route>
              <Route path="/privacy-policy" exact render={() => <PrivacyPage />} />
              <Route path="/terms-of-service" exact render={() => <TermsOfService />} />
              <Route><div className="text-center text-4xl font-bold">404, Not Found.</div></Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
