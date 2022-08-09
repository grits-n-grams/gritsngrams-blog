import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
  return (
    <Layout blog>
      <Head>
        <title>A Logo for Frances</title>
      </Head>
      <h1 className={utilStyles.headingMd}>A Logo for Frances</h1>
      <p className={utilStyles.lightText}>
        For this design I was asked by my friend Frances to design a logo for
        their new book show opening in Dunedin. The shop was to be called "Night
        Time Books" and a had an emphasis on womens writers.
      </p>
    </Layout>
  )
}
