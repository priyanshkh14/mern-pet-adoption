import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaDog,
  FaGenderless,
  FaHome,
  FaPalette,
  FaShare,
  FaSyringe,
  FaTransgender,
} from 'react-icons/fa';
import { current } from '@reduxjs/toolkit';
import Contact from '../components/Contact';

export default function Rehome() {
  SwiperCore.use([Navigation]);
  const [rehome, setRehome] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const {currentUser} = useSelector((state) => state.user);

  console.log(currentUser._id, rehome?.userRef);
  useEffect(() => {
    const fetchRehome = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/rehome/get/${params.rehomeId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setRehome(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRehome();
  }, [params.rehomeId]);

  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {rehome && !loading && !error && (
        <div>
          <Swiper navigation>
            {rehome.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className='h-[300px]'
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>


          <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
          <FaShare
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>    
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
              Link copied!
            </p>
          )}
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
          <p className='text-2xl font-semibold'>
            {rehome.name}
          </p>
          <p className='flex items-center mt-6 gap-2 text-red-600  text-lg'>
          <FaHome className='text-green-700' />
            Rehome
          </p>
          <div className='flex gap-4'>
              <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                Breed : {rehome.breed}
              </p>
              <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                  Age : {rehome.age} years
                </p>
          </div> 
          <p className='text-slate-800'>
            <span className='font-semibold text-black'>Description - </span>
            {rehome.description}
          </p>  
           <ul className=' text-green-900 font semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
            <li className='flex items-center gap-1 whitespace-nowrap'>
              <FaDog className='text-lg'/>
              {rehome.species}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap'>
              <FaSyringe className='text-lg'/>
              {rehome.vaccinated ? 'Vaccinated' : 'Not Vaccinated'}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap'>
              <FaPalette className='text-lg'/>
              {rehome.color}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap'>
              <FaGenderless className='text-lg'/>
              {rehome.gender}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap'>
              <FaTransgender className='text-lg'/>
              {rehome.gender}
            </li>
           </ul>
           {currentUser && rehome.userRef != currentUser._id && !contact &&(
            <button onClick={()=>setContact(true)} className='bg-red-700 text-white rounded-lg uppercase hover:opacity-95 p-3'>Contact Owner</button>
           )}
           {(contact && <Contact rehome={rehome}/>)}
          </div>


        </div>
      )}
    </main>
  );
}