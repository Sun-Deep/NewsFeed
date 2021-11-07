import { useState } from 'react'
import axios from 'axios'

import './styles.css'
import FeedCard from "../../components/organisms/FeedCard"
import PrimaryButton from '../../components/atoms/Button/Primary'
import InputText from '../../components/atoms/Form/InputText'
import ToggleOn from '../../components/atoms/Toggle/ToggleOn'
import InputFile from '../../components/atoms/Form/InputFile'
import ToggleOff from '../../components/atoms/Toggle/ToggleOff'
import Loading from '../../components/atoms/Loading'


const Landing = () => {

    const [isFile, setIsFile] = useState(false)
    const [apiEndpoint, setApiEndpoint] = useState('')
    const [fileName, setFileName] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleToggle = () => {
        setIsFile(!isFile)
    }

    const handleApiEndpoint = (e) => {
        setApiEndpoint(e.target.value)
    }

    const handleFileName = (e) => {
        setFileName(e.target.files[0])
    }

    const handleSearch = () => {
        setIsLoading(true)
        axios.get(apiEndpoint).then((res) => {
            console.log(res.data)
            if(res.data.length > 0){
                setData(res.data)
                setIsLoading(false)
            }
        }).catch((err) => {
            alert(err.response.data)
            setIsLoading(false)
        })
    }

    const handleFile = () => {
        setIsLoading(true)
        const fileReader = new FileReader()
        fileReader.readAsText(fileName, "UTF-8");
        fileReader.onload = e => {
            setData(JSON.parse(e.target.result));
        };
        setIsLoading(false)
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

            {
                isLoading ? <Loading />
                : data.length > 0 && data.map((info, idx) => (
                    <FeedCard 
                    key={idx}
                    cardTitle={info.post_title}
                    cardPhoto={info.post_image}
                    userImage={info.user_image}
                    userName={info.user_name}
                    likeCount={info.like_count}
                    commentCount={info.comment_count}
                />
                ))
            }
        </div>
    </div>
}

export default Landing