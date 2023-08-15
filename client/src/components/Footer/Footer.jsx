import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.footerinfo}>
        <div className={styles.divlogo}></div>

        <div className={styles.footercontacto}>
          <section>
            <h4>Ubicación</h4>
            <p>Del mundo</p>
          </section>
          <section>
            <h4>Contacto</h4>
            <p>Huellitasdemaor@gmail.com</p>
            <p>16572345</p>
          </section>
        </div>
      </div>

      <div className={styles.footerredes}>
        <div className={styles.copy}>©2023, All right reserved.</div>
        <div className={styles.redes}>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-x-twitter"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
