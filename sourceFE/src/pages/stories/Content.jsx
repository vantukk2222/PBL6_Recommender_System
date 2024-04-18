import React from 'react'
import {useParams} from 'react-router-dom'
const Content = () => {
    let {idCate} = useParams();

  let data = {
    name :'The Imbecile Lord Is Married to Five Beautiful Goddess',
    src: 'https://book-pic.webnovel.com/bookcover/23124855606295305?imageMogr2/thumbnail/150&imageId=1698747892444'
  }
  return (
    <div>Content </div>
  )
}

export default Content