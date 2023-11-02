import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmLogo from "../assets/acmLogo.png"


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h1> Welcome to HackRacer! </h1>
          {/* Replace the heading, and add a short paragraph about your website here! */
          <p> You can navigate to <i>Add sentence</i> button at the top to add a new sentence. </p>
          }
        </div>
      <div className={styles.image}>
        {/* Put the ACM logo here! */
        <Image src={acmLogo} height={200} width={200} alt='acmlogo'></Image>}
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
      </div>
    </div>
  )
}
