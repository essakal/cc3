import React from 'react'
import axios from "axios";
import './users.css'

import { useEffect, useState } from "react";

function Acceuil() {
    const [user, setUser] = useState([]);
    const [todos, setTodos] = useState([]);
    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [info, setInfo] = useState(0);
    const [t, setT] = useState(0);
    const [t1, setT1] = useState([]);


    useEffect(() => {
        axios.get(`https://dummyjson.com/users`)
            .then(res => {
                setUser(res.data.users);
            })
            .catch((e) => {
                console.log("error de telechargement")
            })
    }, [])
    useEffect(() => {
        axios.get(`https://dummyjson.com/todos`)
            .then(res => {
                setTodos(res.data.todos);
            })
            .catch((e) => {
                console.log("error de telechargement")
            })
    }, [])

    // const detail = (e) => {
    //     setBool1(true)
    // }
    const home = (e) => {
        setBool1(false)
        setBool2(false)
    }
    const tach = (e) => {
        setBool2(true)
    }


    if (!bool1 && !bool2) {
        return (

            <div>
                <div className='header'>
                    <h1>gestion des taches</h1>
                </div>
                <h3 className='title'>liste des ustilisateurs</h3>
                <div className='users'>
                    {user.map(item =>
                        <div key={item.id} className="user">
                            <img src={item.image} alt="" />
                            <h2>{item.firstName} {item.lastName}</h2>
                            {/* <button onClick={detail}>Detail User</button> */}
                            <button onClick={()=>(setInfo(item.id-1), setBool1(true))}>Detail User</button>
                            {/* <button onClick={tach}>List des taches</button> */}
                            <button onClick={()=>(setT(item.id-1), setBool2(true))}>List des taches</button>
                        </div>
                    )}
                </div>
            </div>
        )
    } else {
        if (bool1) {
            return (
                <div>
                    <div className='info'>
                        <img src={user[info].image} alt="img" />
                        <h2>firstname: {user[info].firstName}</h2>
                        <h2>lastname: {user[info].lastName}</h2>
                        <h2>age: {user[info].age}</h2>
                        <h2>gender: {user[info].gender}</h2>
                        <h2>email: {user[info].email}</h2>
                        <h2>phone: {user[info].phone}</h2>
                        <h2>poids: {user[info].weight}kg</h2>
                        <h2>hauteur: {user[info].height}cm</h2>
                        <h2>date naissance: {user[info].birthDate}</h2>
                        <h2>groupe sanguin: {user[info].bloodGroup}</h2>
                        <h2>couleur de l'œil: {user[info].eyeColor}</h2>
                        <button onClick={home}>home</button>
                    </div>
                </div>
            )

        }
        else {
            return (
                <div className='todo'>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>todo</th>
                                <th>completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(item =>
                                <tr key={item.id}>
{/* 
                                    {item.userId===1 ? 
                                    <div>yes</div> : <div>non</div>} */}

                                    <td><div>{item.todo}</div></td>
                                    <td><div>
                                        {item.completed===true ? <p>yes</p> : <p>non</p>}
                                    </div></td>

                                </tr>
                            )}
                            {/* {todos.filter(item=>(item===3).map(item=>(
                                <div>{item.todo}</div>
                            )
                            ))} */}
                        </tbody>


                    </table>

                    <button onClick={home}>home</button>
                </div>
            )
        }
    }

}


export default Acceuil;