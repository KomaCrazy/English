import styles from './display/display.module.css'
import DisplayHeader from './display/header'
import {upperLetter} from './generals'

import Tables from './tables'



export default async function Display({prams}){
    return (
        <div className={styles.display}>
            {
                <DisplayHeader prams={prams.title}></DisplayHeader>
            }
            {
                <Tables></Tables>
            }





         </div>
    )
}