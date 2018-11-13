import React from 'react'

const List = (props) => {
    const {items , deleteItem} = props;
    let length = items.length

    const itemsMap = length ? items.map(
        item => {
            return (
                <tr  key={item.id} >
                    <td>{item.name}</td>
                    <td>{item.priority}</td>
                    <td onClick={() => deleteItem(item.id)} ><button type="button" className="btn btn-danger">Delete</button></td>
              </tr>
            )
        }
    ) : (<tr><td className='text-center' colSpan='3'>No Data found</td></tr>)
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <React.Fragment>
                    {itemsMap}
                </React.Fragment>
            </tbody>
        </table>
    )
}

export default List