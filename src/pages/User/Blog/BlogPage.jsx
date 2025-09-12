// src/pages/BlogPage.jsx
import React from "react";
import HeaderBlog from "./HeaderBlog";
import { NavLink } from "react-router-dom";
import styles from "./Blog.module.scss"; // Import your styles for BlogPage
import FooterBlog from "./FooterBlog"; // Import the Footer component
import {
  about,
  avatar_blog,
  image_blog,
  image1_blog,
  image2_blog,
  advertisement,
  advertisement1,
  advertisement2,
  advertisement3,
  advertisement4,
  advertisement5,
  advertisement6,
  blogPhu,
} from "../../../assets/images/img";
const BlogPage = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <HeaderBlog />

      {/* Main */}
      <main>
        {/* About */}
        <div className={styles["about"]}>
          <div className={styles["about-image"]}>
            <img src={about} alt="" />
          </div>

          <div className={styles["about-content"]}>
            <div className={styles["list-item"]}>
              <ul>
                <li className={styles["item"]}>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li className={styles["item"]}>
                  <NavLink to="/lifestyle">Lifestyle</NavLink>
                </li>
              </ul>
            </div>

            <div className={styles["holiday-list"]}>
              <ul>
                <li className={styles["item"]}>
                  <NavLink to="/holiday">Holiday</NavLink>
                </li>
                <li className={styles["item"]}>
                  <NavLink to="/getaway-breaks">Getaway breaks</NavLink>
                </li>
                <li className={styles["item"]}>
                  <NavLink to="/experiences">Experiences</NavLink>
                </li>
              </ul>
            </div>

            <h1
              className={styles["heading"]}
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              A romantic break in Paris for Valentine's Day
            </h1>
            <p className={styles["desc"]}>16 min reading time</p>
            <p className={styles["desc"]}>
              Choose the language: English / Español
            </p>
          </div>
        </div>

        {/* Author */}
        <div className={styles["author"]}>
          <div className={styles["author__body"]}>
            <div className={styles["author__container"]}>
              <div className={styles["author__container--img"]}>
                <img src={avatar_blog} alt="Tác giả" />
              </div>
              <div className={styles["author-info"]}>
                <h1 className={styles["title"]}>By Sara García</h1>
                <p className={styles["desc"]}>
                  Journalist and in love with trips full of new experiences.
                  Writing and traveling merge to allow him the privilege of
                  telling about what he discovers in every corner of the world
                  and sharing them with anyone who wants to follow in his
                  footsteps.
                </p>
              </div>
            </div>

            <div className={styles["author__content"]}>
              <h1 className={styles["title"]}>
                Get ready for one of the most romantic trips with your partner
                to the city of love. Valentine's Day in Paris is the perfect
                excuse to spend a weekend connecting with the person you love.
                We want to make the choice easy for you to enjoy an
                unforgettable getaway break.
              </h1>
              <p className={styles["desc"]}>
                February 14 is the ideal reason to do the thing you like best
                with your partner: travel. Walk the streets of the city
                accompanied by light hand in hand with the person for whom you
                just have to look into their eyes and bring in the whole world.
                In honor of the cleric Valentin who officiated the secret
                weddings of young lovers and for whom this day was named, make
                it count and celebrate this date in style.
              </p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className={styles["image__list"]}>
          <div className={styles["image__list--item"]}>
            <img src={image_blog} alt="" />
          </div>
          <div className={styles["image__list--item"]}>
            <img src={image1_blog} alt="" />
          </div>
          <div className={styles["image__list--item"]}>
            <img src={image2_blog} alt="" />
          </div>
        </div>

        {/* advertisement */}
        <div className={styles["advertisement"]}>
          {/* item 1 */}
          <div className={styles["advertisement__item"]}>
            <h1 className={styles["advertisement__title"]}>
              Idyllic stroll on the River Seine for couples
            </h1>
            <p className={styles["advertisement__desc"]}>
              The perfect occasion for you to visit the banks of the Seine to
              celebrate Valentine's Day aboard one of the{" "}
              <strong className={styles["advertisement__highlight"]}>
                Parisian Bateux
              </strong>
              . You and your partner can visit during the day and get a
              different view of the city and even the sunset. There is also the
              option of booking a special Valentine's Day dinner on the
              riverside to see Paris all lit up and accompanied by the best
              soundtrack to celebrate your moment. Although we all know this
              romantic experience, it is still one of the favorites for any
              couple traveling in love with the city and must not be missed on
              the most passionate day of the year.
            </p>
            <div className={styles["advertisement__img"]}>
              <img src={advertisement} alt="Eiffel Tower at night" />
            </div>
          </div>

          {/* item 2 */}
          <div className={styles["advertisement__item"]}>
            <h1 className={styles["advertisement__title"]}>
              Iconic settings for spending Valentine's Day in Paris
            </h1>
            <p className={styles["advertisement__desc"]}>
              <span>
                The Parisian city is also home to a huge collection of
                unforgettable places for enjoying the best romantic getaways on
                Valentine's Day. The Eiffel Tower, the Bridge of the Arts and
                Montmartre are some of the best known and most ideal attractions
                for this calendar date.
              </span>
              <br />
              <span>
                The first option we give you is to book a photo shoot around the{" "}
                <strong className={styles["advertisement__highlight"]}>
                  Eiffel Tower
                </strong>
                . An unforgettable memory of your visit to the city of love.
                When you finish, you can take the opportunity to enjoy a
                romantic picnic in the
                <strong className={styles["advertisement__highlight"]}>
                  {" "}
                  Campo de Mars gardens
                </strong>{" "}
                if the day is nice. You will have a perfect date in the heart of
                Paris and enjoy very special moments.
              </span>
            </p>
            <div className={styles["advertisement__img"]}>
              <img src={advertisement1} alt="Eiffel Tower at night" />
            </div>
          </div>

          {/* item 3 */}
          <div className={styles["advertisement__item"]}>
            <p className={styles["advertisement__desc"]}>
              Another good choice during the Christmas period would be to visit
              the{" "}
              <strong className={styles["advertisement__highlight"]}>
                Arc de Triomphe
              </strong>
              . An awesome view if the sky is clear over the huge city. It
              provides a 360° panoramic view and we recommend you get up first
              thing in the morning. Admire the sunset after shopping on the
              Champs-Élysées just to be the icing on the cake for a day full of
              unlimited love on Valentine's Day.
            </p>
            <div className={styles["advertisement__img"]}>
              <img src={advertisement2} alt="Eiffel Tower at night" />
            </div>
          </div>

          {/* item 4 */}
          <div className={styles["advertisement__item"]}>
            <h1 className={styles["advertisement__title"]}>
              Strolls through the capital of love on Valentine's Day
            </h1>
            <p className={styles["advertisement__desc"]}>
              If we’re talking about walks, the Parisian gardens are the perfect
              and most charming place to show off your romance.
              <strong>The Luxembourg</strong> <strong>Garden</strong> has an
              elegant design and a beautiful pond surrounded by flowers,
              sculptures and fountains, as well as iconic metal chairs where
              couples sit and chat. <strong>The Tuileries Gardens</strong>, next
              to the Louvre and Place de la Concorde,are also charming . A
              perfect combination of history and beauty.
            </p>
            <div className={styles["advertisement__img"]}>
              <img src={advertisement3} alt="Eiffel Tower at night" />
            </div>
          </div>

          {/* item 5 */}
          <div className={styles["advertisement__item"]}>
            <p className={styles["advertisement__desc"]}>
              The covered passages in Paris have an undeniable romantic air.
              They are roads through buildings surrounded by hotels, but with a
              unique flair. One of the most famous is the{" "}
              <strong>Passage des Panoramas</strong>, opened in 1871. It was the
              first city to have gas streetlights and even today it has a lot of
              vintage air, with numerous shops and cafés. Walking hand in hand
              is the most romantic and original thing you can do during your
              Valentine's Day getaway break. The Passage des Panoramas is
              located at 11 boulevard Montmartre. You can easily get here by
              metro at the Grands Boulevards station (lines 8 and 9).
            </p>
            <div className={styles["advertisement__img"]}>
              <img src={advertisement4} alt="Eiffel Tower at night" />
            </div>
          </div>

          {/* item 6 */}
          <div className={styles["advertisement__item"]}>
            <p className={styles["advertisement__desc"]}>
              The bridges that cross the Seine in the capital of love are a
              perfect setting for every couple in love. Taking a snapshot from
              the famous <strong>Bridge of the Arts</strong> could be one of the
              most special moments of your day. A pedestrian bridge connecting
              the Institut de France with the courtyard of the Louvre. It is
              based on the tradition of using padlocks in which couples used to
              leave one and swear eternal love. It is currently no longer
              allowed, but it is still a symbol of love in Paris and a must for
              a walk around the city on February 14.
            </p>
            <div className={styles["advertisement__img"]}>
              <img src={advertisement5} alt="Eiffel Tower at night" />
            </div>
          </div>
        </div>

        {/* Container section */}
        <div className={styles["advertisement"]}>
          <div className={styles["advertisement__container"]}>
            <div className={styles["advertisement__container--img"]}>
              <img src={blogPhu} alt="" />
            </div>
            <div className={styles["advertisement__content"]}>
              <h1 className={styles["advertisement__title"]}>
                Discover our hotels in Paris
              </h1>
              <span className={styles["advertisement__desc"]}>
                Choose your hotel and enjoy the benefits of booking on melia.com
              </span>
              <button className={styles["advertisement__btn"]}>See More</button>
            </div>
          </div>
        </div>

        {/* item 7 */}
        <div className={styles["advertisement__item"]}>
          <div className={styles["advertisement__img"]}>
            <img src={advertisement6} alt="Eiffel Tower at night" />
          </div>
        </div>

        {/* event */}
        <div className={styles["advertisement"]}>
          <div className={styles["advertisement__event"]}>
            <div className={styles["advertisement__event--left"]}>
              <span className={styles["advertisement__desc"]}>
                Meliá hotels near you
              </span>
              <h1 className={styles["advertisement__title"]}>
                Villa Marquis Meliá Collection
              </h1>
              <h1 className={styles["advertisement__title"]}>
                Maison Colbert Meliá Collection
              </h1>
              <h1 className={styles["advertisement__title"]}>Experiences</h1>
            </div>
            <div className={styles["advertisement__event--right"]}>
              <span className={styles["advertisement__desc"]}>
                Meliá tags in this post
              </span>
              <h1 className={styles["advertisement__title"]}>Holidays</h1>
              <h1 className={styles["advertisement__title"]}>Getaway breaks</h1>
              <h1 className={styles["advertisement__title"]}>Experiences</h1>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <FooterBlog />
    </div>
  );
};

export default BlogPage;
