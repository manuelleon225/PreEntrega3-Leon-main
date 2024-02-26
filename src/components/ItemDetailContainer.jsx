import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then(resultado => {
        setLoading(false);
        setItem({id:resultado.id, ...resultado.data()});
    });
}, [id]);

  return (
    <>
    {loading ? <Loading /> : <ItemDetail product={item} />}
    </>
  );
};

export default ItemDetailContainer;