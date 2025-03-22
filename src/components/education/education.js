import React from 'react'
import { institutions } from './constants';
import './education.scss'

function Education() {
  return (
    <div className="education-main-container">
      <div className="education-container">
        {institutions.map((item, index) => (
          <div key={index} className="education-card">
            <div className="course">{item.course}</div>
            <div className="degree">{item.degree}</div>
            <div className="grade">{item.grade}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
