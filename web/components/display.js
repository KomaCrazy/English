import styles from './display/display.module.css'
import DisplayHeader from './display/header'
export default async function Display({prams}){
    // console.log(prams.title)

    return (
        <div className={styles.display}>
            {
                <DisplayHeader prams={prams.title}></DisplayHeader>
            }

            {/* <ul>
                {prams.map((val,i) => (
                    <li key={i}>
                    {val.en}
                    {val.th}
                    </li>
                ))}
            </ul> */}
            
         </div>
    )
}