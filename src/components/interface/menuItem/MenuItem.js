export function MenuItem(props){

    const data = props.data;
    // console.log(data)

    return(
        <>
            {
                data.name === 'Save progress'
                ? /*<button onClick={data.onClickAction}>{data.name}</button>*/ data.onClickAction()
                : <button onClick={data.onClickAction}>{data.name}</button>
            }
        </>
    );
}