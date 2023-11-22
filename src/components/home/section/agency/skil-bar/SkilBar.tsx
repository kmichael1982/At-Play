import React from 'react'

const SkillBar: React.FC<{
    title: string
    percent: number
}> = ({ title, percent }) => (

  <div className="skill-bar-single">
    <div className="skill-bar-title">
      <p className="primary-text">{title}</p>
    </div>
    <div className="skill-bar-wrapper" data-percent={`${percent}%`}>
      <div className="skill-bar">
        <div className="skill-bar-percent" style={{ width: `${percent}%` }}>
          <span className="percent-value">{`${percent}%`}</span>
        </div>
      </div>
    </div>
  </div>
)

export default SkillBar