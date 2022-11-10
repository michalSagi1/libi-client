import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Input from '../Input';
import Select from '../Select';


function StudentDetails({ setData, student }) {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));
    }


    return (
        <div className="accordionContainer">
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>פרטים אישיים של החניך</Accordion.Header>
                    <Accordion.Body>
                        <Input defaultValue={student?.firstName} placeholder={"שם פרטי"} required={true} name={"firstName"} onChange={handleChange} />
                        <Input defaultValue={student?.lastName} placeholder={"שם משפחה"} required={true} name={"lastName"} onChange={handleChange} />
                        <Input defaultValue={student?.id} placeholder={"תעודת זהות"} required={true} name={"id"} type={"number"} onChange={handleChange} />
                        <Select defaultValue={student?.gender} placeholder={"מין"} required={true} options={["זכר", "נקבה"]} name={"gender"} onChange={handleChange} />
                        <Input defaultValue={student?.date} placeholder={"תאריך לידה"} required={true} name={"DateOfBirth"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={handleChange} />
                        <Input defaultValue={student?.phone} placeholder={"טלפון (רשות)"} required={false} name={"phone"} type={"number"} onChange={handleChange} />
                        <Input defaultValue={student?.email} placeholder={"(רשות) אימייל"} required={false} name={"email"} type={"email"} onChange={handleChange} />
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div >
    );
}

export default StudentDetails;