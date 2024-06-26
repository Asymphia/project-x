const LoginInput = ({ type, placeholder, value, onChange, error, disabled }) => {
    return (
        <div className={`group w-full border-2 flex flex-nowrap gap-base items-center rounded-lg px-xl transition-all 
                        ${error.type === type ? "border-red-900 bg-v-light-grey focus-within:border-red-950" : 
                        "border-light-grey focus-within:bg-v-light-grey focus-within:border-grey bg-light-grey"}`}
        >
            <svg width="24" height="24" className={`transition-all ${error.type === type ? "fill-red-900 group-focus-within:fill-red-950" : "fill-grey group-focus-within:fill-dark-grey"}`}>
                { type === "text" && <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"/> }
                { type === "password" && <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z"/> }
            </svg>
            <input
                className={`py-lg w-full font-sans font-semibold text-sm outline-none transition-all 
                ${error.type === type ? "bg-v-light-grey text-red-900 placeholder:text-red-900 focus:text-red-950 focus:placeholder:text-red-950" : "bg-light-grey focus:bg-v-light-grey text-grey placeholder:text-grey focus:text-dark-grey focus:placeholder-dark-grey"}`}
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}

export default LoginInput