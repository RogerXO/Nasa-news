import styles from "../Pagination.module.css"

function PaginationSelect({ articlesPerPage, setArticlesPerPage }) {
    
    return (
        <div className={styles.select_div}>
            <span>Articles per page: </span>
            <select value={articlesPerPage} onChange={(e) => setArticlesPerPage(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    )
}

export default PaginationSelect