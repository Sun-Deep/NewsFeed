import './styles.css'
import CardPhoto from "../../atoms/FeedCard/CardPhoto"
import CardTitle from "../../atoms/FeedCard/CardTitle"
import User from '../../molecules/FeedCard/User'
import Like from '../../molecules/FeedCard/Reactions/Like'
import Comment from '../../molecules/FeedCard/Reactions/Comment'

const FeedCard = ({ 
    cardPhoto, 
    cardTitle,
    userImage,
    userName,
    likeCount,
    commentCount
}) => {
    return <div>
            <div
                className='feedcard-container'
            >
                <CardPhoto 
                    src={cardPhoto} 
                />

                <div
                    className='feedcard-info'
                >
                    <CardTitle 
                        text={cardTitle} 
                    />
                    <div
                        className='user-container'
                    >
                        <User 
                            userName={userName}
                            userImage={userImage}
                        />

                        <div
                            className='reaction-container'
                        >
                            <Like count={likeCount} />
                            <Comment count={commentCount} />

                        </div>
                    </div>
                </div>
            </div>
    </div>
}

export default FeedCard