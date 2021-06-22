import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from 'classnames'

type PropsType = {
    onPageChanged: (pageNumber:number ) => void
    currentPage:number
    totalItemsCount:number
    pageSize:number
    portionSize?:number
}

const Paginator: React.FC<PropsType> = ({onPageChanged,currentPage,totalItemsCount,pageSize, portionSize = 10}) => {

    let pageCount = Math.ceil(totalItemsCount/ pageSize)
    let pages =[]
    for(let i=1; i <= pageCount; i++ ){
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber  * portionSize

    return (
            <div>
                {portionNumber > 1 && <button  onClick={() => (setPortionNumber(portionNumber - 1))}>Prev  </button>}
                {
                    pages
                        .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                    return <span className={ cn({[styles.selectedPage] : currentPage=== p},styles.pageNumber )}
                                 onClick={() => {onPageChanged(p) }}
                    >{p}</span>
                })}
                {  portionCount > portionNumber && <button onClick={() => (setPortionNumber(portionNumber + 1))}> Next </button> }
            </div>

       )
}

export default Paginator