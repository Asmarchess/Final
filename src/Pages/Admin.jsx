import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FcLike } from "react-icons/fc";


export const Admin = () => {
    const [dataget, setdataget] = useState([])
    const [search, setsearch] = useState("")
    const [filter, setfilter] = useState("normal")

    useEffect((data) => {
        fetch('http://localhost:8000/alveer/', data)
            .then(res => res.json())
            .then(dataget => setdataget(dataget))
    }, []);

    const deletegeetchange = function (ids) {
        axios.delete('http://localhost:8000/alveer/' + ids)
    }

    const addFavorits = (id) => {
        axios.get('http://localhost:8000/alveer/' + id).then(
            res => axios.post('http://localhost:8000/favorits/', res.data)
        )
    }

    const serachdata = () => {
        let cardFiltered;
        if(filter =='artan'){
            cardFiltered=dataget.toSorted((a,b)=>Number(a.money)-Number(b.money))
        }else if(filter=='azalan'){
            cardFiltered=dataget.toSorted((a,b)=>b.money-a.money)
        }else{
            cardFiltered=[...dataget]
        }
        return cardFiltered.filter(inf => inf.name.toUpperCase().startsWith(search.toUpperCase()))
    }
    let cards=serachdata()

    return (
        <>
            <div className='container m-3 adminad'>
                <Link to='/Add' className='btn btn-primary m-3'>Add</Link>
            </div>

            <div className='container searcadmin'>
                <input type="text" placeholder='Search Name' onInput={(e) => setsearch(e.target.value)} />
                <select className='p-1'>
                    <option value="normal">Normal</option>
                    <option value="artan">Artan</option>
                    <option value="azalan">Azalan</option>
                </select>
            </div>

            <table className='mt-2'>

                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>money</th>
                        <th>Wishlist</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(elemet => {
                        return (
                            <tr key={elemet.id}>
                                <td>{elemet.id}</td>
                                <td><img src={elemet.img} alt="" className='datagetiimg' /></td>
                                <td>{elemet.name}</td>
                                <td>{elemet.money}</td>
                                <td><button className='btn btn-primary p-3' onClick={() => addFavorits(elemet.id)} ><FcLike style={{ fontSize: '30px' }} /></button></td>
                                <td>
                                    <Link to={'/Edit/' + elemet.id}><button className='btn btn-primary'>Edit</button></Link></td>
                                <td><button onClick={() => deletegeetchange(elemet.id)} className='btn btn-primary'>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}
