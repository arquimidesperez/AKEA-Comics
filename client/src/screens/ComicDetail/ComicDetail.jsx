import React from 'react'
import { Layout } from '../../components'

//deleted props  
export default function ComicDetail() {
  return (
    // remvoed until needed from layout user={props.user}
    <Layout >
      <div className='comic-browse'>
        hello from comic details
      </div>
    </Layout>
  )
}