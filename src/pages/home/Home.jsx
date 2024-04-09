
import Banner from '../../components/Banner/Banner'
import Layout from '/src/layouts/Layout'


export function Home() {

  return (
      <>
        <Layout>
        <Banner />
          <main>
            Contenu home page
          </main>
        </Layout>
      </>
  )
}

export default Home
