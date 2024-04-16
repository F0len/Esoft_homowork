import { useState } from 'react'
import React from 'react'
import './App.css'
import { CompetenceList } from './components/competenceList';
import { Inputs } from './components/inputs';

const initialCompetencesData = [
  {
    id: 0,
    title: 'React',
    description: 'JavaScript-библиотека для разработки пользовательских интерфейсов',
    level: 50,
  },
  {
    id: 1,
    title: 'Node.js',
    description: 'JavaScript-среда выполнения, позволяющая запускать код на стороне сервера',
    level: 71,
  },
  {
    id: 2,
    title: 'HTML & CSS',
    description: 'Основы веб-разработки',
    level: 32,
  },
  {
    id: 3,
    title: 'Python',
    description: 'Мощный и простой в использовании язык программирования',
    level: 60,
  },
  {
    id: 4,
    title: 'Java',
    description: 'Объектно-ориентированный язык программирования',
    level: 75,
  },
  {
    id: 5,
    title: 'SQL',
    description: 'Язык структурированных запросов для работы с реляционными базами данных',
    level: 11,
  }
];

const deleteFilter = (setFilteredCompetences, setFilter) =>{
  setFilteredCompetences([]);
  setFilter('');
}

const handleDelete = (id,competencesData,setCompetencesData, filteredCompetences, setFilteredCompetences) => {
  const updatedCompetences = competencesData.filter(competence => competence.id !== id);
  setCompetencesData(updatedCompetences);
  const updatedFilterCompetences = filteredCompetences.filter(competence => competence.id !== id);
  setFilteredCompetences(updatedFilterCompetences);
};

const toggleCompetencesVisible = (setShowCompetences, showCompetences) => {
  setShowCompetences(!showCompetences);
};

const filterCompetences = (level, competencesData, setFilteredCompetences, setShowCompetences,setFilter) => {
  const filtered = competencesData.filter(competence => {
    return level === 'more' ? competence.level >= 50 : competence.level < 50;
  });
  setFilteredCompetences(filtered);
  setFilter(level);
  setShowCompetences(true);
};

const App = () => {
  const [showCompetences, setShowCompetences] = useState(false);
  const [filteredCompetences, setFilteredCompetences] = useState([]);
  const [filter, setFilter] = useState('');
  const [competencesData, setCompetencesData] = useState(initialCompetencesData);
  const [formData, setFormData] = useState({ title: '', description: '', level: '' });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'level') {
      if (value === '' ||/\d+/.test(value) &&!isNaN(value) && parseInt(value) >= 0 && parseInt(value) <= 100) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = () => {
    const newCompetence = {
      id: competencesData.length,
      title: formData.title,
      description: formData.description,
      level: parseInt(formData.level)
    };
    setCompetencesData((competencesData)=> ([...competencesData, newCompetence]));
    if (filter != '') {
      if (filter === 'more' && newCompetence.level >=50) setFilteredCompetences(()=> ([...filteredCompetences, newCompetence]));
      else if (filter === 'less' && newCompetence.level < 50) setFilteredCompetences(()=> ([...filteredCompetences, newCompetence]));
  }
    setFormData({ title: '', description: '', level: '' });
    console.log(competencesData);
  };

  
  return (
    <div className="app">
      <button className='main-button' onClick={()=>toggleCompetencesVisible(setShowCompetences, showCompetences)}>
        {showCompetences ? 'Скрыть компетенции' : 'Показать компетенции'}
      </button>
      <button className='main-button' onClick={() => filterCompetences('more', competencesData,setFilteredCompetences,setShowCompetences ,setFilter)}>
        Показать компетенции с уровнем изучения &ge; 50%</button>
      <button  className='main-button'onClick={() => filterCompetences('less', competencesData,setFilteredCompetences,setShowCompetences,setFilter)}>
        Показать компетенции с уровнем изучения &#60; 50%</button>
      <button  className='main-button'onClick={() => deleteFilter(setFilteredCompetences, setFilter)}>Сбросить фильтр</button>

      <Inputs formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

      {showCompetences && <CompetenceList competences={filteredCompetences.length > 0 ? filteredCompetences : competencesData}
       onDelete={handleDelete} competencesData={competencesData} setCompetencesData={setCompetencesData}
        filteredCompetences={filteredCompetences} setFilteredCompetences={setFilteredCompetences}/>}
    </div>
  );
};

export default App;
