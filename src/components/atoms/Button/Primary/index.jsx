import './styles.css'

const PrimaryButton = ({ text, handleAction }) => {
    return <button
        className='primary-btn white black-bg'
        onClick={handleAction}
    >
        {text}
    </button>
}
export default PrimaryButton