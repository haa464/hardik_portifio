import React from 'react';

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-box">
        <img src={item.image} alt={item.title} className="work__img" />
        <span className="work__category-tag">{item.category}</span>
      </div>

      <div className="work__content">
        <h3 className="work__title">{item.title}</h3>
        {item.subtitle && <p className="work__subtitle">{item.subtitle}</p>}

        <div className="part-cnt">
          {item.language && (
            <div className="part-1">
              <ul className="ul_lang">
                {item.language.map((lang, i) => (
                  <li className="li_lang" key={i}>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="part-2">
            <div className="work_link">
              {item.isOpen && item.gitlink && (
                <a
                  href={item.gitlink}
                  className="work__button work__button-secondary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Code <i className="bx bxl-github work__button-icon"></i>
                </a>
              )}
              {item.link && (
                <a
                  href={item.link}
                  className="work__button work__button-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;