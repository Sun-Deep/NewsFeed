import './styles.css'

const InputText = ({ apiEndpoint, handleApiEndpoint, placeholder }) => {

    return <input 
        type='text'
        name='apiEndpoint'
        value={apiEndpoint}
        onChange={handleApiEndpoint}
        placeholder={placeholder}
        className='input-text'
    />
}

export default InputText