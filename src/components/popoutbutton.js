import React from 'react'
import { Link } from 'react-router-dom'

export function ExternalLinkButton(props) {
  return (
    <a href={props.link ? props.link : "#"} rel={props.link && props.popup ? "external noreferrer nofollow noopener" : ""} target={props.link && props.popup ? "_blank" : ""}>
      <LinkButton {...props} />
    </a>
  );
}

export function InternalLinkButton(props) {
  return (
    <Link to={props.link ? props.link : "#"}>
      <LinkButton {...props} />
    </Link>
  );
}

export function LinkButton(props) {
  return (
    <div className={`font-semibold ${props.notScale ? "" : "active:scale-95 hover:scale-105 transition-all transform duration-300"} rounded ${props.colors}`}>
      <div className={"text-xl md:text-2xl p-5" + (props.username ? " sm:grid sm:grid-cols-2" : "")}>
        <div className="text-white text-center sm:text-left">
          <i className={`${props.icon} sm:mx-2`} />
          <span className="ml-2">{props.type}</span>
          <p className='text-base sm:text-lg ml-2 font-medium text-slate-200'>{props.description}</p>
        </div>
        {props.username ? <div className="text-gray-200 text-center sm:text-right">
          <p>{props.username}</p>
        </div> : <></>}
      </div>
    </div>
  );
}