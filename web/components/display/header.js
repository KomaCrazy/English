import style_header from './header.module.css'
import {upperLetter} from '../generals'

import Search from './search'




export default function Headers({prams}){
    return (
        <div className={style_header.main}>
            <div className={style_header.main_title}>
                <span className={style_header.title}>{upperLetter(prams)}</span>
            </div>
            <div className={style_header.tools}>
                <span></span>
                <span className={style_header.main_search}>
                    {<Search></Search>}
                </span>
            </div>
        <hr></hr>

        </div>
    )
}