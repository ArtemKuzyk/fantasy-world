
import { useDispatch, useSelector } from 'react-redux';
import { bagItemDisplayFalse, bagItemDisplayTrue, bagItemSetText, bagItemSetActionId } from '../../../store/bagItemSlice'
import './bag-item.css'

export function BagItem(props){

    // console.log(props.data)
    const [data, hoverAction, setVisibilityInfoContainer] = props.data;
    const dispatch = useDispatch();

    const handleItemClick = (data) => {
        dispatch(bagItemDisplayTrue());
        dispatch(bagItemSetText({text : data['obj-name']}));
        dispatch(bagItemSetActionId({actionId : data['obj-store-name']}));
    }

    return(
        <div className="bag-item" 
             style={{backgroundImage : `url(${data["obj-icon"]})`}} 
             onMouseOver={() => {hoverAction(data['obj-name']);
                                 setVisibilityInfoContainer(false);}}
             onMouseLeave={() => setVisibilityInfoContainer(true)}
             onClick={() => handleItemClick(data)}
        >
        </div>
    );
}