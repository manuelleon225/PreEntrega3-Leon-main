import { useState, useEffect } from 'react';
//import productos from './json/productos.json';
import { getFirestore, collection, query, where, getDocs,limit } from "firebase/firestore";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loading from "./Loading";
import Carousel from "./Carousel";
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';


const LandingPage = (props) => {

  const [lista, setListas] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    let consulta = ''
    if(props.limit == 1){
       consulta = id ? query(itemsCollection, where("categoria", "==", id),limit(6)) : query(itemsCollection,limit(6));
    }else{
      consulta = id ? query(itemsCollection, where("categoria", "==", id)) : query(itemsCollection);
    }
    
    getDocs(consulta).then(resultado => {
        setLoading(false);
        setListas(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    });
}, [id]);

  return (
    <div>
      <header style={headerStyle}>
      <h1>Bienvenidos a LionBeat Music</h1>
      <p>Descubre una amplia selección de instrumentos para tu música.</p>
      </header>
      <section style={cardsSectionStyle}>
      {id ? "" : <Carousel />}
      <br></br>
      <h2>Explora Nuestra Productos</h2>
      {loading ? <Loading /> : <ItemList productos={lista} />}
      
      </section>
    </div>
  );
};

const headerStyle = {
  backgroundColor: '#9c123d',
  color: '#fff',
  padding: '1em',
  textAlign: 'center',
};

const cardsSectionStyle = {
  padding: '2em',
  textAlign: 'center',
};

export default LandingPage;
