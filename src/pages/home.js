import React from 'react'
import links from '../links.json'

export default function HomePage(props) {

  const linkButtons = []

  for (let l in links) {
    const link = links[l]
    linkButtons.push(
      <a href={link.link} rel="external noreferrer nofollow noopener" target="_blank">
        <div className={`font-semibold active:scale-90 transition-all transform duration-300 rounded ${link.colors}`}>
          <div className="text-xl md:text-2xl p-5 sm:grid sm:grid-cols-2">
            <div className="text-white text-center sm:text-left">
              <i className={`${link.icon} mx-2`} />
              <span className="ml-2">{link.type}</span>
            </div>
            <div className="text-gray-300 text-center sm:text-right">
              <p>{link.username}</p>
            </div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <div>
      <div className="flex">
        <p className="text-3xl sm:text-4xl font-bold mx-auto text-center">Hey, welcome to my homepage.</p>
      </div>
      <p className="text-center sm:text-lg font-semibold w-full sm:w-2/3 mt-2 mx-auto">
        <span>If you haven't already gotten enough of Xcallibur in your life, here are some other places I live:</span>
      </p>
      <hr className="my-4" />
      <div className="flex">
        <div class="flex-none w-1/6 sm:w-1/5" />
        <div class="flex-grow grid gap-y-3">
          {linkButtons}
        </div>
        <div class="flex-none w-1/6 sm:w-1/5 " />
      </div>
    </div>
  );

}
