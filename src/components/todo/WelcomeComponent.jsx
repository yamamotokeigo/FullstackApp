import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'

function WelcomeComponent() {

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log('called')

        retrieveHelloWorldBean()
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))

        retrieveHelloWorldPathVariable('yamamoto')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return(
    <div className="WelcomeComponent">
         <h1>Welcome {username}</h1>  
            <div>
                Manage your todo - <Link to='/todo'>Go here</Link>
            </div>     
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World</button>
            </div> 
            <div className="text-info">{message}</div>
    </div>
    )
}
export default WelcomeComponent