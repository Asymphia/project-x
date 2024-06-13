import { motion } from "framer-motion";

const SliderButton = ({ onClick, isActive }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`bg-dark-grey h-xs ${isActive ? 'w-3xl cursor-default' : 'w-xs cursor-pointer'} rounded-lg`}
            initial={{ width: "10px" }}
            animate={{ width: isActive ? "30px" : "10px" }}
            transition={{ duration: 0.8 }}
            whileHover={{
                scale: !isActive && 1.2,
                transition: !isActive && { duration: 0.1 }
            }}
        />
    )
}

export default SliderButton