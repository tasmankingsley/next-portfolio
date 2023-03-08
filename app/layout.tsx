import './styles/globals.css'
import styles from './styles/layout.module.css'

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.header}>
                    <span className={styles.title}>Tasman Kingsley</span>
                    <span className={styles.mode}>☯</span>
                </div>

                <span className={styles.burg}>
                    =
                </span>
                {children}
            </body>
        </html>
    );
}