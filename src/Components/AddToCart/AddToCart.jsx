import './AddToCart.css';

function AddToCart( {inputV} ){
    return (
        <div>
            AddToCart - {inputV}
        </div>
    );
}
export default AddToCart;
// If a parent is getting re-rendered, the child is also 
// re-rendered