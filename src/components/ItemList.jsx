import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="container mt-3">
      <div className="row ">
        {productos.map(producto => (
          <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.link}
            price={producto.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;