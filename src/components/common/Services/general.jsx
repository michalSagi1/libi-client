import React, { useState } from 'react'
import BasicFiles from './basic'

function General({ setData, data, student }) {
    const [general, setGeneral] = useState({})

    const submit = () => {
        const name = "general"
        const value = general
        setData(values => ({ ...values, [name]: value }));
        console.log("done", data);
    }
    let arrfile = [{ name: "צילום ת.ז ילד/הורה", date: false }, { name: "ויתור סודיות", date: false }]
    if (data?.sensitivity?.sensitivity === "כן" || student?.sensitivity?.sensitivity === "כן") { arrfile.push({ name: "רגישות רפואית", date: true }) }

    return (
        <div>כללי
            <BasicFiles student={student} arrfile={arrfile} setService={setGeneral} onClick={submit} />
        </div>
    )
}

export default General