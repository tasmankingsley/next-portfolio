import styles from './about.module.css'
import profile from 'public/images/choco-profile.jpg'

export default function about() {
    return (
        <>
            <div className={styles.contentDiv}>
                <img className={styles.img} src={profile.src} alt=""></img>

                <div className={styles.card}>
                    <span className={styles.span} style={{paddingTop: "30px"}}>About me</span>

                    <p>Hello fellow being! My name is Tasman.
                        I am a Web Developer and Interaction Designer.
                        My journey of becoming a developer/designer has spanned a number of years, but i have really focused and been driven for the past 1-2 years.
                        My programming skills are mostly self-taught, although i have completed various programming and design subjects while pursuing a Masters of Interaction Design, and earlier doing a semester in Computer Science (prior to completing my Bachelor's in Biotechology).
                        Thank you for finding your way to my portfolio page. Be sure to hang around and take a look at my projects if you'd like.
                        I appreciate your time and curiosity.
                        You can contact me at <a href="mailto: tasman.wilcock@gmail.com" style={{color: "#78b2aa"}}>tasman.wilcock@gmail.com</a>
                    </p>

                    <span className={styles.span} style={{paddingTop: "30px"}}>About this website</span>

                    <p>This website is my portfolio of web apps, websites, and design projects.
                        Some notes on the features - for easier navigation:
                    </p>

                    <ul><span className={styles.span}>⦿</span> The web apps are all displayed within iframes, so you can interact with them without leaving the page.</ul>
                    <ul><span className={styles.span}>⦿</span> All of the web apps and websites will work on both desktop and mobile devices, so please feel free
                    to open anything in a new tab to view them in fullscreen, or view them on your device.</ul> 
                    <ul><span className={styles.span}>⦿</span> With some of the projects you will notice that the design is slightly different depending on the device, featuring a responsive css design.</ul>
                    <ul><span className={styles.span}>⦿</span> The design page allows you to click on the images to view them fullpage.</ul>
                    <ul><span className={styles.span}>⦿</span> There is a light/dark mode for your preference of theme, the toggle is located in the top right corner as the ☯︎ symbol.</ul>

                </div>
            </div>            
        </>
    )
}
