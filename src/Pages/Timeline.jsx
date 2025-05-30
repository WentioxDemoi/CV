import { Fragment } from "react";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';


   
  export default function Parcours() {
    const events = [
        {
            heading: "Start of Epitech",
            subHeading: "2020",
            direction: "right",
            id: "epitech"
        },
        {
            heading: "Internship Versity",
            subHeading: "2021",
            direction: "left",
            id: "stagepapa"
        },
        {
            heading: "Actin Space",
            subHeading: "11/2022",
            direction: "right",
            id: "Hackathonactin"
        },
        {
          heading: "Muséomix",
          subHeading: "11/2022",
          direction: "left",
          id: "Hackathonmuseo"
        },
        {
          heading: "Starton Online",
          subHeading: "11/2022",
          direction: "right",
          id: "Hackathonstarton"
        },
        {
          heading: "Hack4Inclusion",
          subHeading: "01/2023",
          direction: "left",
          id: "Hackathonhack"
        },
        {
            heading: "Internship Thales",
            subHeading: "2023",
            direction: "right",
            id: "stagethales"
        },
        {
            heading: "Erasmus",
            subHeading: "2023-2024",
            direction: "left",
            id: "unical"
        },
        {
          heading: "Internship Thales",
          subHeading: "2025",
          direction: "right",
          id: "stagedms"
      },
    ]
    return (
        <div className="text-l lg:text-2xl flex flex-col gap-y-3 w-full my-4 z-50">
          <h2 className="text-3xl font-bold mt-18 text-center">Timeline</h2>
          <h5 className="text-xs font-bold mt-18 mb-16 text-center">Cards are clickable!</h5>
            <div id="Circle" className="bg-gradient-to-r from-gray-600 to-teal-100 rounded-full w-4 h-4 mx-auto"></div>
            {events.map((event, key) => (
  <Fragment key={key}>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                        {
                            event.direction === 'left' ? (
                                <EventCard heading={event.heading} subHeading={event.subHeading} direction={event.direction} id={event.id}/>
                            ) : (<div></div>)
                        }
                        <Pillar/>
                        {
                            event.direction === 'right' ? (
                                <EventCard heading={event.heading} subHeading={event.subHeading} direction={event.direction} id={event.id}/>
                            ) : (<div></div>)
                        }

                    </div>
                    { key < (events.length - 1) && <Circle/> && <br/> && <Circle/> && <Circle/>}
                </Fragment>
            ))}
            <Circle/>
        </div>
    );
  }

  const Circle = () => {
    return (
        <div className="bg-gradient-to-r from-gray-600 to-teal-500 rounded-full w-4 h-4 mx-auto bg-opacity-100 bg-white"></div>
    )
  } 
  const Pillar = () => {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-teal-500 rounded-t-full rounded-b-full w-2 h-28 mx-auto bg-opacity-100 bg-white"></div>
    )
  } 
  
  const EventCard = ({ heading, subHeading, direction, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.5 });
  
    const variants = {
      hidden: {
        y: -150, //: direction === 'right' ? 0 : -150,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      },
    };

    const handleClick = (id) => {
      const targetElement = document.querySelector('#' + id);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 150,
          behavior: 'smooth'
        });
      }
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        //className="transition duration-500 ease-in-out trasition-transform hover:-translate-y-10 hover:shadow-2xl hover:bg-gray-200 flex flex-col gap-y-2 border shadow-md rounded-xl p-4"
        onClick={() => handleClick(id)}
      >
        <div className="bg-opacity-100 z-50  bg-white transition duration-200 ease-in-out trasition-transform hover:-translate-y-2  hover:shadow-2xl hover:bg-gray-200 flex flex-col gap-y-2 border shadow-md rounded-xl p-4 hover:rotate-1">
          <div id={heading} className="text-base text-blue-700 font-bold border-b">{heading}</div>
          <div className="text-sm text-gray-700">{subHeading}</div>
        </div>
      </motion.div>
    );
  };