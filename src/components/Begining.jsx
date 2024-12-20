import styles from "../css/begining.module.css";
import logo from "../img/logo.png";
import onlineEducation from "../img/harikulade.png";

function Begining() {
  return (
    <div className={styles.begining}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.computer_container}>
          <img
            className={styles.computer_learning}
            src={onlineEducation}
            alt=""
          />
        </div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            İngilizce Öğrenmenin En Kolay ve Hızlı Yolu!{" "}
          </h1>
          <p className={styles.hero_content}>
            İngilizce öğrenmek hiç bu kadar erişilebilir ve eğlenceli olmamıştı.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Begining;
