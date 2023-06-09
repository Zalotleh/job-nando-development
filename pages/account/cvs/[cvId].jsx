import { useRouter } from 'next/router'
import CvPage from '../../../components/CV_Pages/CvPage'

export default function CvIdPage() {
  const router = useRouter()
  const { cvId } = router.query

  return <CvPage cvId={cvId} />
}

