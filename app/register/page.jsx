"use client"

import Logo from "@/components/loginPage/Logo"
import SliderContainer from "@/components/loginPage/SliderContainer"
import LoginInput from "@/components/loginPage/LoginInput";
import LoginButton from "@/components/loginPage/LoginButton";
import StyledLink from "@/components/StyledLink";
import {useState, useTransition} from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [error, setError] = useState({ type: "", desc: "" })
    const [isSend, setIsSend] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        setError({ type: "", desc: "" })

        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        const userInfo = await response.json()
        console.log(userInfo)
        router.push("/login")
    }

    return (
        <div className="bg-white xl:p-2xl lg:p-xl p-0 w-screen h-screen">
            <div className="w-full h-full flex lg:flex-nowrap flex-wrap">
                <div className="w-1/2 min-h-full flex-col lg:flex hidden">
                    <Logo/>
                    <SliderContainer/>
                </div>
                <div
                    className="lg:w-1/2 w-full h-full bg-gradient-login lg:rounded-r-lg rounded-none xl:p-4xl lg:p-3xl md:p-2xl p-xl">
                    <div className="bg-white w-full h-full rounded-lg xl:p-4xl md:px-2xl md:py-4xl px-xl py-4xl">
                        <header className="flex flex-col gap-sm mb-4xl">
                            <h1 className="text-center">Rejestracja</h1>
                            <p className="secondary xl:w-3/4 w-full text-center m-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque nec arcu sit
                                amet faucibus.
                            </p>
                        </header>
                        <form className="flex flex-col" onSubmit={handleLogin}>
                            <div className="flex flex-col gap-lg mb-3xl">
                                <LoginInput fieldname="username" type="text" placeholder="Nazwa użytkownika..."
                                            value={username} onChange={(e) => setUsername(e.target.value)} error={error}
                                            disabled={isPending || isSend}/>
                                <LoginInput fieldname="password" type="password" placeholder="Hasło..." value={password}
                                            onChange={(e) => setPassword(e.target.value)} error={error}
                                            disabled={isPending || isSend}/>
                            </div>
                            {
                                error.desc &&
                                <p className="mt-xl font-sans text-red-900 md:text-sm text-xs font-semibold text-center">{error.desc}</p>
                            }
                            <LoginButton isSend={isSend} isSending={isPending}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage