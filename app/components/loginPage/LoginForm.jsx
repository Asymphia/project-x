"use client"

import LoginInput from "@/app/components/loginPage/LoginInput"
import {useEffect, useState} from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import LoginButton from "@/app/components/loginPage/LoginButton";

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [error, setError] = useState({ type: "", desc: "" })
    const [isSending, setIsSending] = useState(false)
    const [isSend, setIsSend] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault
        setIsSending(true)
        setInterval(() => {
            setIsSend(true)
            setIsSending(false)
        }, 3600)
    }

    return (
        <div className="bg-white w-full h-full rounded-lg p-4xl">
            <header className="flex flex-col gap-sm mb-4xl">
                <h1 className="text-center">Logowanie</h1>
                <p className="secondary w-3/4 text-center m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque nec arcu sit amet faucibus.
                </p>
            </header>
            <form className="flex flex-col" action={handleLogin}>
                <div className="flex flex-col gap-lg mb-3xl">
                    <LoginInput type="text" placeholder="E-mail..." value={email} onChange={(e) => setEmail(e.target.value)} error={error} />
                    <LoginInput type="password" placeholder="Hasło..." value={password} onChange={(e) => setPassword(e.target.value)} error={error} />
                </div>
                <label className="font-sans font-semibold text-sm text-grey cursor-pointer">
                    <input
                        type="checkbox"
                        className={`mr-xl relative h-[1px] w-[1px] after:transition-all
                                    after:w-base after:h-base after:absolute after:-top-sm after:left-0
                                    after:border-green after:border-2 after:rounded-sm 
                                    ${isChecked ? "after:bg-green" : "after:bg-white"}`}
                        checked={isChecked}
                        onChange={() => setIsChecked(prevState => !prevState)}
                    />
                    Zapamiętaj mnie
                </label>
                {
                    error.desc && <p className="mt-xl font-sans text-red-900 text-sm font-semibold text-center">{ error.desc }</p>
                }
                <LoginButton isSend={isSend} isSending={isSending} />
            </form>
            <Link href="/" className="font-sans font-semibold text-sm text-grey cursor-pointer underline text-right block w-full mt-4xl">
                Nie pamiętam hasła
            </Link>
        </div>
    )
}

export default LoginForm