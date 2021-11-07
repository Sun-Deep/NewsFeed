import './styles.css'
import UserImage from "../../../atoms/FeedCard/UserImage"
import UserName from "../../../atoms/FeedCard/UserName"

const User = ({ userName, userImage }) => {
    return <div
        className='user-container'
    >
        <UserImage src={userImage} />
        <UserName text={userName} />
    </div>
}

export default User