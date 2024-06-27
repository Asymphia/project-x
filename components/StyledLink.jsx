import Link from "next/link"

const StyledLink = ({ href, text }) => {
    return (
        <Link
            href={href}
            className="font-sans font-semibold md:text-sm text-xs text-grey transition-all
                        cursor-pointer relative after:absolute after:bottom-[2px]
                        after:left-0 after:w-full after:h-[1px] after:bg-grey
                        hover:after:bg-gradient-green-horizontal hover:text-dark-grey"
        >
            { text }
        </Link>
    )
}

export default StyledLink