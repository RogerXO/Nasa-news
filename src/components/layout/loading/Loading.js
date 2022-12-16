import styles from "./Loading.module.css"

import spinner from "../../../img/spinner.svg"

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img src={spinner} alt="loading" className={styles.loader} />
        </div>
    )
}

export default Loading