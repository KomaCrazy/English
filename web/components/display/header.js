import style_header from './header.module.css'
import {upperLetter} from '../generals'



export default function Headers({prams}){
    return (
        <div className={style_header.main}>
            <div className={style_header.main_title}>
                <span className={style_header.title}>{upperLetter(prams)}</span>
            </div>
            {/* <div className={style_header.colume_2}>
                <span className={style_header.left}>EN</span>
                <span className={style_header.right}>TH</span>
            </div> */}
        </div>
    )
}