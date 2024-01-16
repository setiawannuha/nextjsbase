'use client'
import React, {useState} from 'react'
import {create} from "@/services/video.service"
import {useRouter} from 'next/navigation'

const CreateVideo = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    title: "",
    cover: "",
    description: "",
    rating: 0,
    price: 0,
    level: ""
  })
  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const [err, result] = await create({body: form})
    if(err){
      console.log(err);
    }
    router.push('/video')
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold">CreateVideo</h1>
      <form action="" method='POST' onSubmit={handleSubmit}>
        <div className='p-1'>
          <label htmlFor="title">title</label>
          <br />
          <input name='title' onChange={onChangeInput} className='text-black' type="text" placeholder='title'/>
        </div>
        <div className='p-1'>
          <label htmlFor="cover">cover</label>
          <br />
          <input name='cover' onChange={onChangeInput} className='text-black' type="text" placeholder='cover'/>
        </div>
        <div className='p-1'>
          <label htmlFor="description">description</label>
          <br />
          <input name='description' onChange={onChangeInput} className='text-black' type="text" placeholder='description'/>
        </div>
        <div className='p-1'>
          <label htmlFor="rating">rating</label>
          <br />
          <input name='rating' onChange={onChangeInput} className='text-black' type="number" placeholder='rating'/>
        </div>
        <div className='p-1'>
          <label htmlFor="price">price</label>
          <br />
          <input name='price' onChange={onChangeInput} className='text-black' type="number" placeholder='price'/>
        </div>
        <div className='p-1'>
          <label htmlFor="level">level</label>
          <br />
          <input name='level' onChange={onChangeInput} className='text-black' type="text" placeholder='level'/>
        </div>
        <div className='p-1'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateVideo