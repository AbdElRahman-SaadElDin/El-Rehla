import React from "react";
import styles from "./update.module.css";
import iphone from "../imgs/iPhone.png"
import notification from "../imgs/notification.png"
function Update() {
  return (
    <div class={styles.container}>
      <div class={`${styles.sec1} ${styles.grid_item}`}>
        <p> We sent you message with verification code. Check you mobile</p>
      </div>
      <div class={`${styles.sec2} ${styles.grid_item}`}>
        <img src={iphone} alt="Error" height="80px" />
      </div>
      <div class={`${styles.sec3} ${styles.grid_item}`}>
        <input
          className={styles.input_verfication}
          placeholder="Enter The Code"
        ></input>
        <button className={styles.button_verfication}>Create Account</button>
      </div>
      <div class={`${styles.sec4} ${styles.grid_item}`}>
        <img src={notification} alt="Error" />
      </div>
    </div>
  );
}

export default Update;
