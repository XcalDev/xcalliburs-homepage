import React from 'react'
import styles from './button.module.css'

const buttonStyle = "cursor-pointer transition duration-150 ease-in-out rounded items-center font-bold focus:outline-none"
const primaryStyle = "text-white pl-6 transform";

class PopOutButton extends React.Component {
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
      <div className={`${styles.skewed}`}>
        <span className={`overflow-visible ${styles.bigButton}`}>
          <button className={`${styles.skewed} ${buttonStyle} ${primaryStyle} ${styles.primarybutton}`} type={this.props.type}>
            <div className={`flex`}>
              <span className={`${styles.unskewed} my-auto flex`}>
                {this.props.children}
              </span>
              {this.state.width > 416 ?
                <span style={{ backgroundImage: `url(${this.props.img}` }}
                  className={`${styles.sideImageContainer} ${styles.sideImage} ${(this.props.img || this.state.width >= 768 || this.props.thin ? this.props.thin ? "pr-" + this.props.thin : 'pr-16 lg:pr-32' : 'pr-0')}`} /> : <></>}
            </div>
          </button>
        </span>
      </div >
    );
  }
}

export default PopOutButton;

