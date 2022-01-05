import styles from './layout.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })
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

  return (
    <div className="text-center flex items-center justify-between flex-col flex-wrap bg-slate-300 shadow-xl p-6 bottom-0">
      <div className="flex items-center flex-shrink-0 text-white mx-auto">
        <span className={"font-semibold tracking-tight text-base " + styles.blue}>
          {`© ${new Date().getFullYear()} Elliot ${dimensions.width >= 1024 ? " • " : ""}`}{dimensions.width >= 1024 ? <></> : <br />}
          <a href="mailto: xcal@xcal.dev" target="_blank" rel="noopener noreferrer">{dimensions.width > 363 ? "Contact Me: " : ""}
            <span className="hover:underline">xcal@xcal.dev</span>
          </a>
          <br />
          <Link to="/terms-of-service" className="hover:underline">
            Website Terms of Service
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