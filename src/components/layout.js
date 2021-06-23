import styles from './layout.module.css'
import React from 'react';
import Header from './header'
import Footer from './footer'
import { withRouter } from 'react-router-dom';

class Layout extends React.Component {
  render() {
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