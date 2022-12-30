import dataValues from '../data';

export default function About() {
  return (

    <section id="about">
      <h1>
        About
        <br />
        Hi, i&apos;m Rahul Puthukkot
      </h1>
      <h4>
        {dataValues.aboutMe}

      </h4>
    </section>

  );
}
