import { useRouter } from 'next/router'
import CoverLetterPage from '@/components/Cover_Letter/CoverLetterPage'

export default function CvIdPage() {
  const router = useRouter()
  const { coverLetterId } = router.query

  console.log(coverLetterId)

  return <CoverLetterPage coverLetterId={coverLetterId} />

}

