
const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 LionBeat Music. Todos los derechos reservados.</p>
          </footer>
    )
}

const footerStyle = {
    backgroundColor: '#9c123d',
    color: '#fff',
    textAlign: 'center',
    padding: '1em',
    position: 'fixed',
    bottom: '0',
    width: '100%',
};

export default Footer;