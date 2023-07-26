import './styles/Rocket.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchRockets } from '../redux/rockets/rocketSlice';
import RocketList from './RocketList';

const Rockets = () => {
  const rocketArr = useSelector((state) => state.rockets.rocketArr);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const [Mounted, setMounted] = useState(false);
  console.log('This is Rockets', rocketArr);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Mounted === false) {
      dispatch(fetchRockets());
      setMounted(true);
    }
  }, [dispatch, Mounted]);

  return (
    <div className="ul-container">
      <h2 className="Rocket-List">Rockets List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-container">
          {rocketArr.map((rocket) => (
            <RocketList
              key={rocket.id}
              rocket={{
                flickr_images: rocket.flickr_images,
                rocket_name: rocket.rocket_name,
                description: rocket.description,
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Rockets;