import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RehomeItem from '../components/RehomeItem';

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
  });

  const [loading, setLoading] = useState(false);
  const [rehomes, setRehomes] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');

    if (
      searchTermFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
      });
    }

    const fetchRehomes = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/rehome/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setRehomes(data);
      setLoading(false);
    };

    fetchRehomes();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebardata.searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const onShowMoreClick = async () => {
    const numberOfRehomes = rehomes.length;
    const startIndex = numberOfRehomes;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/rehome/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setRehomes([...rehomes, ...data]);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7  border-b-2 md:border-r-2 md:min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>Search Term:</label>
            <input
              type='text'
              id='searchTerm'
              placeholder='Search...'
              className='border rounded-lg p-3 w-full'
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <button className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search
          </button>
        </form>
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl font-semibold border-b p-3 text-red-700 mt-5'>Adoption results:</h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && rehomes.length == 0 && (
            <p className='text-xl text-red-700'>No Adoptions Found!</p>
          )}
          {loading && (
            <p className='text-xl text-red-700 text-center w-full'>loading...</p>
          )}

          {!loading &&
            rehomes &&
            rehomes.map((rehome) => (
              <RehomeItem key={rehome._id} rehome={rehome} />
          ))}

          {showMore && (
            <button
              onClick={onShowMoreClick}
              className='text-slate-700 hover:underline p-7 text-center w-full'
            >
              Show more
            </button>
          )}

        </div>
      </div>
    </div>
  );
}