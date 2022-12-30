/* eslint-disable react/prop-types */
export default function Timeline(props) {
  const { data } = props;
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <>
          {index % 2 === 0 ? (
            <div className="timeline-component " key={item.date}>
              <div
                className={
                  index % 2 === 0
                    ? 'timeline-date timeline-date--right'
                    : 'timeline-date'
                }
              >
                {item.date}
              </div>
            </div>
          ) : (
            <div
              className="timeline-component timeline-component--bg"
              key={item.title}
            >
              <h2 className="timeline-title">{item.title}</h2>
              <p className="timeline-paragraph">{item.description}</p>
            </div>
          )}
          <div className="timeline-middle">
            <div className="timeline-point" />
            {index === data.length - 1 ? (
              <div className="timeline-point timeline-point-bottom" />
            ) : null}
          </div>
          {index % 2 === 0 ? (
            <div
              className="timeline-component timeline-component--bg"
              key={item.title}
            >
              <h2 className="timeline-title">{item.title}</h2>
              <p className="timeline-paragraph">{item.description}</p>
            </div>
          ) : (
            <div className="timeline-component" key={item.date}>
              <div
                className={
                  index % 2 === 0
                    ? 'timeline-date timeline-date--right'
                    : 'timeline-date'
                }
              >
                {item.date}
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
