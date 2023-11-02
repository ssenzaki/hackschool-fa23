import styles from './Navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div id={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">HackRacer</Link>
            </div>
            <div className={styles.nav_buttons}>
                <Link href="/gamePage">Play Game</Link>
                <Link href="/history"> History </Link>
                {/* Link to the home page here! */
                <Link href="/">HackRacer</Link>}
            </div>

            <div className={styles.nav_buttons}>
            {/* Link to other pages here! */
            <><Link href="/add">Add Sentence</Link><Link href="/game">Play Game</Link><Link href="/history">History</Link></>
            }
             </div>

        </div>
    )
}

export default NavBar;