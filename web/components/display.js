import styles from './display/display.module.css'
import DisplayHeader from './display/header'
import Tables from './display/tables'

import {upperLetter} from './generals'


export default async function Display({prams}){
    return (
        <div className={styles.display}>
            {
                <DisplayHeader prams={prams.title}></DisplayHeader>                
            }
            
            {
                <Tables prams={prams.data}></Tables>
            }
            

         </div>
    )
}