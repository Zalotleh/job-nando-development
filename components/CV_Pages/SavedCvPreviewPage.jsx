import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'

import SavedPersonalDetailsPreview from '../SavedCvPreviews/SavedPersonalDetailsPreview'
import SavedObjectivePreview from '../SavedCvPreviews/SavedObjectivePreview'
import SavedCertificatesPreview from '../SavedCvPreviews/SavedCertificatesPreview'
import SavedEducationsPreview from '../SavedCvPreviews/SavedEducationsPreview'
import SavedLanguagesPreview from '../SavedCvPreviews/SavedLanguagesPreview'
import SavedLinksPreview from '../SavedCvPreviews/SavedLinksPreview'
import SavedProjectsPreview from '../SavedCvPreviews/SavedProjectsPreview'
import SavedSkillsPreview from '../SavedCvPreviews/SavedSkillsPreview'
import SavedSummaryPreview from '../SavedCvPreviews/SavedSummaryPreview'
import SavedVolunteersPreview from '../SavedCvPreviews/SavedVolunteersPreview'
import SavedWorkExperiencePreview from '../SavedCvPreviews/SavedWorkExperiencePreview'

import styles from '../../styles/ResumePreview.module.css'

const SavedCvPreviewPage = ({cvTitle}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: cvTitle || 'Resume',
    onAfterPrint: () => alert("Print Successful!"),
});
  

  return (
    <>
    <div className='flex flex-row content-around gap-10 flex-wrap bg-slate-100 px-6 py-3'>
      <button
        type='button'
        onClick={handlePrint}
        className='flex flex-row content-center justify-center gap-3 px-5 py-5 w-max border border-b-gray-400 rounded-md text-white text-xl font-bold bg-cyan-500 hover:bg-cyan-900 hover:text-white '
        >
        Download in PDF
        <img src="/download.png" alt="download icon" className='w-6 ml-2' />
      </button>

      <button
        type='button'
        onClick={handlePrint}
        className='flex flex-row content-center justify-center gap-3 px-5 py-5 w-max border border-b-gray-400 rounded-md text-white text-xl font-bold bg-cyan-500 hover:bg-cyan-900 hover:text-white'
        >
          Print
          <img src="/printer.png" alt="printer icon" className='w-6 ml-2'/>
      </button>
    </div>
    


    <div>

      <section ref={componentRef} className={styles.saved_cv_preview_page}>
        <div className={styles.personal_details}>
        <SavedPersonalDetailsPreview/>
        </div>

        <div className={styles.objective_section}>
        <SavedObjectivePreview/>
        </div>

        <div className={styles.summary_section}>
        <SavedSummaryPreview/>
        </div>
        
        <div className={styles.work_experience_section}>         
        <SavedWorkExperiencePreview/>
        </div>
        
        <div className={styles.certificates_section}>
        <SavedCertificatesPreview/>
        </div>

        <div className={styles.educations_section}>
        <SavedEducationsPreview/>
        </div>

        <div className={styles.skills_section}>
        <SavedSkillsPreview/>
        </div>

        <div className={styles.links_section}>
        <SavedLinksPreview/>
        </div>

        <div className={styles.projects_section}>
        <SavedProjectsPreview/>
        </div>
        
        <div className={styles.volunteers_section}>
        <SavedVolunteersPreview/>
        </div>

        <div className={styles.languages_section}>
        <SavedLanguagesPreview/>
        </div>

      </section>
    </div>
    </>

  )
}

export default SavedCvPreviewPage
