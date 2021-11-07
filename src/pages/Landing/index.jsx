import FeedCard from "../../components/organisms/FeedCard"


const Landing = () => {
    return <div>
        <FeedCard 
            cardPhoto='https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw'
            cardTitle='2132: Guardian'
            userImage='https://randomuser.me/api/portraits/women/63.jpg'
            userName='Constance Evans'
            likeCount={54}
            commentCount={22}
        />
    </div>
}

export default Landing