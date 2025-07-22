import styles from "./Message.module.css"
import image from '../../assets/background.svg'
import image_mobile from '../../assets/background_mobile.svg'
import { useState, useEffect } from "react"

//--------- LOGO ----------
import logo from '../../assets/logo.svg'
import telegram from '../../assets/Vector_telegram.svg'
import instagram from '../../assets/Vector_instagram.svg'
import twitter from '../../assets/Vector_twitter.svg'
import linkdin from '../../assets/Vector_linkdin.svg'

function Message() {
  const [name, setName] = useState("[Customer's name]")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
  const handleResize = () => setScreenWidth(window.innerWidth);

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logo_container}>
            <img src={logo} alt="logo" />
            <div>Lahze Card</div>
          </div>
          <div className={styles.image}>
            <img src={screenWidth > 700 ? image : image_mobile} alt="image"/>
          </div>
          <div className={styles.context_container}>
            <div className={styles.context}>
            <div className={styles.header}>
              Dear {name}
            </div>
            <div>
             <p>Thanks for your request! It has been received and is currently under review by our team.</p>
             <p>You can track the status anytime by clicking the button below:</p>
            </div>
            <div className={styles.button}>
              Track My Order
            </div>
            <div className={styles.signature}>
             <p>We’ll follow up with you shortly.</p>
             <p>Best regards, The Lahze Card Team</p>
            </div>
          </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_divider}></div>
            <div className={styles.footer_logos}>
              <img src={twitter} alt="twitter's logo" />
              <img src={telegram} alt="telegram's logo" />
              <img src={linkdin} alt="linkdin's logo" />
              <img src={instagram} alt="instagram's logo" />
            </div>
          </div>
        </div>
    </div>  
  )
}

export default Message