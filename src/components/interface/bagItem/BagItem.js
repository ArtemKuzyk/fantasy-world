
import './bag-item.css'

export function BagItem(props){

    const data = props.data;
    // console.log(data)

    return(
        <div className="bag-item" style={{backgroundImage : `url(${data["obj-icon"]})`}}>

        </div>
    );
}