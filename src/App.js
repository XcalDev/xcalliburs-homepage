import React from 'react';
import Layout from './components/layout'
import HomePage from './pages/home'
import PrivacyPage from './pages/privacy'
import TermsOfService from './pages/tos'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DiscordComms from './pages/discordcomms';

export default function App(props) {

  return (
    <>
      <BrowserRouter basename="/">
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <HomePage />}></Route>
            <Route path="/privacy-policy" exact render={() => <PrivacyPage />} />
            <Route path="/terms-of-service" exact render={() => <TermsOfService />} />
            <Route path="/comms/website" exact render={() => <div>Website Commissions</div>} />
            <Route path="/comms/discord" exact render={() => <DiscordComms />} />
            <Redirect from="/comms" to="/" />
            <Route><div className="text-center text-4xl font-bold">404, Not Found.</div></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}