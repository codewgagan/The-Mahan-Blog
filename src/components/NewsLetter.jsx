import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2'>
      <h1 className='md:text-4xl text-2xl'>Never Miss this knowledge</h1>
      <p>Subacaribe</p>
      <form>

        <input type="text" name="" id="" />
        <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
