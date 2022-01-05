import styles from './layout.module.css'
import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import { withRouter } from 'react-router-dom';
import fetch from 'node-fetch'

function Layout(props) {

  const [fetched, setFetched] = useState(false);

  if (!fetched) {
    setFetched(true);
    fetch(`https://api.xcal.dev/core/v1/ping?time=${new Date().getTime()}`, {
      mode: 'cors',
      credentials: "include"
    })
      .then(res => res.json())
      .then(json => { });
  }

  const pathname = window.location.pathname;
  return (
    <>
      <main className={styles.screenSize}>
        <div>
          <Header dir={pathname}></Header>
        </div>
        <div id="page-wrap" className={styles.container}>
          <main>{props.children}</main>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(Layout);