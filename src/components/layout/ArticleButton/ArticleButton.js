import styles from "./ArticleButton.module.css"

import { Link } from "react-router-dom";

function ArticleButton({ to, text }) {
    return (
        <Link to={to} className={styles.article_a}>
            <button className={styles.article_btn}>
                {text}
            </button>
        </Link>
    )
}

export default ArticleButton;