"use client"

import LoginInput from "@/components/loginPage/LoginInput"
import { useState } from "react"
import LoginButton from "@/components/loginPage/LoginButton"
import Checkbox from "@/components/loginPage/Checkbox"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { userSchema } from "@/schemas/userSchema"

const LoginForm = () => {
    const router = useRouter()
    const [isPending, setIsPending] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [error, setError] = useState({ type: "", desc: "" })
    const [isSend, setIsSend] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        setError({ type: "", desc: "" })
        setIsPending(true)
        setIsSend(false)

        try {
            const validatedFields = userSchema.safeParse({ username, password })
            if(!validatedFields.success){
                setError({
                    type: validatedFields.error.issues[0].path[0],
                    desc: validatedFields.error.issues[0].message
                })
                return
            }

            const result = await signIn("credentials", {
                username, password,
                redirect: false
            })

            if(result.error){
                setError({ type: "login", desc: result.error })
                setIsSend(false)
            } else {
                setIsPending(false)
                setIsSend(true)

                router.push("/dashboard")
            }
        } catch (err) {
            setError({ type: "login", desc: "Wystąpił błąd" })
            setIsSend(false)
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div className="bg-white w-full h-full rounded-lg xl:p-4xl md:px-2xl md:py-4xl px-xl py-4xl">
            <header className="flex flex-col gap-sm mb-4xl">
                <h1 className="text-center">Logowanie</h1>
                <p className="secondary xl:w-3/4 w-full text-center m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque nec arcu sit amet faucibus.
                </p>
            </header>
            <form className="flex flex-col" onSubmit={handleLogin}>
                <div className="flex flex-col gap-lg mb-3xl">
                    <LoginInput fieldname="username" type="text" placeholder="Nazwa użytkownika..." value={username} onChange={(e) => setUsername(e.target.value)} error={error} disabled={isPending || isSend} />
                    <LoginInput fieldname="password" type="password" placeholder="Hasło..." value={password} onChange={(e) => setPassword(e.target.value)} error={error} disabled={isPending || isSend} />
                </div>
                <Checkbox onChange={() => setIsChecked(prevState => !prevState)} checked={isChecked} label="Zapamiętaj mnie" disabled={isPending || isSend} />
                {
                    error.desc && <p className="mt-xl font-sans text-red-900 md:text-sm text-xs font-semibold text-center">{ error.desc }</p>
                }
                <LoginButton isSend={isSend} isSending={isPending} />
            </form>
        </div>
    )
}

export default LoginForm