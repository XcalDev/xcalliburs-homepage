import styles from './layout.module.css'
import React from 'react';
import Header from './header'
import Footer from './footer'
import { withRouter } from 'react-router-dom';
import fetch from 'node-fetch'

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fetched: false }
  }

  render() {

    /**
     * Ping API Server
     */
    if (this.state.fetched === false) {
      this.setState({ fetched: true });
      fetch(`https://api.xcal.dev/core/v1/ping?time=${new Date().getTime()}`, {
        mode: 'cors',
        credentials: "include"
      })
        .then(res => res.json())
        .then(json => { });
    }

    const pathname = this.props.location.pathname;
    return (
      <>
        <main className={styles.screenSize}>
          <div>
            <Header dir={pathname}></Header>
          </div>
          <div id="page-wrap" className={styles.container}>
            <main>{this.props.children}</main>
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(Layout);