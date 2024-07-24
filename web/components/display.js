import styles from './display.module.css'

export default async function Display({prams}){
    return (
        <div className={styles.display}>
            <ul>
                {prams.map((val) => (
                    <li>
                    {val.en}
                    {val.th}
                    </li>
                ))}
            </ul>
            
         </div>
    )
}