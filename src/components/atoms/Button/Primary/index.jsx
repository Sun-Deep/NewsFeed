import './styles.css'

const PrimaryButton = ({ text }) => {
    return <button
        className='primary-btn white black-bg'
    >
        {text}
    </button>
}
export default PrimaryButton