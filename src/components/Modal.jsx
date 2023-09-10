import { useDispatch, useSelector } from "react-redux";
import { activeAction } from "../redux/btnGetStart";
import Notiflix from 'notiflix';

const Modal = () => {
    const dispatch = useDispatch();
    const activeState = useSelector(state => state.active);
    const onClickModal = () => {
       dispatch(activeAction(false));
    }
   
    return (
        <div className={activeState ? 'active' : 'modal'} onClick={onClickModal}>
            <form className="form bg-black-gradient-2"  onClick={e => e.stopPropagation()}>
                <label htmlFor="name" className="input_label font-poppins
                font-medium text-[18px]
                text-primary">
                    Name
                    <input
                        className="form_input"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
                </label>
                <label htmlFor="email" className="input_label font-poppins
                font-medium text-[18px]
                text-primary">
                    Email
                    <input
                        className="form_input"
                        type="email"
                        name="email" />
                </label>
                <label htmlFor="comment" className="input_label font-poppins
                font-medium text-[18px]
                text-primary">
                    Comment
                    <textarea className="form_comment" name="comment" cols="30" rows="10">

                    </textarea>
                </label>

                <button type='submit' className={`
                py-4
                px-6
                bg-blue-gradient
                font-poppins
                font-medium text-[18px]
                text-primary
                outline-none 
                mt-10 
                flex-center
                rounded-[10px]
                transition-colors`}>
                    Get Started
                </button>
            </form>
          </div>
    )
}

export default Modal