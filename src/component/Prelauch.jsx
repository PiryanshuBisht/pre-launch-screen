import React from "react";
import styles from "./styles/PreLauch.module.css";
import imgBanner from "./pre-launch-page.png";
import icon1 from "./icon1.png";
import wallet from "./wallet.png";
import share from "./share.png";
import movie from "./movie.png";
import ticket from "./ticket.png";
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
            <img src={wallet} alt="" height={"25px"} />
            <p>
              Sign up early and get a 100 rupee credit! Be one of our early bird
              members.
            </p>
          </div>
          <div>
            <img src={share} alt="" height={"25px"} />
            <p>
              Share the excitement, unlock rewards! Invite loved ones, enjoy
              benefits.
            </p>
          </div>
          <div>
            <img src={movie} alt="" height={"25px"} />
            <p>
              Enjoy your favorite movies and shows without wasteful
              subscriptions.
            </p>
          </div>
          <div>
            <img src={icon1} alt="" height={"25px"} />
            <p>
              Escape subscription hassle. Stream hassle-free, commitment-free.
            </p>
          </div>
          <div>
            <img src={ticket} alt="" height={"25px"} />
            <p>
              Revolutionize your entertainment experience: Embrace
              pay-as-you-watch, unlocking maximum value!
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
