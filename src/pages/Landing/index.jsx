import './styles.css'
import FeedCard from "../../components/organisms/FeedCard"
import PrimaryButton from '../../components/atoms/Button/Primary'
import InputText from '../../components/atoms/Form/InputText'
import { useState } from 'react'
import InputFile from '../../components/atoms/Form/InputFile'


const Landing = () => {

    return <div
    >

        <PrimaryButton text='upload' />
        <InputFile />

<div
    className='feed-container'
>
<FeedCard 
            cardPhoto='https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw'
            cardTitle='2132: Guardian'
            userImage='https://randomuser.me/api/portraits/women/63.jpg'
            userName='Constance Evans'
            likeCount={54}
            commentCount={22}
        />
        <FeedCard 
            cardPhoto='https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM'
            cardTitle='Copper Heart'
            userImage='https://randomuser.me/api/portraits/women/58.jpg'
            userName='Gina Stevens'
            likeCount={33}
            commentCount={3}
        />
        <FeedCard 
            cardPhoto='https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw'
            cardTitle='2132: Guardian'
            userImage='https://randomuser.me/api/portraits/women/63.jpg'
            userName='Constance Evans'
            likeCount={54}
            commentCount={22}
        />
</div>

       
    </div>
}

export default Landing