"use client"

import slide1 from '/public/loginPage/slide1.svg'
import slide2 from '/public/loginPage/slide2.svg'
import slide3 from '/public/loginPage/slide3.svg'
import { motion } from "framer-motion"
import Image from "next/image"
import {useEffect, useState} from "react";

const slides = [
    { photo: slide1, desc: 'Lorem ipsum dolor sit amet' },
    { photo: slide2, desc: 'Lorem ipsum dolor sit amet' },
    { photo: slide3, desc: 'Lorem ipsum dolor sit amet' }
]

const slideVariants = {
    initial: { opacity: 0, x: 100, transition: { duration: 0.4 } },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4 } }
}

const Slide = ({ number }) => {
    return (
        <motion.div
            className="flex flex-col gap-xl h-fit"
            key={number}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full h-[300px] relative">
                <Image src={slides[0].photo} className={number === 0 ? "block" : "hidden"} fill alt="Slide Image" />
                <Image src={slides[1].photo} className={number === 1 ? "block" : "hidden"} fill alt="Slide Image" />
                <Image src={slides[2].photo} className={number === 2 ? "block" : "hidden"} fill alt="Slide Image" />
            </div>
            <h4 className="text-center">
                {slides[number].desc}
            </h4>
        </motion.div>
    )
}

export default Slide
