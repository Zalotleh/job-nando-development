import '@/styles/globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { ResumeProvider } from '@/context/ResumeContext'
import { SavedResumeProvider } from '@/context/SavedResumeContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import SubscribedOnlyRoute from '@/components/SubscribedOnlyRoute'


export default function App({ 
  Component, 
  pageProps: { session, ...pageProps},
}) {

  return (
    <AuthContextProvider>
      <ResumeProvider>
      <SavedResumeProvider>
        <ProtectedRoute>
          <SubscribedOnlyRoute>
        <Component {...pageProps} />
          </SubscribedOnlyRoute>
        </ProtectedRoute>
      </SavedResumeProvider>
      </ResumeProvider>
    </AuthContextProvider>

  )
}
