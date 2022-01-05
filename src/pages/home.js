import React from 'react'
import links from '../links.json'
import { ExternalLinkButton, InternalLinkButton } from '../components/popoutbutton';

export default function HomePage(props) {

  window.scrollTo(0, 0);

  const linkButtons = []
  for (let l in links) {
    const link = links[l]
    linkButtons.push(<ExternalLinkButton key={l} popup={link.popup} link={link.link} description={link.description} type={link.type} username={link.username} icon={link.icon} colors={link.colors} />)
  }

  return (
    <div>
      <div className="text-center w-full sm:w-2/3 mt-2 mx-auto my-4">
        <p className="text-3xl sm:text-4xl font-bold">Hey, welcome to my homepage.</p>
        <p className="sm:text-lg  pt-2 font-semibold ">I'm Elliot, though I go by Xcallibur in online circles.</p>
      </div>
      <hr className="my-4 text-gray-300 w-full sm:w-2/3 mx-auto" />
      <p className="text-center sm:text-lg font-semibold w-full sm:w-2/3 mt-2 mx-auto my-4 grid gap-y-3">
        <InternalLinkButton
          description="Need a custom-coded modern website or webapp, quick? I can help with that! Click for more!"
          link="/comms/website"
          type="I'm Doing Website Commissions Now!"
          icon="fas fa-laptop-code"
          popup={false}
          colors="transition-all duration-300 bg-gradient-to-tl from-purple-700 via-violet-500 to-purple-500 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-violet-500/50 hover:shadow-purple-500/50" />
        <InternalLinkButton
          description="Need to improve engagement, further moderation, or have a custom feature not available in other bots? Click for more!"
          type="Discord Bot Commissions"
          link="/comms/discord"
          icon="fas fa-robot"
          popup={false}
          colors="transition-all duration-300 bg-gradient-to-tl from-emerald-700 via-teal-600 to-emerald-500 shadow-lg bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-emerald-500/50 focus:scale-105" />
      </p>
      <hr className="my-4 text-gray-300 w-full sm:w-2/3 mx-auto" />
      <div className="flex">
        <div className="flex-none w-1/12 sm:w-1/5" />
        <div className="flex-grow grid gap-y-3">
          <p className="font-semibold text-lg">Here are some of the places I live -</p>
          {linkButtons}
        </div>
        <div className="flex-none w-1/12 sm:w-1/5 " />
      </div>
    </div>
  );

}
