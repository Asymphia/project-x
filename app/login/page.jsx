import Logo from "@/components/loginPage/Logo"
import SliderContainer from "@/components/loginPage/SliderContainer"
import FormContainer from "@/components/loginPage/FormContainer"

const LoginPage = () => {
    return (
        <div className="bg-white xl:p-2xl lg:p-xl p-0 w-screen h-screen">
            <div className="w-full h-full flex lg:flex-nowrap flex-wrap">
                <div className="w-1/2 min-h-full flex-col lg:flex hidden">
                    <Logo />
                    <SliderContainer />
                </div>
                <FormContainer />
            </div>
        </div>
    )
}

export default LoginPage