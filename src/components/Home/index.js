import {Component} from 'react'

import Header from '../Header'
import ContactInfo from '../ContactInfo'
import Content from '../Content'

import './index.css'

console.log(Content)

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <ContactInfo />
      </>
    )
  }
}

export default Home
