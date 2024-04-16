import React from 'react'
import { CompetenceCard } from './competenceCard';
import './competenceList.css'
export const CompetenceList = ({ competences, onDelete, competencesData, setCompetencesData, filteredCompetences, setFilteredCompetences}) => {
    return (
      <div className="competence-list">
        {competences.map((competence) => (
          <CompetenceCard key={competence.id} competence={competence} onDelete={onDelete} 
          competencesData={competencesData} setCompetencesData={setCompetencesData}
           filteredCompetences={filteredCompetences} setFilteredCompetences={setFilteredCompetences}/>
        ))}
      </div>
    );
  };