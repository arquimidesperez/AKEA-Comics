import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ComicBrowse from '../ComicBrowse/ComicBrowse'

export default function Home() {
  return (
    <div>
      hello this is my home
      <Link to="/browse">Browse All Comics</Link>
    </div>
  )
}
