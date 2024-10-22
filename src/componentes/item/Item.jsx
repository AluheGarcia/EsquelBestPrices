import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, image, title, description }) => {
  return (
    <div className="col-12 col-lg-5 items">
      <div className="producto row">
        <Link to={`/PriceContainer/${id}`} className="linkTo">
          <div className="col-xxl-6">   
            <img src={image} alt={title} />
          </div>
          <div className="col-xxl-6"> 
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
