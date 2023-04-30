
import './bag-item.css'

export function BagItem(props){

    // console.log(props)
    const [data, hoverAction, setVisibilityInfoContainer] = props.data;

    return(
        <div className="bag-item" 
             style={{backgroundImage : `url(${data["obj-icon"]})`}} 
             onMouseOver={() => {hoverAction(data['obj-name']);
                                 setVisibilityInfoContainer(false);}}
             onMouseLeave={() => setVisibilityInfoContainer(true)}
        >
        </div>
    );
}