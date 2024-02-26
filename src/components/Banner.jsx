
import Teclado from '../assets/Teclado.png'
import Bateria from '../assets/Bateria.png'
import Guitarra from '../assets/guitarra.png'

const Banner = () => {
    return (
        <div>   
          <section style={cardsSectionStyle}>
            <h2>Explora Nuestra Colección</h2>
            <div style={cardsContainerStyle}>
            <div style={cardStyle}>
            <img src={Guitarra} alt="Guitarra Acústica" width="170" />
              <h3>Guitarra Acústica</h3>
              <p>Perfecta para tus sesiones acústicas.</p>
            </div>
            <div style={cardStyle}>
            <img src={Teclado} alt="Teclado Eléctrico" width="380" />
              <h3>Teclado Eléctrico</h3>
              <p>Crea melodías impresionantes.</p>
            </div>
            <div style={cardStyle}>
            <img src={Bateria} alt="Batería Profesional" width="350" />
              <h3>Batería Profesional</h3>
              <p>Siente el ritmo con nuestra batería de alta calidad.</p>
            </div>
            </div>
            </section>
        </div>
      );
}
const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px',
    padding: '15px',
    textAlign: 'center',
  };
  
  const cardsSectionStyle = {
    padding: '2em',
    textAlign: 'center',
  };
  
  const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

export default Banner;