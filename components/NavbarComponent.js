import React from "react";
import { AiOutlineHome, AiOutlineCalendar, AiOutlineEnvironment, AiOutlineEdit } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function NavbarComponent() {

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-zinc-800">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <ScrollLink
          to="welcome"
          smooth={true}
          duration={1500}
          spy={true}
          offset={-70}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-900 group"
        >
          <AiOutlineHome size={24} className="text-white" />
          <span className="text-white text-sm">Home</span>
        </ScrollLink>
        <ScrollLink
          to="schedule"
          smooth={true}
          duration={1500}
          spy={true}
          offset={-70}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-900 group"
        >
          <AiOutlineCalendar size={24} className="text-white" />
          <span className="text-white text-sm">Schedule</span>
        </ScrollLink>
        <ScrollLink
          to="location"
          smooth={true}
          duration={1500}
          spy={true}
          offset={-70}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-900 group"
        >
          <AiOutlineEnvironment size={24} className="text-white" />
          <span className="text-white text-sm">Location</span>
        </ScrollLink>
        <ScrollLink
          to="wish"
          smooth={true}
          duration={1500}
          spy={true}
          offset={-70}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-900 group"
        >
          <AiOutlineEdit size={24} className="text-white" />
          <span className="text-white text-sm">Wish</span>
        </ScrollLink>
      </div>
    </div>
  );
}
