import './styles.css'

const InputFile = ({ fileName, handleFile, placeholder }) => {

    return <input 
        type='file'
        name='fileName'
        onChange={handleFile}
        placeholder={placeholder}
        className='input-file'
    />
}

export default InputFile