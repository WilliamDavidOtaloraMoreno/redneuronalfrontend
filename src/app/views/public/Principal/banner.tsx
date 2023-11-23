import ReactPlayer from "react-player";
import banner from "../../../../assets/image/1x/bannerMovie.png";
import styles from "./Banner.module.css"

export const Banner = () => {
    
  return (
    <>
      <div>
      <div className={styles.particles_container}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particles_2}></div>
        <div className={styles.particles_2}></div>
        <div className={styles.particles_2}></div>
        <div className={styles.particles_3}></div>
        <div className={styles.particles_3}></div>
        <div className={styles.particles_3}></div>
        <div className={styles.particles_3}></div>
        <img src={banner} alt="bannerMovie.png" width={"100%"} height={"100%"}/>
    </div>
      </div>
    </>
  );
};
