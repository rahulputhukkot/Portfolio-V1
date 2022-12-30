/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
export default function ProjectTile(props) {
  const { imgSrc, alt, title, description, link } = props;
  // const { imgSrc, alt, title } = props;
  return (
    <div className="project-item-box">
      <div className="project-title-center">
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        <a className="project-link" href={link}>
          More details
        </a>
      </div>
      <img className="project-item" src={imgSrc} alt={alt} />
    </div>
  );
}
