import dataValues from '../data';
import Timeline from './Timeline';

export default function CareerAndEducation() {
  return (
    <section id="careers">
      <h1>
        Careers and Education
      </h1>
      <Timeline data={dataValues.dummyData} />
    </section>
  );
}
