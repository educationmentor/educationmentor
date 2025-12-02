import React from 'react'
import studyInGermanyHeaderImg from '../../assets/images/germanyPage.png'
import { useEffect } from 'react';
const StudyInGermany = () => {
    
    useEffect(() => {
        const handler = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handler);
      
        return () => document.removeEventListener("contextmenu", handler);
      }, []);
  return (
    <div className='cursor-none pointer-events-none'>
      <img src={studyInGermanyHeaderImg} alt="Study in Germany" className='pointer-events-none select-none' />
    </div>
  )
}

export default StudyInGermany
