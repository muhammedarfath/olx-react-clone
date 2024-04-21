import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from './Banner'
import Cards from './Cards'
import toast, { Toaster } from 'react-hot-toast';

function HomePage() {
  return (
    <div>
        <Layout>
           <Banner/>
           <Toaster />
           <Cards/>
        </Layout>
    </div>
  )
}

export default HomePage
