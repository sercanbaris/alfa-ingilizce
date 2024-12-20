import React from "react";
import styles from "../css/faqs.module.css";
function Faq() {
  return (
    <div className={styles.faqs}>
      <h1>Sıkça Sorulan Sorular (FAQ)</h1>
      <h2>“Aklınıza Takılan Sorulara Cevaplar”</h2>
      <div> • Hangi seviyede olduğumu nasıl bileceğim?</div>
      <div> • Derslere nasıl erişim sağlarım?</div>
      <div> • Sertifikamı nasıl alırım?</div>
    </div>
  );
}

export default Faq;
