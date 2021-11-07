import '../styles.css'
import { Count, LikeIcon } from "../../../../atoms/FeedCard/Reactions"

const Like = ({ count }) => {
    return <div
        className='inner-wrapper'
    >
        <LikeIcon />
        <Count count={count} />
    </div>
}

export default Like