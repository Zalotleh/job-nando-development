import { ResumeProvider } from '@/context/ResumeContext'
import PersonalDetailsForm from '../components/CV_Builder/PersonalDetailsform'
import PersonalDetailsPreview from '../components/CV_Previews/PersonalDetailsPreview'
import WorkExperienceForm from '../components/CV_Builder/WorkExperienceForm'
import WorkExperiencePreview from '../components/CV_Previews/WorkExperiencePreview'
import CertificatesForm from '@/components/CV_Builder/CertificatesForm'
import CertificatesPreview from '@/components/CV_Previews/CertificatesPreview'
import EducationsForm from '@/components/CV_Builder/EducationsForm'
import EducationsPreview from '@/components/CV_Previews/EducationsPreview'
import ObjectiveForm from '@/components/CV_Builder/ObjectiveForm'
import ObjectivePreview from '@/components/CV_Previews/ObjectivePreview'
import SummaryForm from '@/components/CV_Builder/SummaryForm'
import SummaryPreview from '@/components/CV_Previews/SummaryPreview'
import SkillsForm from '@/components/CV_Builder/SkillsForm'
import SkillsPreview from '@/components/CV_Previews/SkillsPreview'
import LinksForm from '@/components/CV_Builder/LinksForm'
import LinksPreview from '@/components/CV_Previews/LinksPreview'
import ProjectsForm from '@/components/CV_Builder/ProjectsForm'
import ProjectsPreview from '@/components/CV_Previews/ProjectsPreview'
import VolunteersForm from '@/components/CV_Builder/VolunteersForm'
import VolunteersPreview from '@/components/CV_Previews/VolunteersPreview'
import LanguageForm from '@/components/CV_Builder/LanguagesForm'
import LanguagesPreview from '@/components/CV_Previews/LanguagesPreview'
import CvSaveButton from '@/components/CV_Buttons/CvSaveButton'
import Layout from '@/components/Layout'
import styles from '../styles/ResumePreview.module.css'


export default function CreateCVPage() {
  return (
    <div>
      <Layout
        metaTitle={"Create and Save your Resume"}
        pageTitle={"Create Resume"}
        notificationText={
          <>
          <p>
            *Useful Tips:<n />
            - Use the left resume builder to fill in your resume information<n />
            - The right section is for real time resume preview.<n />
            - Use the "AI Magic" button to tune and improve your content, the AI-powered model will provide you an improved text specifically for that resume section text.<n />
            - You can create your own resume Summary and use the Ai-powered model to tune and improve its content Or you can auto generate your resume summary after finishing filling your resume information.<n />
            - If you dont want a section to be in your resume, just leave the section empty and if necessary click on "Delete" button to remove it from your in the resme builder<n />
            - Once you are done,add a title to your resume and click on "Save Resume" button<n />
          </p>
          </>
        }
      >



        <ResumeProvider>
          <div className={styles.page}> 
          {/* the page styles are inside ResumePreview.module.css file */}

          <section className={styles.forms_section}>
            <CvSaveButton/>

            <PersonalDetailsForm />
            <ObjectiveForm />
            <SummaryForm />
            <WorkExperienceForm />
            <CertificatesForm />
            <EducationsForm />
            <SkillsForm />
            <LinksForm />
            <ProjectsForm />
            <VolunteersForm />
            <LanguageForm />
          </section>


          <section className={styles.preview_section}>


              <div className={styles.personal_details}>
                <PersonalDetailsPreview />
              </div>
              <div className={styles.objective_section}>
                <ObjectivePreview />
              </div>
              <div className={styles.summary_section}>
                <SummaryPreview />
              </div>
              <div className={styles.work_experience_section}>
                <WorkExperiencePreview />
              </div>
              <div className={styles.certificates_section}>
                <CertificatesPreview />
              </div>
              <div className={styles.educations_section}>
                <EducationsPreview />
              </div>
              <div className={styles.skills_section}>
                <SkillsPreview />
              </div>
              <div className={styles.links_section}>
                <LinksPreview />
              </div>
              <div className={styles.projects_section}>
                <ProjectsPreview />
              </div>
              <div className={styles.volunteers_section}>
                <VolunteersPreview />
              </div>
              <div className={styles.languages_section}>
                <LanguagesPreview />
              </div>
            </section>

          </div>
        </ResumeProvider>
      </Layout>
    </div>
  )
}
