import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserProfileContext from '../../contexts/UserProfileContext';
import MightLike from '../Movie/MightLike';

export default function InfosProfile() {
  const { mainUser } = useContext(UserProfileContext);

  const movie = {
    similars: [
      {
        id: 'tt0088247',
        title: 'The Terminator',
        image:
          'https://imdb-api.com/images/original/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.1',
      },
      {
        id: 'tt0107290',
        title: 'Jurassic Park',
        image:
          'https://imdb-api.com/images/original/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.2',
      },
      {
        id: 'tt0077766',
        title: 'Jaws 2',
        image:
          'https://imdb-api.com/images/original/MV5BN2U1MWE1NTMtYjQ2ZC00MTFmLWFmYjItODMyNGYxOTAyZmEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '5.8',
      },
      {
        id: 'tt0070047',
        title: 'The Exorcist',
        image:
          'https://imdb-api.com/images/original/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.1',
      },
      {
        id: 'tt0107048',
        title: 'Groundhog Day',
        image:
          'https://imdb-api.com/images/original/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.1',
      },
      {
        id: 'tt0075148',
        title: 'Rocky',
        image:
          'https://imdb-api.com/images/original/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.1',
      },
      {
        id: 'tt0325980',
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        image:
          'https://imdb-api.com/images/original/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.1',
      },
      {
        id: 'tt0097576',
        title: 'Indiana Jones and the Last Crusade',
        image:
          'https://imdb-api.com/images/original/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.3',
      },
      {
        id: 'tt0082971',
        title: 'Indiana Jones and the Raiders of the Lost Ark',
        image:
          'https://imdb-api.com/images/original/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.4',
      },
      {
        id: 'tt0095016',
        title: 'Die Hard',
        image:
          'https://imdb-api.com/images/original/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.3',
      },
      {
        id: 'tt0085750',
        title: 'Jaws 3-D',
        image:
          'https://imdb-api.com/images/original/MV5BM2QwYjhiMzQtN2RiYS00MzgxLThmNzItMmJlNmMyMmQyYTA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '3.7',
      },
      {
        id: 'tt0103064',
        title: 'Terminator 2: Judgment Day',
        image:
          'https://imdb-api.com/images/original/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg',
        imDbRating: '8.6',
      },
    ],
  };

  return (
      <div className='profile-wrapper'>
        <div className="user-header">
          <figure>
            <img src={mainUser.avatar} alt={`${mainUser.firstName} ${mainUser.lastName}`} title={`${mainUser.firstName} ${mainUser.lastName}`} />
            <figcaption>
              <h2>{`${mainUser.firstName} ${mainUser.lastName}`}</h2>
            </figcaption>
          </figure>
        </div>

        <div className="user-stats">
          <ul>
            {mainUser.datas.map((data) => (<li key={data.id}><h4>{data.title}</h4><span>{(data.count > 1000 ? `${parseFloat((data.count / 1000).toFixed(1))}k` : data.count)}</span></li>))}
          </ul>
        </div>

        <div className="user-genres">
          <h3>Your Favorite Genres</h3>
          <div className='list-genres'>
            {mainUser.favoritesGenres.map((genre) => (<button key={genre.id}>{genre.name}</button>))}
          </div>
          <NavLink to="/profile">Edit your genres ›››</NavLink>
        </div>

        <div className="user-edit-button">
          <NavLink to="/profile">
            <span>Your Personnal Datas</span>
            <em>{mainUser.email}</em>
          </NavLink>
        </div>

        <div className="user-most-viewed">
          <MightLike similars={{movies: movie?.similars, title: 'Most Viewed'}} />
        </div>
      </div>
  );
}
