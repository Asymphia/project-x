"use client"

import {signOut, useSession} from "next-auth/react"

const DashboardPage = () => {
    const { data: session, status } = useSession()

    if (!session) {
        return <div>Musisz być zalogowany, aby zobaczyć tę stronę.</div>
    }

    return (
        <>
            <div>Dashboard</div>
            <button onClick={() => signOut()}>Sign Out</button>
        </>
    )
}

export default DashboardPage