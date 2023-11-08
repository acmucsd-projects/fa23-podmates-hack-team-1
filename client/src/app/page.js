import Image from 'next/image'
import styles from './page.module.css'
import ChatInbox from './pages/ChatInbox'
export default function Home() {
  return (
    <main>
      <div>
        <p>Hello</p>
        <ChatInbox/>
      </div>
    </main>
  )
}
