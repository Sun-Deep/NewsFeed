import CardPhoto from "../../components/atoms/FeedCard/CardPhoto"
import UserName from "../../components/atoms/FeedCard/UserName"
import User from "../../components/molecules/FeedCard/User"


const Landing = () => {
    return <div>
        hello
        <UserName text='Sandeep Pokhrel' />
        <CardPhoto src='https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw' />
        <User userName='Sandeep Pokhrel' userImage='https://randomuser.me/api/portraits/women/63.jpg' />

    </div>
}

export default Landing