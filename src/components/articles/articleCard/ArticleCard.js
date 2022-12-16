import styles from "./ArticleCard.module.css"

import { Link } from "react-router-dom"

function ArticleCard({ id, title, publishedAt, imageUrl }) {

    return (
        <Link to={`/article/${id}`} className={styles.article_card_a}>
            <article className={styles.article_listed} >
                    <img src={imageUrl} alt="Representation about notice content" />
                <div className= {styles.article_title }>
                    <h3>{title}</h3>    
                    <p>{publishedAt}</p>
                </div>
            </article >
        </Link>

    )
}

export default ArticleCard;