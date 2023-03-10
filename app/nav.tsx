import waves from 'public/images/waves.jpeg'
import styles from './styles/layout.module.css'

export default function nav() {
    return (
        <>
            <div className={styles.nav} style={{backgroundImage: `url(${waves.src})`}}>
                <div className={styles.navBtn}><span className={styles.btnTxt}>Home</span></div>
                <div className={styles.navBtn} ><span className={styles.btnTxt}>Web app projects</span></div>
                <div className={styles.navBtn} ><span className={styles.btnTxt}>Website projects</span></div>
                <div className={styles.navBtn} ><span className={styles.btnTxt}>Design portfolio</span></div>
                <div className={styles.navBtn} ><span className={styles.btnTxt}>About</span></div>
                <div className={styles.close} style={{backgroundColor: '#eee'}}></div>
            </div>
        </>
    )
}