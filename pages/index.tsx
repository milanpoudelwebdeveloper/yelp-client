import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import Restaurants from '../components/Restaurants'

const Home = () => {
  return (
    <div>
      <Header title='Restaurant Finder'/>
      <AddRestaurant />
      <Restaurants />
    </div>
  )
}

export default Home