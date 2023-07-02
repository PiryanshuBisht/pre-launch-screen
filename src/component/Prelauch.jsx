import React from "react";
import styles from "./styles/PreLauch.module.css";
import imgBanner from "./pre-launch-page.png";
import icon1 from "./icon1.png";
export const Prelauch = () => {
  return (
    <div className={styles.pre_launch_container}>
      <div className={styles.pre_launch_details}>
        <div className={styles.pre_launch_text}>
          <h1>We are</h1>
          <h1>Launching Soon.</h1>
        </div>
        <div className={styles.pre_launch_points}>
          <div>
            <img src={icon1} alt="" height={"25px"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sapiente architecto
            </p>
          </div>
          <div>
            <img src={icon1} alt="" height={"25px"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sapiente architecto
            </p>
          </div>
          <div>
            <img src={icon1} alt="" height={"25px"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sapiente architecto
            </p>
          </div>
          <div>
            <img src={icon1} alt="" height={"25px"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sapiente architecto
            </p>
          </div>
          <div>
            <img src={icon1} alt="" height={"25px"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sapiente architecto
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pre_launch_img}>
        <img src={imgBanner} />
      </div>
    </div>
  );
};


