import React from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../redux/actions/actionCreator';

import Location from '../../components/location/location';
import Favorites from '../../components/favorites/favorites';
import Hotels from '../../components/hotels/hotels';
import SectionTitle from '../../components/common/sectionTitle/sectionTitle';
import LogoutImg from '../../img/logout.svg';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getHotels());
  }, []);

  const hotels = useSelector((state) => state.hotels.hotels);
  const favorites = useSelector((state) => state.favorites.favorites);
  const searchInfo = useSelector((state) => state.hotels.dataForRequest);

  const logOut = () => {
    navigate('/', { replace: true });
    localStorage.removeItem('User');
  };

  return (
    <div className="home-page__wrapper">
      {localStorage.User ? (
        <div className="home-page">
          <header className="home-page__header">
            <div className="home-page__header-container">
              <SectionTitle>Simple Hotel Check</SectionTitle>
            </div>
            <div
              className="home-page__header-container pointer"
              onClick={logOut}
            >
              <span>Выйти</span>
              <img
                className="home-page__header-logout-img"
                src={LogoutImg}
                alt="log out"
              />
            </div>
          </header>
          <main className="home-page__main">
            <div className="home-page__left-side">
              <Location />
              <Favorites favorites={favorites} searchInfo={searchInfo} />
            </div>
            <div className="home-page__right-side">
              <Hotels
                hotels={hotels}
                favorites={favorites}
                searchInfo={searchInfo}
              />
            </div>
          </main>
        </div>
      ) : (
        <div className="no-auth">
          <Link className="no-auth__link" to="/">
            Авторизуйтесь
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
