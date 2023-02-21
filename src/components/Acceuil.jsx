import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import ListeToDo from './ListTodo';
import "./Acceuil.css"

export default function Accueil() {
    return (
        <div>
            <div className='header'>
                <h1>Gestion des taches</h1>
            </div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListeToDo/:id' element={<ListeToDo/>} />
            </Routes>
        </div>
    )
}