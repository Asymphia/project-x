import Logo from "@/app/components/loginPage/Logo";
import FormContainer from "@/app/components/loginPage/FormContainer";
import SliderContainer from "@/app/components/loginPage/SliderContainer";

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