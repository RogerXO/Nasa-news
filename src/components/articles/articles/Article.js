import styles from './Article.module.css'

import moment from "moment"

import { Link, useParams } from "react-router-dom"
import { useState, useEffect, useMemo, useContext } from 'react'

import { ArticlesContext } from '../../../contexts/ContextArticles'

import Container from '../../layout/container/Container'
import ArticleButton from '../../layout/ArticleButton/ArticleButton'
import Loading from "../../layout/loading/Loading"

function Article() {
    const { id } = useParams()

    const { provideArticles } = useContext(ArticlesContext)

    const [article, setArticle] = useState({})
    const [nextArticle, setNextArticle] = useState()
    const [prevArticle, setPrevArticle] = useState()
    const [visibleLoading, setVisibleLoading] = useState(true)

    const articles = provideArticles

    const currentArticleIndex = useMemo(() => {
        return articles.findIndex(x => x.id === article.id)
    }, [articles, article])

    useEffect(() => {
        setVisibleLoading(true)

        fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => setArticle(data))
            .finally(() => setVisibleLoading(false))
            .catch((err) => console.log(err))
    }, [id])

    useEffect(() => {
        const prevArticleIndex = currentArticleIndex - 1
        const nextArticleIndex = currentArticleIndex + 1

        setPrevArticle(articles[prevArticleIndex])
        setNextArticle(articles[nextArticleIndex])
    }, [currentArticleIndex, articles])

    return (
        <div>
            {!visibleLoading ? (
                <div className={styles.column}>
                    <Link to="/">
                        <img src="https://www.onlinepalette.com/wp-content/uploads/2021/07/NASA-logo.png" alt="Nasa logo" />
                    </Link>

                    <div className={styles.align}>
                        {prevArticle && (
                            <ArticleButton to={`/article/${prevArticle.id}`} text="Prev" />
                        )}
                        {!prevArticle && (
                            <ArticleButton text="Home" to="/" />
                        )}

                        <article className={styles.article_read}>
                            <Container layout="articles_read">
                                <div className={styles.div_img}>
                                    <img src={article.imageUrl} alt="article" />
                                </div>
                                <div className={styles.notice_data}>
                                    <span>
                                        <strong>updated at:</strong> {moment(article.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                                    </span>
                                    <h1>{article.title}</h1>
                                    <p>{article.summary}</p>
                                    <a href={article.url} target="_blank" rel="noreferrer">Click here to see the original news</a>
                                </div>
                            </Container>
                        </article>

                        {nextArticle && (
                            <ArticleButton to={`/article/${nextArticle.id}`} text="Next" />
                        )}
                        {!nextArticle && (
                            <ArticleButton text="Home" to="/" />
                        )}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Article