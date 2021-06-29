import React from 'react'
import { Layout, ComicCards } from '../../components'

//deleted props  
export default function ComicBrowse() {
  return (
    // remvoed until needed from layout user={props.user}
    <Layout >
      <div className='home'>
        hello ComicCards
        <ComicCards />
      </div>
    </Layout>
  )
}

