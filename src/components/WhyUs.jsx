import styles from "../css/whyus.module.css";
import whypic from "../img/whyus.png";
function WhyUs() {
  return (
    <div className={styles.whyus}>
      <div className={styles.container}>
        <div className={styles.title}>
          Neden Bizimle İngilizce Öğrenmelisiniz?
        </div>
        <img className={styles.whypic} src={whypic} alt="" />
        <div className={styles.content}>
          <div className={styles.madde}>
            <span className={styles.madde_title}> Uzman Eğitmenler: </span>
            <span className={styles.madde_content}>
              Deneyimli eğitmenler tarafından hazırlanan ders içerikleri.
            </span>
          </div>
          <div className={styles.madde}>
            <span className={styles.madde_title}>
              Kişiselleştirilmiş Eğitim:
            </span>
            <span className={styles.madde_content}>
              Size özel programlarla, ihtiyaçlarınıza uygun öğrenim.
            </span>
          </div>
          <div className={styles.madde}>
            <span className={styles.madde_title}> Esnek Ders Saatleri:</span>
            <span className={styles.madde_content}>
              Nerede ve ne zaman isterseniz öğrenme imkânı.
            </span>
          </div>
          <div className={styles.madde}>
            <span className={styles.madde_title}>İnteraktif Materyaller: </span>
            <span className={styles.madde_content}>
              Videolar, quizler ve pratik yapabileceğiniz araçlarla öğrenimi
              güçlendirin.
            </span>
          </div>
          <div className={styles.madde}>
            <span className={styles.madde_title}>Her Seviyeye Uygun: </span>
            <span className={styles.madde_content}>
              Başlangıçtan ileri seviyeye kadar tüm seviyeler için içerik.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
