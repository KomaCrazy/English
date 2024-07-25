import style_search from './search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'

import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";


export default function Search({}){
    return (
        <span className={style_search.main}> 
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#aeaeae'  className={style_search.icon_search}/>
            <input placeholder='Search' className={style_search.input_search}></input>
        </span>
    )
}