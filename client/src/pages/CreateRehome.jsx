import React from 'react';

export default function CreateRehome() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Rehome Your Animal
      </h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg'
            id='description'
            required
          />
          <input
            type='text'
            placeholder='Specie : Dog, Cat, Others'
            className='border p-3 rounded-lg'
            id='species'
            required
          />
          <input
            type='text'
            placeholder='Breed'
            className='border p-3 rounded-lg'
            id='breed'
            required
          />
          <input
            type='text'
            placeholder='Color'
            className='border p-3 rounded-lg'
            id='color'
            required
          />
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input type='checkbox' id='vaccination' className='w-10' />
              <span>Vaccinated</span>
            </div>
          </div>
          
          <div className='flex flex-wrap gap-6'>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='age'
                min='1'
                max='150'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>Age</p>
            </div>
          </div>
            <div className='flex flex-wrap gap-2'>
            <div className='flex items-center gap-2'>
              <label htmlFor='gender'>Gender:</label>
              <select
                id='gender'
                className='p-3 border border-gray-300 rounded-lg'
                required
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Unknown'>Unknown</option>
              </select>
            </div>

            <div className='flex items-center gap-2'>
              <label htmlFor='size'>Size:</label>
              <select
                id='size'
                className='p-3 border border-gray-300 rounded-lg'
                required
              >
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='Extra Large'>Extra Large</option>
                <option value='Unknown'>Unknown</option>
              </select>
            </div>

            <div className='flex items-center gap-2'>
              <label htmlFor='adoptionStatus'>Adoption Status:</label>
              <select
                id='adoptionStatus'
                className='p-3 border border-gray-300 rounded-lg'
                required
              >
                <option value='Available'>Available</option>
                <option value='Adopted'>Adopted</option>
                <option value='Pending'>Pending</option>
                </select>
            </div>
            </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className='font-semibold'>Images:
          <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
          </p>
          <div className="flex gap-4">
            <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple />
            <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
          </div>
        <button className='p-3 bg-red-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Rehome Animal</button>
        </div>
      </form>
    </main>
  );
}