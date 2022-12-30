import gitIcon from '../images/Git_format.png';
import dockerIcon from '../images/Docker_icon.png';
import pythonIcon from '../images/Python_icon.png';
import tableauIcon from '../images/Tableau_icon.png';
import tensorFlowIcon from '../images/TensorFlow_icon.png';
import reactIcon from '../images/React_icon.png';

export default function Skills() {
  return (
    // TODO: https://codesandbox.io/s/basic-demo-forked-yup2o?file=/src/App.js
    // wordcloud implementation
    <section id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <img className="skills-item" src={gitIcon} alt="Git" />
        <img className="skills-item" src={dockerIcon} alt="Docker" />
        <img className="skills-item" src={pythonIcon} alt="Python" />
        <img className="skills-item" src={tableauIcon} alt="Tableau" />
        <img className="skills-item" src={tensorFlowIcon} alt="TensorFlow" />
        <img className="skills-item" src={reactIcon} alt="Reactjs" />
      </div>
    </section>
  );
}
