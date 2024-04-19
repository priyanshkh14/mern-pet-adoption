import { Link } from 'react-router-dom';
import { MdOutlineCatchingPokemon  } from 'react-icons/md'

export default function RehomeItem({rehome}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
        <Link to={`/rehome/${rehome._id}`}>
            <img src={rehome.imageUrls[0] || 'https://cdn.pixabay.com/photo/2018/08/05/19/34/dog-3586281_640.jpg'} 
            alt='rehome cover'
            className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
            />
        <div className='p-3 flex flex-col gap-2 w-full'>
            <p className='truncate text-lg font-semibold text-red-700'>{rehome.name}</p>
            <div className='flex items-center gap-1'>
                <MdOutlineCatchingPokemon className='h-4 w-4 text-slate-700'/>
                <p className='text-sm text-red-600 truncate w-full'>{rehome.species}</p>
            </div>
            <p className='text-sm text-red-600 line-clamp-2'>{rehome.description}</p>
            <p className='text-red-500 mt-2 font-semibold'>{rehome.gender}</p>
            <div className='text-red-700 flex gap-4'>
                <div className='font-bold text-s'>
                    {rehome.age > 1 ? `${rehome.age} years` : `${rehome.age} year`}
                </div>
                <div className='font-bold text-s'>
                    {rehome.color}
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}
