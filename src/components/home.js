import iphoneImg from "../assets/images/iphoneImg.jpg";
import {useSelector,useDispatch} from "react-redux"
import cartImg from "../assets/images/cartImg.png"
import "./home.css"
import { addToCart } from "../services/Actions/action";
const HomeComponent = (props) => {
  const data=useSelector((state)=>state.cardItems);
  const dispatch=useDispatch()
  console.log(data)
  return (
    <div className="mainContainer">
      <div>
      <h2> E-Commerce Site</h2>
        <img className="cartImg" src={cartImg}/>
        <p className="cartValue">{data}</p>
      </div>
      <div className="itemContainer">
        <div className="imgContainer item">
          <img className="itemImg" src={iphoneImg} />
        </div>
        <div className="detailsWrapper">
          <div className="PriceSection">
            <span> Iphone </span>
            <span> Price: $1000.00</span>
          </div>
          <div className="btnWrapper">
            <button className="cartbtn" 
            onClick={()=> dispatch(addToCart())}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
