import React from 'react'
import styles from "./style.module.css"
import students from '../../fakeData'
import { useLocation } from 'react-router-dom';



function StudentView() {
    const student = students[0]
    const location = useLocation()
    let missingFiles = location.state

    console.log("view", missingFiles);

    return (
        <div>
            <div className={styles.titleStudent}> {student.firstName + " " + student.lastName}</div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>ת.ז: </span>{student.id}</div>
                            <div className={styles.line}>  <span className={styles.question}>מין: </span>{student.gender}</div>
                            <div className={styles.line}>  <span className={styles.question}>תאריך לידה: </span>{student.date}</div>
                        </div>
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>ישוב: </span>{student?.address?.city == "אחר" ? student?.address?.other : student?.address?.city}</div>
                            <div className={styles.line}>  <span className={styles.question}>כתובת: </span>{student?.address?.address}</div>
                            <div className={styles.line}>  <span className={styles.question}>קופת חולים: </span>{student?.hmo}</div>
                            <div className={styles.line}>  <span className={styles.question}>רגישות רפואית: </span>{student?.sensitivity?.sensitivity + ". " + student?.sensitivity?.more}</div>
                        </div>
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>טלפון: </span>{student?.phone}</div>
                            <div className={styles.line}>  <span className={styles.question}>אימייל: </span>{student?.email}</div>
                        </div>
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>שירותים: </span>{student?.arrServices.map(e => e != "כללי" ? "▪️" + e + " " : "")}</div>
                        </div>
                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>מוכר בשירות: </span>{student?.service.map(e => "▪️" + e + " ")}</div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.title}>אנשי קשר</div>
                        {student.contact.map((e, index) => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <span className={styles.question}>{index + 1 + " |"}</span>
                                    <div className={styles.line}>  <span className={styles.question}>שם: </span>{e.contactFirstName + " " + e.contactLastName}</div>
                                    <div className={styles.line}>  <span className={styles.question}>טלפון: </span>{e.contactPhone}</div>
                                    <div className={styles.line}>  <span className={styles.question}>אימייל: </span>{e.contactEmail}</div>
                                    <div className={styles.line}>  <span className={styles.question}>קרבה: </span>{e.relative}</div>
                                    <div className={styles.line}>  <span className={styles.question}>הערות: </span>{e?.comment}</div>
                                    {e.apotropus &&
                                        <div className={styles.line}>  <span className={styles.question}>אפוטרופוס: </span>כן</div>}
                                </div>
                            </>
                            )
                        })}
                    </div>
                    <div className={styles.box}>
                        <div className={styles.title}>טיפול תרופתי</div>
                        {student.medication.map((e, index) => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <span className={styles.question}>{index + 1 + " |"}</span>
                                    <div className={styles.line}>  <span className={styles.question}>התרופה: </span>{e.name}</div>
                                    <div className={styles.line}>  <span className={styles.question}>שעת נטילה: </span>{e.time}</div>
                                </div>
                            </>
                            )
                        })}
                    </div>


                </div>

                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.title}>מטרות ויעדים</div>

                        <div className={styles.subContainer}>
                            <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student.textA}</div>
                        </div>

                        <div className={styles.subContainer}>

                            <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student.textB}</div>
                        </div>
                        <div className={styles.subContainer}>

                            <div className={styles.line}>  <span className={styles.question}>▪️ </span>{student.textC}</div>
                        </div>

                    </div>

                    <div className={styles.boxFile}>
                        <div className={styles.title}>אישורים וטפסים</div>
                        {student.general.files.map(e => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span> {e.date + " " + e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.general.filesOp?.map(e => {
                            return (<>

                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span>{e.file}</div>
                                </div>
                            </>
                            )
                        })}

                        {student.employment?.files.map(e => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span> {e.date + " " + e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.employment?.filesOp?.map(e => {
                            return (<>

                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span>{e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.daycare?.files.map(e => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span> {e.date + " " + e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.daycare?.filesOp?.map(e => {
                            return (<>

                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span>{e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.club?.files.map(e => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span> {e.date + " " + e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.club?.filesOp?.map(e => {
                            return (<>

                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span>{e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.housing?.files.map(e => {
                            return (<>
                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span> {e.date + " " + e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {student.housing?.filesOp?.map(e => {
                            return (<>

                                <div className={styles.subContainer}>
                                    <div className={styles.line}>  <span className={styles.question}>{e.name}: </span>{e.file}</div>
                                </div>
                            </>
                            )
                        })}
                        {missingFiles.length > 0 &&
                            <div className={styles.boxFile}>
                                <div className={styles.titleMissing}>חוסרים</div>

                                {missingFiles?.map(e => {
                                    return (<>

                                        <div className={styles.subContainer}>
                                            <div className={styles.line}>  <span className={styles.questionMissing}>{e} </span></div>
                                        </div>
                                    </>
                                    )
                                })}
                            </div>}
                    </div>


                </div>


            </div>
        </div>
    )
}

export default StudentView