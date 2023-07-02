import React from "react";
import styles from "./styles/PreLauch.module.css";
import imgBanner from "./pre-launch-page.png";
import icon1 from "./icon1.png";
import wallet from "./wallet.png";
import share from "./share.png";
import movie from "./movie.png";
import ticket from "./ticket.png";
import user from "./creator_mask.png";
export const Prelauch = () => {
  return (
    <div className={styles.pre_launch_container}>
      <div className={styles.pre_launch_details}>
        <div className={styles.pre_launch_text}>
          <h1>We are</h1>
          <h1>Coming Soon.</h1>
        </div>
        <div className={styles.pre_launch_points}>
          <div>
            <img src={wallet} alt="" height={"25px"} />
            <p>
              As an exclusive early bird member, you've just unlocked a
              thrilling Rs 100 credit!
            </p>
          </div>
          <div>
            <img src={share} alt="" height={"25px"} />
            <p>
              Share the excitement, unlock rewards! Invite loved ones and enjoy
              benefits!
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
            <img src={user} alt="" height={"25px"} />
            <p>
              Empower and support your favorite artists, making a significant
              impact on their creative journey.
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
