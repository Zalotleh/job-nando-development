import { useContext, useEffect } from 'react'
import { SavedResumeContext } from '@/context/SavedResumeContext'
import SavedPersonalDetailsForm from '../SavedCvEditor/SavedPersonalDetailsForm'
import SavedObjectiveForm from '../SavedCvEditor/SavedObjectiveForm'
import SavedCertificatesForm from '../SavedCvEditor/SavedCertificatesForm'
import SavedEducationsForm from '../SavedCvEditor/SavedEducationsForm'
import SavedLanguagesForm from '../SavedCvEditor/SavedLanguagesForm'
import SavedLinksForm from '../SavedCvEditor/SavedLinksForm'
import SavedProjectsForm from '../SavedCvEditor/SavedProjectsForm'
import SavedSkillsForm from '../SavedCvEditor/SavedSkillsForm'
import SavedSummaryForm from '../SavedCvEditor/SavedSummaryForm'
import SavedVolunteersForm from '../SavedCvEditor/SavedVolunteersForm'
import SavedWorkExperienceForm from '../SavedCvEditor/SavedWorkExperienceForm'


const SavedCvEditorPage = ({ cvData, cvId }) => {
  const {setSavedCvId} = useContext(SavedResumeContext)

  useEffect(() => {
    setSavedCvId(cvId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
        <div >
          <SavedPersonalDetailsForm
            personalDetails={cvData.CvData.personalDetails}
            InitialValues={cvData.CvData.personalDetails}
            />
            <SavedObjectiveForm
            objective={cvData.CvData.objective}
            InitialValues={cvData.CvData.objective}
            />
            
            <SavedSummaryForm
            summary={cvData.CvData.summary}
            InitialValues={cvData.CvData.summary}
            />
            <SavedWorkExperienceForm
            workExperiences={cvData.CvData.workExperiences}
            InitialValues={cvData.CvData.workExperiences}
            />

            <SavedEducationsForm
            educations={cvData.CvData.educations}
            InitialValues={cvData.CvData.educations}
            />

            <SavedCertificatesForm
            certificates={cvData.CvData.certificates}
            InitialValues={cvData.CvData.certificates}
            />
            
            <SavedSkillsForm
            skills={cvData.CvData.skills}
            InitialValues={cvData.CvData.skills}
            />

            <SavedProjectsForm
            projects={cvData.CvData.projects}
            InitialValues={cvData.CvData.projects}
            />
            
            <SavedVolunteersForm
            volunteers={cvData.CvData.volunteers}
            InitialValues={cvData.CvData.volunteers}
            />
            <SavedLanguagesForm
            languages={cvData.CvData.languages}
            InitialValues={cvData.CvData.languages}
            />

            <SavedLinksForm
            links={cvData.CvData.links}
            InitialValues={cvData.CvData.links}
            />
        </div>
    </>
  )
}

export default SavedCvEditorPage
