import { useState } from 'react';

export default () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev);
  };

  return {
    liked,
    toggleLike,
  };
};
