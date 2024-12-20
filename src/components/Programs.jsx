import styles from "../css/programs.module.css";
import programPic from "../img/computer_learning.png";
function Programs() {
  return (
    <div className={styles.programs}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          “Size Uygun Bir İngilizce Programı Var!”
        </h1>
        <img className={styles.programPic} src={programPic} alt="" />
        <h1 className={styles.subtitle}>
          Her seviyeye ve ihtiyaca uygun kurslarımız:
        </h1>
        <div className={styles.madde}>
          <span className={styles.madde_title}>Genel İngilizce Kursu:</span>
          <span className={styles.madde_content}>
            Temel dil becerilerini geliştirin.
          </span>
        </div>
        <div className={styles.madde}>
          <span className={styles.madde_title}> İş İngilizcesi: </span>
          <span className={styles.madde_content}>
            Kariyerinizde fark yaratın.
          </span>
        </div>
        <div className={styles.madde}>
          <span className={styles.madde_title}>Sınav Hazırlık:</span>
          <span className={styles.madde_content}>
            TOEFL, IELTS gibi sınavlara hazırlanın.
          </span>
        </div>
        <div className={styles.madde}>
          <span className={styles.madde_title}> Çocuklar için İngilizce:</span>
          <span className={styles.madde_content}>
            Küçük yaşta dil öğrenimine destek.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Programs;
