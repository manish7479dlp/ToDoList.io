import react from 'react'



const List = (prob) =>{
    return (
        <>
            <div className='item'>
                <span onClick={prob.onSelect}>X</span>
                <li className='list'>{prob.text}</li>
            </div>
        </>
    )
}

export default List;