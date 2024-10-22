import { Link } from "react-router-dom";
import "./PriceItem.css"
const PriceItem = ({ id, image, title, description, price }) => {
  return (
    <>
      <div className="col-12 items">
        <div className="producto row">
          <div className="col-6">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Precio: ${price}</p>
          </div>
          <div className="col-6">
            <h2>Precio más bajo: {}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceItem;
