import dataValues from '../data';
import Timeline from './Timeline';

export default function CareerAndEducation() {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <Timeline data={dataValues.dummyData} />
    </section>
  );
}
