import axios from 'axios';

export  const News= (p1,p2) => {
  return (
    axios.get(`https://newsapi.org/v2/${p1}&${p2}&apikey=4b550f319d2442b989f8b67f978d6e8e`)
  )
};
