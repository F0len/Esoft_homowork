import React from 'react'
import './competenceCard.css'

export const CompetenceCard = ({ competence, onDelete , competencesData, setCompetencesData, filteredCompetences, setFilteredCompetences}) => {
    return (
      <div className="competence-card">
        <h3>{competence.title}</h3>
        <p>{competence.description}</p>
        <p>Уровень освоения: {competence.level}%</p>
        <button className='delete' onClick={() => onDelete(competence.id, competencesData,setCompetencesData, filteredCompetences, setFilteredCompetences)}>Удалить</button>
      </div>
    );
  };