const ProductComponent = ({ product, onDelete, onEdit }) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Бренд: {product.brand}</p>
            <p className="card-text">Цена: ${product.price}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-warning" onClick={() => onEdit(product.id)}>
                Change
              </button>
              <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductComponent;