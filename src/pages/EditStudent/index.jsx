import React, { useState, useEffect, useRef } from 'react'
import SwitchBtn from '../../components/common/SwitchBtn/SwitchBtn';
import styles from "./style.module.css"
import { daycare, students } from '../../fakeData';
import StudentDetails from '../../components/common/Accordions/StudentDetails'
import ContactDetails from '../../components/common/Accordions/Contacts'
import AboutStudent from '../../components/common/Accordions/AboutStudent';
import Medications from '../../components/common/Accordions/medications';
import Accordions from '../../components/common/Accordions/files';



function EditStudent() {
    const student = students[0]
    const [data, setData] = useState(student);
    const [status, setStatus] = useState(true)




    const [listContactEdit, setListContactEdit] = useState(student.contact.map(e => ({ contactFirstName: e.contactFirstName, contactLastName: e.contactLastName, contactPhone: e.contactPhone, contactEmail: e.contactEmail, relative: e.relative, comment: e.comment, apotropus: e.apotropus })));
    const [listMedicationEdit, setListMedication] = useState(student.medication.map(e => ({ name: e.name, time: e.time })));

    const removeContactEdit = (index) => {
        const newList = [...listContactEdit]
        newList.splice(index, 1);
        setListContactEdit(newList);
        // return (
        //     delete data.contact[`contactFirstName${index + 1}`],
        //     delete data.contact[`contactLastName${index + 1}`],
        //     delete data.contact[`contactPhone${index + 1}`],
        //     delete data.contact[`relative${index + 1}`])
        return (
            data.contact[`contactFirstName${index + 1}`] = "delete",
            data.contact[`contactLastName${index + 1}`] = "delete",
            data.contact[`contactPhone${index + 1}`] = "delete",
            data.contact[`relative${index + 1}`] = "delete")
    }

    // const addMedication = () => {
    //     setListMedication([...listMedication, { med: "" }])
    // }

    // const removeMedication = (index) => {
    //     const newList = [...listMedication]
    //     newList.splice(index, 1);
    //     setListMedication(newList);
    //     // return (
    //     //     delete data.medication[`medication${index + 1}`],
    //     //     delete data.medication[`medicationTime${index + 1}`])
    //     return (
    //         data.medication[`medication${index + 1}`] = "delete",
    //         data.medication[`medicationTime${index + 1}`] = "delete")
    // }

    const submit = () => {
        console.log(data)
    }

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setData(values => ({ ...values, [name]: value }));

    // }
    // const handleChangeDate = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setFile(values => ({ ...values, [name]: value }));
    // }
    // const handleChangeContact = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setContact(values => ({ ...values, [name]: value }));
    // }
    // const handleChangeMedication = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setMedication(values => ({ ...values, [name]: value }));
    // }

    useEffect(() => {
        const name = "status";
        const value = status
        setData(values => ({ ...values, [name]: value }));
    }, [status])

    // useEffect(() => {
    //     const name = "files"
    //     const value = file
    //     setData(values => ({ ...values, [name]: value }));
    // }, [file])
    // useEffect(() => {
    //     const name = "contact"
    //     const value = contact
    //     setData(values => ({ ...values, [name]: value }));
    // }, [contact])
    // useEffect(() => {
    //     const name = "medication"
    //     const value = medication
    //     setData(values => ({ ...values, [name]: value }));
    // }, [medication])


    // const onChangeFile = (e) => {
    //     const name = e.target.name
    //     const fileSize = (e.target.files[0].size / 1000) + "KB";
    //     setFile((current) => ({
    //         ...current,
    //         [name]: {
    //             fileName: e.target.files[0].name,
    //             size: fileSize,
    //             type: e.target.files[0].type
    //         }
    //     })
    //     )
    // }

    return (
        <div className={styles.main}>
            {/* <form > */}
            <div className={styles.title}>?????????? ???????? ????????
                <div className={styles.save}>
                    <SwitchBtn label={"?????????? ????????"} status={status} setStatus={setStatus} />
                    <button name="submit" className={styles.btnadd} onClick={() => submit()} >??????????</button>
                </div>
            </div>
            <div className={styles.createStudent}>
                <div className={styles.containers}>
                    <div className={styles.container}>

                        <StudentDetails setData={setData} student={student} />

                    </div>

                    <div className={styles.container}>


                        <ContactDetails listContactEdit={listContactEdit} setListContactEdit={setListContactEdit} setData={setData} data={data} removeContactEdit={removeContactEdit} />

                    </div>
                </div>

                <div className={styles.containers}>
                    <div className={styles.container}>
                        {/* <div className={styles.subTitle}>?????????? ????????????????</div>
                            <File defaultValueDate={student.file[0]?.date} placeholder={"?????????? ???????????? ??????????"} name={"pictures"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                            <File defaultValueDate={student.file[1]?.date} placeholder={"?????????? ??????????????????"} name={"psychological"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                            <File defaultValueDate={student.file[2]?.date} placeholder={"?????????? ??????????????????"} name={"psychiatric"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} />
                            <File defaultValueDate={student.file[3]?.date} placeholder={"?????????? ??????????"} name={"welfare certificate"} onChangeDate={handleChangeDate} onChangeFile={onChangeFile} /> */}
                        <AboutStudent student={student} setData={setData} />





                    </div>

                    <div className={styles.container}>

                        <Medications listMedicationEdit={listMedicationEdit} setData={setData} data={data} />


                    </div>



                </div>
                <div className={styles.containers}>
                    <div className={styles.container}>

                        <Accordions student={student} setData={setData} data={data} />
                    </div>
                </div>

            </div>
            {/* </form> */}
        </div>
    )
}

export default EditStudent