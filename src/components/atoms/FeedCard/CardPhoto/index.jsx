import './styles.css'

const CardPhoto = ({ src }) => {
    return <img 
        src={src}
        className='card-photo'
        alt='Post Picture'
    />
}

export default CardPhoto