import logoImg from '/public/logos/logo.svg'
import Image from "next/image";
import rectangle from '/public/loginPage/rectangle.svg'

const Logo = () => {
    return (
        <div className="bg-white h-fit p-sm pl-4xl flex flex-col gap-xs relative">
            <div className="absolute w-[260px] h-[136px] top-0 -right-sm">
                <Image src={rectangle} fill/>
            </div>
            <Image src={logoImg} width={190} />
            <p className="secondary">
                Lorem ipsum dolor sit amet
            </p>
        </div>
    )
}

export default Logo