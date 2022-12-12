import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailUser() {
    const [user, setUser] = useState([]);

    useEffect(() => {

        axios.get(`https://dummyjson.com/users`)
            .then(res => {
                setUser(res.data.users);
            })
            .catch((e) => {
                console.log("error de telechargement")
            })



    }, [])

  return (
    <div>{user[1].id}</div>
  )
}
