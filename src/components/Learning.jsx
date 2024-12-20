import styles from "../css/learning.module.css";
import { FaWhatsapp } from "react-icons/fa";
function Learning() {
  return (
    <div className={styles.learning_container}>
      <div className={styles.learning}>
        <h1 className={styles.learning_title}>
          <span className={styles.pre_title}>Dünyanın Kapılarını Açın:</span>
          <span className={styles.sub_title}>
            Online İngilizce Kursumuzla Tanışın!
          </span>
        </h1>
        <p className={styles.learning_content}>
          Kendi hızınızda, uzman eğitmenlerle ve interaktif yöntemlerle
          İngilizce öğrenin. Sınırları kaldırın, hedeflerinize ulaşın!
        </p>
        <button className={styles.learning_button}>
          <FaWhatsapp className={styles.whatsapp} />
          Hemen Başla
        </button>
      </div>
    </div>
  );
}

export default Learning;
