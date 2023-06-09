import '@/styles/globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { ResumeProvider } from '@/context/ResumeContext'
import { SavedResumeProvider } from '@/context/SavedResumeContext'
import ProtectedRoute from '@/components/ProtectedRoute'


export default function App({ 
  Component, 
  pageProps: { session, ...pageProps},
}) {

  return (
    <AuthContextProvider>
      <ResumeProvider>
      <SavedResumeProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
    </ProtectedRoute>
      </SavedResumeProvider>
      </ResumeProvider>
    </AuthContextProvider>

  )
}
