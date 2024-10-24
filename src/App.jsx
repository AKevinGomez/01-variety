import { TwitterFollowCard } from "./twiiter-follow-card";
import './index.css'

export function App () {
    return(
        <>
            <TwitterFollowCard username='lapidelapu' name='Carepinga Gonzales'/>
            <TwitterFollowCard username={'lapidelapu'} name={'Carepinga Gonzales' }/>
            <TwitterFollowCard username={'lapidelapu'} name={'Carepinga Gonzales' }/>
            <TwitterFollowCard username={'lapidelapu'} name={'Carepinga Gonzales' }/>
            <TwitterFollowCard username={'lapidelapu'} name={'Carepinga Gonzales' }/>
        </>
    )
}