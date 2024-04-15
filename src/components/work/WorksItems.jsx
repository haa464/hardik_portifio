import React from 'react'

const WorksItems = ({item}) => {
  return (
    <>
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img"  />
        <h3 className="work__title">{item.title}</h3>
        { item.isOpen ? (
          <div className="part-cnt">
            <div className="part-1">
              <ul className='ul_lang'>
                {item.language.map((lang, i) => (
                  <li className='li_lang' key={i}>{lang}</li>
                ))}
              </ul>
            </div>
            <div className="part-2">
              <div className="work_link">
                <a href={item.gitlink} className="work__button">
                    Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.link} className="work__button">
                    Live <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
          ) : (
            <div className="work_link">
              <a href={item.link} className="work__button">
                  Live <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
            </div>
          )
        }
    </div>
    </>
  )
}

export default WorksItems