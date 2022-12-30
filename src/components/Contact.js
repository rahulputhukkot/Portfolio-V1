/* eslint-disable react/no-unescaped-entities */

import dataValues from '../data';

export default function Contact() {
  const emailId = `mailto${dataValues.email}`;
  return (
    <section id="contact">
      <h1>Get in touch!</h1>
      Hi, I'm Open to work. If you want to hire me please get in touch with me.
      Have a new project in mind? Let's collaborate and build something awesome.
      Let's turn that idea to an even greater product :)
      <a href={emailId} rel="noopener noreferrer" target="_blank">
        Say Hello
      </a>
    </section>
  );
}
