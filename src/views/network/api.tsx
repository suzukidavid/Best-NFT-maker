
const fileUploadServer = process.env.NODE_ENV === 'production' ? 'http://bestnftmaker.com:8000/' : 'http://localhost:8000/'

export function isRegister(walletId) {
  const data = new FormData();
  data.append('walletId', walletId);

  return fetch(`${fileUploadServer}user/isRegister/${walletId}`, {
    method: 'POST',
  }).then(handleResponse)
}

export function userSignUp(userName, email, password, walletId) {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('walletId', walletId);
  data.append('userName', userName);

  return fetch(`${fileUploadServer}user/signup`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function userSignIn(email, password, walletId) {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('walletId', walletId);

  return fetch(`${fileUploadServer}user/signin`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function collectionGetbyid(walletId, limit) {
  const data = new FormData();
  data.append('walletId', walletId);
  data.append('limit', limit);

  return fetch(`${fileUploadServer}collection/get`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function getFavorites(walletId) {
  return fetch(`http://localhost:8000/favorite/getfavorites/${walletId}`, {
    method: 'POST',
  }).then(handleResponse)
}

export function getNFT(id) {
  return fetch(`http://localhost:8000/nft/getNFT/${id}`, {
    method: 'POST',
  }).then(handleResponse)
}

export function searchApi(searchTxt, categoryTxt) {
  const data = new FormData();
  data.append('searchTxt', searchTxt);
  data.append('categoryTxt', categoryTxt);
  return fetch(`http://localhost:8000/nft/search`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function nftGetbyColName(colName) {
  const data = new FormData();
  data.append('collection', colName);

  return fetch(`${fileUploadServer}nft/nftGetbyColName`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function collectionUpload(formData) {
  return fetch(`${fileUploadServer}collection/upload`, {
    method: 'POST',
    body: formData,
  }).then(handleResponse)
}

export function getNewDrops(){
  return fetch(`${fileUploadServer}nft/getNewDrops`, {
    method: 'POST',
  }).then(handleResponse)
}

export function nftFileupload(formData) {
  console.log(fileUploadServer)
  return fetch(`${fileUploadServer}nft/upload`, {
    method: 'POST',
    body: formData,
  }).then(handleResponse)
}

export function nftGetAll() {
  return fetch(`${fileUploadServer}nft/getAll`, {
    method: 'POST',
  }).then(handleResponse)
}

export function getCatalogNftCount(filterInfo, keyWord, priceRange, sortMethode) {
  const data = new FormData();
  data.append('filterInfo', JSON.stringify(filterInfo));
  data.append('keyWord', keyWord);
  data.append('priceRange', JSON.stringify(priceRange));
  data.append('sortMethode', sortMethode);
  return fetch(`${fileUploadServer}nft/getCatalogNftCount`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function getUserNftCount(walletId) {
  const data = new FormData();
  data.append('walletId', walletId);
  return fetch(`${fileUploadServer}nft/getUserNftCount`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function getTokenID() {
  return fetch(`${fileUploadServer}nft/getTokenID`, {
    method: 'POST',
  }).then(handleResponse)
}


export function getUserNft(walletId, offset, limit) {
  const data = new FormData();
  data.append('walletId', walletId);
  data.append('offset', offset);
  data.append('limit', limit);
  return fetch(`${fileUploadServer}nft/getUserNft`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function getCatalogNft(filterInfo, keyWord, priceRange, sortMethode, offset, limit) {
  const data = new FormData();
  data.append('filterInfo', JSON.stringify(filterInfo));
  data.append('keyWord', keyWord);
  data.append('priceRange', JSON.stringify(priceRange));
  data.append('sortMethode', sortMethode);
  data.append('offset', offset);
  data.append('limit', limit);
  return fetch(`${fileUploadServer}nft/getCatalogNft`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function addFavorite(walletId, nftId) {
  const data = new FormData();
  data.append('walletId', walletId);
  data.append('nftId', nftId);
  return fetch(`${fileUploadServer}favorite/favAdd`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function getHotItem() {
  return fetch(`${fileUploadServer}nft/getHotItem`, {
    method: 'POST',
  }).then(handleResponse)
}

export function removeFavorite(wallectId, nftId) {
  const data = new FormData();
  data.append('walletId', wallectId);
  data.append('nftId', nftId);
  return fetch(`http://localhost:8000/favorite/favDel`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

function handleResponse(response) {
  return response.json();
}

export function isNftFavorite(walletId, nftId) {
  const data = new FormData();
  data.append('walletId', walletId);
  data.append('nftId', nftId);
  return fetch(`http://localhost:8000/favorite/isNftFavorite`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function recentlyAdd(wallectId, nftId) {
  const data = new FormData();
  data.append('walletId', wallectId);
  data.append('nftId', nftId);
  return fetch(`http://localhost:8000/recently/recentlyAdd`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function getRecentlyView(walletId, limit){
  const data = new FormData();
  data.append('walletId', walletId);
  data.append('limit', limit);
  return fetch(`http://localhost:8000/recently/getRecentlyView`, {
    method: 'POST',
    body: data,
  }).then(handleResponse)
}

export function isFavorite(favData, nftId){
  let result = false;
  favData.forEach((item) => {
    if (parseInt(item.nftId) === parseInt(nftId)) {
      result = true;
    }
  })
  return result;
}