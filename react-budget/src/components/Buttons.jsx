const Buttons = ({color, text}) => {
    return (
        <button className={`btn btn-${color}`} type="button">{text}</button>
    )
}

export default Buttons;