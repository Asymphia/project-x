"use client"

import Provider from "@/context/Provider";

const AuthLayout = ({ children, session }) => {
    return (
        <div>
            <Provider>
                { children }
            </Provider>
        </div>
    )
}

export default AuthLayout