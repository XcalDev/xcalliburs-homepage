import styles from './layout.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div className="text-center flex items-center justify-between flex-col flex-wrap bg-gray-400 shadow-xl p-6 bottom-0">
        <div className="flex items-center flex-shrink-0 text-white mx-auto">
          <span className={"font-semibold tracking-tight text-base " + styles.blue}>
            {"© 2020 Elliot M." + (this.state.width >= 1024 ? " • " : "")}{this.state.width >= 1024 ? <></> : <br />}
            <a href="mailto: xcal@xcal.dev" target="_blank" rel="noopener noreferrer">{this.state.width > 363 ? "Contact Me: " : ""}
              <span className="hover:underline">xcal@xcal.dev</span>
            </a>
            <br />
            <Link to="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            {" | "}
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;