import react from 'react'

const listItem = "Manish how are you..."

const List = (prob) =>{
    return (
        <>
            <div className='item'>
                <span>X</span>
                <li className='list'>{prob.text}</li>
            </div>
        </>
    )
}

export default List;