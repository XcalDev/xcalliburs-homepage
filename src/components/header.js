import styles from './layout.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })
  const [isGoHome, setGoHome] = useState(false);

  let title;
  switch (window.location.pathname) {
    case '/comms/discord': title = "Xcal's Discord Bot Commissions"; break;
    case '/comms/website': title = "Xcal's Website Commissions"; break;
    default: title = "Xcallibur's Homepage"; break;
  }

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => window.removeEventListener('resize', handleResize)
  })

  document.documentElement.style.setProperty('--top-spacing', (dimensions.height >= 496 ? '90px' : '50px'));

  const shouldGoHome = isGoHome && window.location.pathname !== "/";

  return (
    <div className="z-10 outer-container overflow-hidden">
      <div className={"pl-0 lg:px-10 fixed top-0 min-w-full " + styles.header}>
        <nav className={"flex items-center justify-between flex-wrap bg-white shadow-xl px-6 " + (dimensions.height >= 496 ? "py-6" : "py-2") + " rounded-lg mx-auto"}>
          <button className="mx-auto" onMouseEnter={() => setGoHome(true)} onMouseLeave={() => setGoHome(false)}>
            <Link to={props.dir === "/" ? "#" : "/"}>
              <div className="mr-2 md:mr-4 flex items-center flex-shrink-0">
                <img className={(dimensions.height >= 496 ? "h-12 w-12 sm:h-16 sm:w-16" : "h-10 w-10") + " rounded-full bg-blue-600 p-1 shadow-bluehover sm:mr-3"} alt="Xcallibur's Logo" src={process.env.PUBLIC_URL + "/profilerounded.png"}></img>
                <span className={"pl-2 font-semibold text-2xl tracking-tight " + (dimensions.height >= 496 ? "text-sm sm:text-3xl text-center" : "text-xs") + " " + (shouldGoHome ? "text-black" : styles.blue)}>{shouldGoHome ? "Back Home" : title}</span>
              </div>
            </Link>
          </button>
        </nav>
      </div>
    </div>
  );

}
