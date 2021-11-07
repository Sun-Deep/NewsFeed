import { useState } from 'react'

import './styles.css'
import FeedCard from "../../components/organisms/FeedCard"
import PrimaryButton from '../../components/atoms/Button/Primary'
import InputText from '../../components/atoms/Form/InputText'
import ToggleOn from '../../components/atoms/Toggle/ToggleOn'
import InputFile from '../../components/atoms/Form/InputFile'
import ToggleOff from '../../components/atoms/Toggle/ToggleOff'


const Landing = () => {

    const [isFile, setIsFile] = useState(false)
    const [apiEndpoint, setApiEndpoint] = useState('')
    const [fileName, setFileName] = useState('')

    const handleToggle = () => {
        setIsFile(!isFile)
    }

    const handleApiEndpoint = (e) => {
        setApiEndpoint(e.target.value)
    }

    const handleFileName = (e) => {
        setFileName(e.target.value)
    }

    const handleSearch = () => {
        console.log(apiEndpoint)
    }

    const handleFile = () => {
        console.log(fileName)
    }

    return <div
        className='container'
    >
       <div
            className='api-section'
       >

           {
               isFile ?  <div
               className='inputfield'
              >
   
                   <InputText 
                        placeholder='Please enter api endpoint'
                        apiEndpoint={apiEndpoint}
                        handleApiEndpoint={handleApiEndpoint}
                    />
                   <PrimaryButton 
                        text='search'
                        handleAction={handleSearch}
                    />
              </div>
              :  <div
              className='inputfield'
             >
  
                <InputFile
                    fileName={fileName}
                    handleFile={handleFileName}
                />
                  <PrimaryButton 
                    text='upload'
                    handleAction={handleFile}
                />
             </div>
           }
          

           <div
            onClick={handleToggle}
           >
               {
                   isFile ? <ToggleOn /> : <ToggleOff />
               }
               
           </div>
       </div>
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