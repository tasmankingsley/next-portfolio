import Link from 'next/link'
import Nav from './nav'
import './styles/globals.css'
import styles from './styles/layout.module.css'

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
            <Nav/>
                <div className={styles.header}>
                    <Link href="./">
                        <span className={styles.title}>Tasman Kingsley</span>
                    </Link>
                    
                    <span className={styles.mode}>☯</span>
                    <span className={styles.burg}>⤫</span>
                </div>


                {children}
            </body>
        </html>
    );
}