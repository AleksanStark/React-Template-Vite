const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt="" />
      <p>{price}</p>
    </div>
  );
};
export default Product;
