import Services from '../components/Services'
import Transactions from '../components/Transactions'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
      <Services />
      <Transactions />
    </>
  )
}
