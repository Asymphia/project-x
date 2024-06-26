"use client"

import LoginInput from "@/app/components/loginPage/LoginInput"
import { useState } from "react"
import Link from "next/link"
import LoginButton from "@/app/components/loginPage/LoginButton";
import Checkbox from "@/app/components/loginPage/Checkbox";
import StyledLink from "@/app/components/StyledLink";

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
        <div className="bg-white w-full h-full rounded-lg xl:p-4xl md:px-2xl md:py-4xl px-xl py-4xl">
            <header className="flex flex-col gap-sm mb-4xl">
                <h1 className="text-center">Logowanie</h1>
                <p className="secondary xl:w-3/4 w-full text-center m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque nec arcu sit amet faucibus.
                </p>
            </header>
            <form className="flex flex-col" action={handleLogin}>
                <div className="flex flex-col gap-lg mb-3xl">
                    <LoginInput type="text" placeholder="E-mail..." value={email} onChange={(e) => setEmail(e.target.value)} error={error} disabled={isSending || isSend} />
                    <LoginInput type="password" placeholder="Hasło..." value={password} onChange={(e) => setPassword(e.target.value)} error={error} disabled={isSending || isSend} />
                </div>
                <Checkbox onChange={() => setIsChecked(prevState => !prevState)} checked={isChecked} label="Zapamiętaj mnie" disabled={isSending || isSend} />
                {
                    error.desc && <p className="mt-xl font-sans text-red-900 md:text-sm text-xs font-semibold text-center">{ error.desc }</p>
                }
                <LoginButton isSend={isSend} isSending={isSending} />
            </form>
            <div className="text-right mt-4xl">
                <StyledLink href="/" text="Nie pamiętam hasła" />
            </div>
        </div>
    )
}

export default LoginForm