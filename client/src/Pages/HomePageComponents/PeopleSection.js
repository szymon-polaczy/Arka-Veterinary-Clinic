import React from "react";
import Styled from "styled-components";

const People = Styled.section`
  padding: 1rem;
  text-align: center;

  h2 {
    font-size: 2.5em;

    &::after {
			display: block;
			content: '';
			width: 10rem;
			height: 2px;
			background: #548493;
			transition: .15s transform ease-out;
      margin: .65rem auto 0 auto;
    }
  }

  article {
    margin-top: 5rem;

    img {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      object-fit: cover;
    }

    h3, h4 {
      margin: 0;
      padding: 0;
      font-size: 1.2rem;
      letter-spacing: .1rem;
      font-family: 'Barrio', cursive;
    }

    h3 {
      margin-top: .8rem;
      margin-bottom: .5rem;
    }

    p {
      line-height: 130%;
    }
  }
`;

const PeopleSection = () => {
  return (
    <People>
      <h2>Oto ludzie dbający o to co dla Ciebie <br/> Najważniejsze</h2>
      <section>
        <article>
          <img src="Images/people/doktorek.jpg" alt="Doktor"
            className="specjalnie-dla-doktorka-na-chwile" />
          <section>
            <h3>Doktorek</h3>
            <h4>Technik Weterynari</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan. Etiam interdum varius venenatis.
            </p>
          </section>
        </article>
        <article>
          <img src="Images/people/iza.jpg" alt="Iza" />
          <section>
            <h3>Iza</h3>
            <h4>Technik Weterynari</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan. Etiam interdum varius venenatis.
            </p>
          </section>
        </article>
        <article>
          <img src="Images/people/michalina.jpg" alt="Michalina" />
          <section>
            <h3>Michalina</h3>
            <h4>Technik Weterynari</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan. Etiam interdum varius venenatis.
            </p>
          </section>
        </article>
        <article>
          <img src="Images/people/julia.jpg" alt="Żaneta" />
          <section>
            <h3>Julia</h3>
            <h4>Technik Weterynari</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan. Etiam interdum varius venenatis.
            </p>
          </section>
        </article>
        <article>
          <img src="Images/people/krzysiu.jpg" alt="Krzysiek" />
          <section>
            <h3>Krzysiek</h3>
            <h4>Technik Weterynari</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan. Etiam interdum varius venenatis.
            </p>
          </section>
        </article>
        <article>
          <img src="Images/people/maria.jpg" alt="Maria" />
          <section>
            <h3>Maria</h3>
            <h4>Technik Weterynari</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus ipsum ut interdum malesuada. Donec tellus nibh,
              efficitur nec laoreet vel, tempor at libero. Maecenas congue nulla
              ec quam lacinia accumsan. Etiam interdum varius venenatis.
            </p>
          </section>
        </article>
      </section>
    </People>
  );
};

export default PeopleSection;
