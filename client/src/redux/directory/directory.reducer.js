export const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl:'https://firebasestorage.googleapis.com/v0/b/crwn-db-43e25.appspot.com/o/photo-1575428652377-a2d80e2277fc.jpg?alt=media&token=b997378a-5f2b-45ff-8ee5-2fec5206f821',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl:'https://firebasestorage.googleapis.com/v0/b/crwn-db-43e25.appspot.com/o/photo-1495105787522-5334e3ffa0ef.jpg?alt=media&token=1263de18-d139-4a1d-ba8f-6fbfb3477bb9',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl:'https://firebasestorage.googleapis.com/v0/b/crwn-db-43e25.appspot.com/o/photo-1597874041006-12a241c69996.jpg?alt=media&token=2b6ab507-110d-437f-8479-cb04743cde45',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl:'https://firebasestorage.googleapis.com/v0/b/crwn-db-43e25.appspot.com/o/photo-1551551625-aa4a360c80d3.jpg?alt=media&token=e05038ca-4787-4f42-90cc-31ccda2f7882',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl:'https://firebasestorage.googleapis.com/v0/b/crwn-db-43e25.appspot.com/o/photo-1507680434567-5739c80be1ac.jpg?alt=media&token=6bb7b7a7-1d26-4e8d-bacb-cacdd200842f',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
