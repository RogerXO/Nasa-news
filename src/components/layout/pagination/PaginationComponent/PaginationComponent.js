import styles from "../Pagination.module.css"

function PaginationComponent({ pages, setCurrentPage, currentPage }) {

    return (
        <div className={styles.pagination_div}>
            {Array.from(Array(pages), (article, index) => {
                return <button
                    key={index}
                    style={index === currentPage ? { backgroundColor: "rgba(252, 62, 33)" } : null}
                    className={styles.pagination_button}
                    value={index}
                    onClick={
                        (e) => setCurrentPage(Number(e.target.value))
                    }>{index + 1}</button>
            })}
        </div>
    )
}

export default PaginationComponent;