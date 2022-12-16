import styles from "./Container.module.css"

function Container(props) {
    
    return (
        <div className={styles[props.layout]}>
            {props.children}
        </div>
    )
}

export default Container;