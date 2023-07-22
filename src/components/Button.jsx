import { useDispatch } from "react-redux";
import { activeAction } from "../redux/btnGetStart";

const Button = ({ styles }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(activeAction(true));
  }
  return (
    <button type='button' onClick={openModal} className={`py-4 px-6  bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button