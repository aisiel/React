import "./Box.css";

export const Box = (props) => {
  const isDiscount = props.isDiscount;
  const isLoading = props.isLoading;
  console.log(isDiscount);

if (isLoading){
    return <div>Loading</div>
}
  return (
    <div>
      <div className="image">
        {isDiscount && <div className="discount">Sale</div>}
      </div>
      <h3 className="title">Sandwich vegan</h3>
      <p className="description">Only at Cafe and Delivery</p>
      {isDiscount && <p>Get 20% Off in App</p>}
    </div>
  );
};
