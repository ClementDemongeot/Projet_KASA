
import {Banner1} from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import LogementsMenu from '../../components/Logements-Menu/LogementsMenu'
import Layout from '/src/layouts/Layout'


export function Home() {

  return (
      <>
        <Layout>
        <Banner1 />
          <main>
            <LogementsMenu />
          </main>
        </Layout>
        <Footer />
      </>
  )
}

export default Home
