import style from './tables.module.css'
import { upperLetter } from '../generals'

export default function Tables({prams}){

    console.log(prams)

    return <table className={style.main}>
        <tr>
            <th className={style.table_header_word}>EN</th>
            <th className={style.table_header_word} >TH</th>
            {/* <th className={style.table_header_edit}>EDIT</th> */}
        </tr>


        { 
            prams.map((val,i) => (
                <tr key={i}>
                    <td>{upperLetter(val.en)}</td>
                    <td>{val.th}</td>
                    {/* <td>{val.id}</td> */}

                </tr>
            ))
        }



    </table>
}