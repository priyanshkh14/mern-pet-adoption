import React from 'react'

export default function CreateBlog() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-5xl font-semibold text-center my-7'>Share Your Pet Rescue Story</h1>
        <p className='text-2xl font font-semibold text-center my-7'>Please fill out the form below so we can share your pet rescue story</p>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type='text' placeholder='Title' className='border p-3 rounded-lg' id='title' maxLength='70' minLength='8' required></input>
                <textarea type='text' placeholder='Your Story' className='border p-3 rounded-lg' id='description' required></textarea>
                <p className='font-semibold'>Images:
                    <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                </p>
                <input className='p-3 border border-gray-300 rounded w-full' type='file' id='images' accept='image/*' multiple/>
                <button className='p-3 text-red-700 border border-red-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                <button className='p-3 bg-red-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Post</button>
            </div>
        </form>
    </main>
  )
}
