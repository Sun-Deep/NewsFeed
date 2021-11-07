import CardPhoto from "../../components/atoms/FeedCard/CardPhoto"
import UserName from "../../components/atoms/FeedCard/UserName"
import Like from "../../components/molecules/FeedCard/Reactions/Like"
import Comment from "../../components/molecules/FeedCard/Reactions/Comment"
import User from "../../components/molecules/FeedCard/User"


const Landing = () => {
    return <div>
        hello
        <UserName text='Sandeep Pokhrel' />
        <CardPhoto src='https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw' />
        <User userName='Sandeep Pokhrel' userImage='https://randomuser.me/api/portraits/women/63.jpg' />
        <Like count={12} />
        <Comment count={24} />
    </div>
}

export default Landing