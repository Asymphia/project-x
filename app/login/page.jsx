import Logo from "@/app/components/loginPage/Logo";
import FormContainer from "@/app/components/loginPage/FormContainer";
import SliderContainer from "@/app/components/loginPage/SliderContainer";

const LoginPage = () => {
    return (
        <div className="bg-white p-2xl w-screen h-screen">
            <div className="w-full h-full flex flex-nowrap">
                <div className="w-1/2 h-full flex flex-col">
                    <Logo />
                    <SliderContainer />
                </div>
                <FormContainer />
            </div>
        </div>
    )
}

export default LoginPage