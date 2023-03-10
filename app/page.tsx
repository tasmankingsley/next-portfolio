import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/index.module.css'
import card_1 from 'public/images/apps.jpg'
import card_2 from 'public/images/giddy-grocery.jpg'
import card_3 from 'public/images/persona-collage.jpg'
import card_4 from 'public/images/waves.jpeg'

export default function index() {
  return (
    <>
      <Head>
        <title>Tasman Kingsley</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <div className={styles.outerGrid}>
          
          <div className={styles.intro}>
            <p className={styles.p}>Hello, Tasman here. This is my portfolio page. <br/>
                Please feel free to browse my projects if you like 😊
            </p>
          </div>

          <div className={styles.innerGrid}>
            <Link href="./" className={styles.img} style={{backgroundImage: `url(${card_1.src})`}}>
                <div className={styles.cardTxt}>
                  <span className={styles.span}>Web apps</span>
                </div>
            </Link>

            <Link href="./" className={styles.img} style={{backgroundImage: `url(${card_2.src})`}}>
              <div className={styles.cardTxt}>
                <span className={styles.span}>Websites</span>
              </div>
            </Link>

            <Link href="./" className={styles.img} style={{backgroundImage: `url(${card_3.src})`}}>
              <div className={styles.cardTxt}>
                <span className={styles.span}>Design porfolio</span>
              </div>
            </Link>

            <Link href="./about" className={styles.img} style={{backgroundImage: `url(${card_4.src})`}}>
              <div className={styles.cardTxt}>
                <span className={styles.span}>About</span>
              </div>
            </Link>

          </div>

        </div>

      </main>
    </>
  )
}
