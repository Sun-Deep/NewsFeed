import '../styles.css'
import { CommentIcon, Count, LikeIcon } from "../../../../atoms/FeedCard/Reactions"

const Comment = ({ count }) => {
    return <div
        className='inner-wrapper'
    >
        <CommentIcon />
        <Count count={count} />
    </div>
}

export default Comment