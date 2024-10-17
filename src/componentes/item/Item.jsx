import "./Item.css";

const Item = ({ image, title, description }) => {
  return (
    <div className="col-6">
      <div className="producto">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Item;
