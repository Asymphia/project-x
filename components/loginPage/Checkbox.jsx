const Checkbox = ({ label, checked, onChange, disabled }) => {
    return (
        <label className="font-sans font-semibold md:text-sm text-xs text-grey cursor-pointer">
            <input
                type="checkbox"
                className={`mr-xl relative h-[1px] w-[1px] after:transition-all
                            after:w-base after:h-base after:absolute after:-top-sm after:left-0
                            after:border-green after:border-2 after:rounded-sm 
                            ${checked ? "after:bg-green" : "after:bg-white"}`}
                disabled={disabled}
                checked={ checked }
                onChange={ onChange }
            />
            { label }
        </label>
    )
}

export default Checkbox