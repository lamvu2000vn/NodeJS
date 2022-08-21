// Style
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles['loading']}>
            <div className={styles['loading__spinner']} />
        </div>
    )
}

export default Loading