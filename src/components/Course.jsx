import styles from "../css/course.module.css";
import { IoCheckmarkDone } from "react-icons/io5";
function Course() {
  return (
    <div className={styles.course}>
      <div className={styles.title}>
        İngilizce Kursumuzun Öne Çıkan Özellikleri
      </div>

      <div className={styles.content}>
        <div className={styles.subtitle}>
          Size en uygun kursu seçin, hedeflerinize ulaşın!
        </div>
        <div className={styles.madde}>
          <IoCheckmarkDone className="check" />
          <span className={styles.madde_title}>Konuşma Pratiği : </span>
          <span className={styles.madde_content}>
            Canlı derslerde İngilizce konuşma pratiği yapma imkânı.
          </span>
        </div>
        <div className={styles.madde}>
          <IoCheckmarkDone className="check" />
          <span className={styles.madde_title}>Dil Seviyesi Testi : </span>
          <span className={styles.madde_content}>
            Seviyenizi belirlemek için ücretsiz test.
          </span>
        </div>
        <div className={styles.madde}>
          <IoCheckmarkDone className="check" />
          <span className={styles.madde_title}>Dijital Sertifika : </span>
          <span className={styles.madde_content}>
            Kurs sonunda dijital başarı sertifikası.
          </span>
        </div>
        <div className={styles.madde}>
          <IoCheckmarkDone className="check" />
          <span className={styles.madde_title}>Mobil Uyumluluk : </span>
          <span className={styles.madde_content}>
            Telefon, tablet veya bilgisayar üzerinden erişim.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Course;
