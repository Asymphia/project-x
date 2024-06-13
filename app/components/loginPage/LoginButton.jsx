"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const LoginButton = ({ isSend, isSending }) => {
    const [dots, setDots] = useState(1)

    useEffect(() => {
        let intervalId
        if (isSending) {
            intervalId = setInterval(() => {
                setDots((prevDots) => (prevDots === 1 ? 2 : prevDots === 2 ? 3 : 1))
            }, 500)
        } else {
            setDots(1)
        }
        return () => clearInterval(intervalId)
    }, [isSending])

    return (
        <motion.button
            className="font-sans font-semibold text-sm text-white w-fit px-[90px] h-[60px] w-[235px] py-lg rounded-lg m-auto mt-4xl flex gap-sm relative overflow-hidden"
            initial={{ scale: 1.0, backgroundColor: "#222222" }}
            whileHover={ !isSend && !isSending && { scale: 1.05, backgroundColor: "#727272" }}
            whileTap={ !isSend && !isSending && { scale: 0.95 }}
            disabled={isSend || isSending}
            animate={ isSend ? { backgroundColor: "#13AE85", scale: 1.0 } : ( isSending ? { backgroundColor: "#727272", scale: 1.0 } : { backgroundColor: "#222222" } )}
        >
            <motion.svg
                width="235"
                height="60"
                viewBox="0 0 235 60"
                className="absolute inset-0 pointer-events-none"
                initial={{ display: "none", opacity: "0%" }}
                animate={ isSending ? { display: "block", opacity: "100%" } : { display: "none", opacity: "0%" }}
            >
                <motion.rect
                    x="1" y="1" width="233" height="58" rx="29" fill="none" stroke="#13AE85" stroke-width="5" stroke-linecap="round"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={ isSending && {
                        pathLength: [0, 1],
                        pathOffset: [0, 1],
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />
            </motion.svg>
            <motion.svg width="24" height="24"
                        className="fill-white absolute w-[24px] h-[24px] top-[18px]"
                        initial={{ left: -30 }}
                        animate={ isSend ? { left: 40 } : { left: -30 } }
            >
                <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
            </motion.svg>
            <motion.span
                className="absolute"
                initial={{ left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }}
                animate={ isSend ? { left: "55%", top: '50%', translateX: '-50%', translateY: '-50%' } : { left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' } }
            >
                { isSend ? "Zalogowano" : ( isSending ? `Logowanie${'.'.repeat(dots)}` : "Zaloguj" ) }
            </motion.span>
        </motion.button>
    )
}

export default LoginButton