import styles from './NoticeArea.module.css'

function NoticeArea({totalScoops, limitReached, scoopLimit = 5}) {
    return (
        <>
            {totalScoops >= scoopLimit ? <h3 className={styles.limit}>Scoop limit reached</h3> : null}
            {limitReached ? <h3 className={styles.empty}>No flavors to show</h3> : null}
        </>
    )
}

export default NoticeArea