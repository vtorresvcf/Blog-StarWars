const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
      fetchGet: async (name) => {
        try {
          const res = await fetch(`https://www.swapi.tech/api/${name}`);
          console.log(res);
          if (!res.ok) throw new Error(`Error fetching ${name}`);
          const { results } = await res.json();
          const obj = {};
          obj[name] = results;
          setStore(obj);
        } catch (error) {
          console.log(error);
        }
      },

      fetchGetPeopleDetails: async (uid, texto) => {
        try {
          const res = await fetch(`https://www.swapi.tech/api/${texto}/${uid}`);
          if (!res.ok) throw new Error(`Error fetching people`);
          const data = await res.json();
          setStore({ details: data.result });
        } catch (error) {
          console.log(error);
        }
      },

      addFavorite: (item) => {
        const lista = getStore().favorites;

        if (lista.filter((e) => e.uid !== item.uid)) {
          setStore({ favorites: [...getStore().favorites, item] });
        }
      },
      deleteFavorite: (item) => {
        const lista = getStore().favorites;
        const filterDelete = lista.filter((e) => e.uid === item.uid);
        lista.splice(filterDelete, 1);
        setStore({ favorites: lista });
      },
    },
  };
};

export default getState;
