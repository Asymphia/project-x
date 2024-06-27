"use client"

import Slide from "@/components/loginPage/Slide"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import SliderButton from "@/components/loginPage/SliderButton"

const SliderContainer = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev >= 2 ? 0 : (prev === 1 ? 2 : 1)))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex bg-green h-full rounded-l-lg w-full flex-col justify-center gap-3xl">
            <AnimatePresence mode="wait">
                <Slide key={current} number={current} />
            </AnimatePresence>
            <div className='flex gap-[8px] m-auto mt-0 mb-0'>
                <SliderButton onClick={() => setCurrent(0)} isActive={current === 0} />
                <SliderButton onClick={() => setCurrent(1)} isActive={current === 1} />
                <SliderButton onClick={() => setCurrent(2)} isActive={current === 2} />
            </div>
        </div>
    )
}

export default SliderContainer
