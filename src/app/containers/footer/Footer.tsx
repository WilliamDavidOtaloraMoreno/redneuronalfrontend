import styles from "./Footer.module.css";
import logo from "../../../assets/image/1x/MovieLogo.png";
import logoFacebook from "../../../assets/image/1x/logofacebook_2.svg";
import logoInsta from "../../../assets/image/1x/logoinstagram.svg";


export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`row ${styles.footer_containner}`}>
          <div className={`col-4`}>
            <div className={`row ${styles.footer_brands}`}>
              <div className={`col-4`}>
                <img src={logo} alt="MovieLogo.png" />
              </div>
              
            </div>
          </div>
          <div className={`col-4 ${styles.footer_div_contact}`}>
            <ul>
              
              <li>© Copyright 2023 MovieFlow</li>
            </ul>
          </div>
          <div className={`col-4 ${styles.footer_logo_redes}`}>
            <img
              src={logoFacebook}
              alt="logoredes.png"
              height={100}
              width={100}
            />
            <img src={logoInsta} alt="logoredes.png" height={100} width={100} />
            
            
          </div>
        </div>
      </footer>
    </>
  );
};
