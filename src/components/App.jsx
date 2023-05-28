import { useState, useEffect } from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Toaster } from 'react-hot-toast';
import { LoginFoarm } from './LoginFoarm/LoginFoarm';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from 'services/api';
import { Loader } from './Loader/Loader';
import { ImageErrorViev } from './ImageErrorViev/ImageErrorViev';
import { Button } from './Button/Button';

export function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleFoarmSubmit = search => {
    setPage(1);
    setSearch(search);
  };

  const onLoadMoreClick = () => setPage(prevState => prevState + 1);

  useEffect(() => {
    if (search === '') {
      return;
    } else setStatus('pending');
    API.fetchImages(search, page)
      .then(gallerySet => {
        if (gallerySet.length !== 0) {
          if (page === 1) {
            setGallery(gallerySet);
          } else {
            setGallery(prevState => [...prevState, ...gallerySet]);
          }
          setStatus('resolved');
        } else setStatus('rejected');
      })
      .catch(error => setStatus('rejected'));
  }, [search, page]);

  return (
    <>
      <Searchbar>
        <LoginFoarm submitForm={handleFoarmSubmit} />
      </Searchbar>
      {status === 'idle' && (
        <div className={css.notify}>Please, enter your query</div>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <ImageErrorViev message="There are no results for your search" />
      )}
      {status === 'resolved' && (
        <>
          <ImageGallery dates={gallery} page={page}></ImageGallery>
          {gallery.length % 12 === 0 && (
            <Button onLoadMoreClick={onLoadMoreClick} />
          )}
        </>
      )}
      <Toaster />
    </>
  );
}
