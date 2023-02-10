import { NavLink } from 'react-router-dom';
import './ListTable.css';
const ListTable = ({ cols, colNames, data, link, id }) => {
    return (
        <div className="tableContainer">
            <table className="table">
                <tbody>
                    <tr>
                        {cols.map((col, index) => (
                            <th className='theading' key={index}>{col.toUpperCase()}</th>
                        ))}
                    </tr>
                    {data.map((row, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{row[colNames[0]]}</td>
                                <td>
                                    <NavLink to={link + row[id]}>  {row[colNames[1]]}</NavLink>

                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default ListTable;