import React, { useState } from 'react';
import { Simulate } from 'react-dom/test-utils'

const ContentContext = React.createContext(
  {
    userInfo: (localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null),
    setUserInfo: (user) => null,
    favorites: [],
    setFavorites: (data) => null,
    changeFavorite: (result, isAdd) => null,
    walletId: "",
    setWalletId: (id) => null,
  })

const ContentProvider = ({ children }) => {
  const [walletId, setWalletId] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null);

  const changeFavorite = (result, isAdd) => {
    const temp = JSON.stringify(favorites);
    const _favorites = JSON.parse(temp);
    if(isAdd){
      _favorites.push(result);
    }
    else{
      _favorites.forEach((item, index) => {
        if(parseInt(item.nftId) === parseInt(result.id)){
          _favorites.splice(index, 1);
        }
      })
    }
    setFavorites(_favorites);
  }

  return (
    <ContentContext.Provider value={{userInfo, setUserInfo, favorites, setFavorites, changeFavorite, walletId, setWalletId }}>
      {children}
    </ContentContext.Provider>
  )
}

export { ContentContext, ContentProvider }