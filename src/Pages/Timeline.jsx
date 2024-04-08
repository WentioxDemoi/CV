import { Fragment } from "react";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';


   
  export default function Parcours() {
    const events = [
        {
            heading: "Début Epitech",
            subHeading: "2020",
            direction: "right",
            id: "epitech"
        },
        {
            heading: "Stage",
            subHeading: "2021",
            direction: "left",
            id: "stagepapa"
        },
        {
            heading: "Hackathon",
            subHeading: "11/2022",
            direction: "right",
            id: "Hackathonactin"
        },
        {
          heading: "Hackathon",
          subHeading: "11/2022",
          direction: "left",
          id: "Hackathonmuseo"
        },
        {
          heading: "Hackathon",
          subHeading: "11/2022",
          direction: "right",
          id: "Hackathonstarton"
        },
        {
          heading: "Hackathon",
          subHeading: "01/2023",
          direction: "left",
          id: "Hackathonhack"
        },
        {
            heading: "Stage",
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
    ]
    return (
        <div className="flex flex-col gap-y-3 w-full my-4">
            <Circle/>
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
        <div className="bg-gradient-to-r from-gray-600 to-teal-500 rounded-full w-4 h-4 mx-auto"></div>
    )
  } 
  const Pillar = () => {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-teal-500 rounded-t-full rounded-b-full w-2 h-28 mx-auto"></div>
    )
  } 
  
  const EventCard = ({ heading, subHeading, direction, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.5 });
  
    const variants = {
      hidden: {
        x: direction === 'right' ? 150 : -150,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.1 },
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
        className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4"
        onClick={() => handleClick(id)}
      >
        <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
        <div className="test-sm text-gray-700">{subHeading}</div>
      </motion.div>
    );
  };