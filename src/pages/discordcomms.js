import React from 'react'
import links from '../links.json'
import { ExternalLinkButton, LinkButton } from '../components/popoutbutton';
import Button from '../components/button';

export default function DiscordComms(props) {

  window.scrollTo(0, 0);

  const linkButtons = []
  for (let l in links) {
    const link = links[l]
    if (link.communication)
      linkButtons.push(<ExternalLinkButton key={l} popup={link.popup} link={link.link} description={link.description} type={link.type} username={link.username} icon={link.icon} colors={link.colors} />)
  }

  return (
    <div>
      <div className="text-center w-full sm:w-2/3 mt-2 mx-auto my-4">
        <p className="text-3xl sm:text-4xl font-bold">Need a Custom Discord Bot?</p>
        <p className="sm:text-lg  pt-2 font-semibold ">I have experience making Discord bots that provide ways to boost server engagement, enhance moderation, and add custom features. If you can't find or aren't satisfied with an off-the-shelf bot, consider commissioning me!</p>
      </div>
      <hr className="my-4 text-gray-300 w-full sm:w-2/3 mx-auto" />
      <div className="flex-grow w-full sm:w-2/3 mx-auto gap-y-3 grid">
        <p className="font-semibold text-lg">Why Choose Me -</p>
        <LinkButton
          type="Fast and Reliable"
          description="When a server I'm passionate about was subject to bot raids, I whipped up a bot in 30 minutes that purged bots with nicknames containing any phrase inserted into a custom block list. It utilized a backend database to store this information."
          icon="fas fa-clock"
          notScale={true}
          colors="bg-gradient-to-tr from-purple-700 via-violet-500 to-purple-500 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-violet-500/50 hover:shadow-purple-500/50" />
        <LinkButton
          type="Customized"
          description="I've integrated custom external APIs to get statistics on live robotics tournament data, integrated custom Minecraft server information and currency into Discord, and tailored tons of server experiences through my bots. I can do the same for yours!"
          icon="fas fa-cogs"
          notScale={true}
          colors="bg-gradient-to-tr from-emerald-700 via-teal-600 to-emerald-500 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-emerald-500/50" />
        <LinkButton
          type="Experienced"
          description="I've developed Discord bots since 2016, and have worked with dozens of servers in that time to drive user experiences. I've seen dozens of changes to Discord's bot framework over time, and have likewise been improving my abilities too."
          icon="fas fa-user-tie"
          notScale={true}
          colors="bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-blue-500/50" />
        <LinkButton
          type="In it for the Long Haul"
          description="I take great care in ensuring my bots are working for the forseeable future. If you ever need changes or fixes, contact me and I will resolve them. I can assist with hosting, too."
          icon="fas fa-handshake"
          notScale={true}
          colors="bg-gradient-to-tr from-sky-700 via-cyan-600 to-sky-500 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-sky-500/50" />
      </div>
      <hr className="my-4 text-gray-300 w-full sm:w-2/3 mx-auto" />
      <div className="flex-grow w-full sm:w-2/3 mx-auto gap-y-3 grid">
        <p className="font-semibold text-lg">Portfolio -</p>
        <PortfolioSpot button-text="Try It On Your Server" button-link="" image="/pawn.png" title="Games Bot" description="Allows users to play the games Connect Four and UNO, among others, with multiple friends and other server members. Has a global and server-level leaderboard for each game and all-together, and server events can be created." />
        <p className="ml-2 italic">and many more...</p>
      </div>
      <hr className="my-4 text-gray-300 w-full sm:w-2/3 mx-auto" />
      <div className="flex-grow w-full sm:w-2/3 mx-auto gap-y-3 grid">
        <p className="font-semibold text-lg">Terms -</p>
      </div>
      <hr className="my-4 text-gray-300 w-full sm:w-2/3 mx-auto" />
      <div className="flex">
        <div className="flex-none w-1/12 sm:w-1/5" />
        <div className="flex-grow grid gap-y-3">
          <p className="font-semibold text-lg">Contact Me -</p>

          {linkButtons}
        </div>
        <div className="flex-none w-1/12 sm:w-1/5 " />
      </div>
    </div>
  );

}

export function PortfolioSpot(props) {

  const buttonExists = props["button-link"]

  // create an element that displays an icon and text to the right of it

  return (
    <div className="ml-2 p-4 bg-slate-200 rounded">
      <div className="text-black text-xl text-left">
        <div className='flex'>
          {props.icon ?
            <i className={`${props.icon} sm:mx-2`} />
            : props.image ?
              <span className='m-0'>
                <img className='w-10 rounded-full m-0' src={process.env.PUBLIC_URL + '/pawn.png'} />
              </span>
              : <></>}
          <span className={"ml-2 font-semibold " + (props.image ? " mt-2" : "")}>{props.title}</span>
        </div>
        <p className='text-sm sm:text-base font-medium mt-2'>{props.description}</p>
      </div>
      {buttonExists ?
        <div className='mt-2'>
          <a className='pt-10' href={props['button-link']} rel="external noreferrer nofollow noopener" target="_blank">
            <Button bstyle="tertiary">{props["button-text"]}</Button>
          </a>
        </div>
        : <></>}
    </div>
  );


}