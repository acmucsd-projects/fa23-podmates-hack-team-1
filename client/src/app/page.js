import Image from 'next/image'
import styles from './page.module.css'
import ChatInbox from './pages/ChatInbox'
import LogInSignUp from './pages/SignIn'

export default function Home() {
  return (
    <main>
      <div>
        <LogInSignUp/>
        <p>Hello</p>
        <ChatInbox/>
      </div>
    </main>
  )
}
