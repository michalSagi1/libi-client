import React, { useEffect, useState } from 'react'
import Input from '../../../components/common/Input';
import File from '../../../components/common/File'
import remove from '../../../images/delete.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function InnerAcc_para({ service, arrfile = [], data, index_ }) {
    let _data;
    if (data) {
        if (service === "speech") {
            _data = data?.speech[1]?.years[0]
            console.log(_data[index_].weekly_summary);
        }
        else if (service === "occupation") {
            _data = data?.occupation[1]?.years[0]

        }
        else if (service === "physiotherapy") {
            _data = data?.physiotherapy[1]?.years[0]

        }

        arrfile = _data[index_].files
    }
    // console.log(_data[index_]?.start.date)
    // console.log(_data)

    const [listInput, setListInput] = useState(data ? _data[index_].weekly_summary : [{ input: "" }]);

    const addInput = () => {
        setListInput([...listInput, { input: "" }])
    }
    const removeInput = (index) => {
        const newList = [...listInput]
        newList.splice(index, 1);
        setListInput(newList);
        // return (
        //     delete fileOp[`file optionaly ${index + 1}`]
        // )
    }
    const [file, setFile] = useState([]);
    const [weekly_summary, setweekly_summary] = useState({ service });
    const [start, setStart] = useState({ service });
    const [middle, setMiddle] = useState({ service });
    const [end, setEnd] = useState({ service });
    const [tsa, setTsa] = useState({ service });
    const [send, setSend] = useState(true);

    let able = []
    if (data) {
        listInput.map((e, index) => able.push(index))
    }

    useEffect(() => {
        if (able.length > 0) {
            setSend(!send)
        }
    }, [])


    const [disable, setDisable] = useState(data ? able : [])

    const onChangeFile = (e) => {
        const name = e.target.name
        const fileSize = (e.target.files[0].size / 1000) + "KB";
        file.push({ service, name: name, file: e.target.files[0].name })

    }


    return (
        <div className="container">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="??????????">
                    <div className="subTitle">?????????? </div>

                    <div className='files'>
                        {arrfile.map((e, index) => {
                            return (
                                <>
                                    <File placeholder={data ? e.fileName : e.name} name={data ? e.fileName : e.name} onChangeFile={onChangeFile} />
                                    <button onClick={() => console.log(file)} className="up">V</button>

                                </>
                            )
                        })}
                    </div>
                </Tab>
                <Tab eventKey="1" title="?????????? ?????????? ?????????? ">
                    <div className="subTitle">?????????? ?????????? ?????????? </div>
                    <div className='title_'>
                        <button disabled={send} onClick={() => { addInput(); setSend(!send) }} className="btnadd">?????????? ????"??  +</button>
                    </div>

                    <div className='filesOp'>
                        {listInput.map((x, index) => {
                            return (
                                <>
                                    <div className="inputs">
                                        <Input defaultValue={x?.date} disabled={disable.includes(index)} placeholder={"?????????? "} required={true} name={"??????????"} onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setweekly_summary({ ...weekly_summary, date: e.target.value })} />
                                        <textarea defaultValue={x?.content} className='textarea_daycare' disabled={disable.includes(index)} placeholder={"??????????, ???????? ??????????, ??????????..."} onChange={(e) => setweekly_summary({ ...weekly_summary, content: e.target.value })} />
                                        <Input defaultValue={x?.author} disabled={disable.includes(index)} placeholder={"???? ??????????/??"} required={true} name={"author"} onChange={(e) => setweekly_summary({ ...weekly_summary, author: e.target.value })} />

                                        {!disable.includes(index) && <button onClick={() => { console.log({ weekly_summary, index }); setDisable([...disable, index]); setSend(!send) }} className="up">V</button>}
                                    </div>
                                </>
                            )
                        })}
                    </div>



                </Tab>
                <Tab eventKey="2" title="????''?? ?????????? ??????????">
                    <div className="subTitle">????"?? ?????????? ??????????</div>
                    <div className="inputs">
                        <Input defaultValue={data ? _data[index_]?.start?.date : ""} placeholder={"?????????? "} required={true} name={"??????????"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setStart({ ...start, date: e.target.value })} />
                        <textarea defaultValue={data ? _data[index_]?.start.content : ""} className='textarea_daycare_1' placeholder={"?????? ?????????? ??????????..."} onChange={(e) => setStart({ ...start, content: e.target.value })} />
                        <Input defaultValue={data ? _data[index_]?.start.author : ""} placeholder={"???? ??????????/??"} required={true} name={"author"} onChange={(e) => setStart({ ...start, author: e.target.value })} />

                        <button onClick={() => console.log({ start })} className="btnadd">??????????</button>

                    </div>
                </Tab>
                <Tab eventKey="3" title="????''?? ???????? ??????????">
                    <div className="subTitle">????"?? ???????? ??????????</div>
                    <div className="inputs">
                        <Input defaultValue={data ? _data[index_]?.middle.date : ""} placeholder={"?????????? "} required={true} name={"??????????"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setMiddle({ ...middle, date: e.target.value })} />
                        <textarea defaultValue={data ? _data[index_]?.middle.content : ""} className='textarea_daycare_1' placeholder={"?????? ???????? ??????????..."} onChange={(e) => setMiddle({ ...middle, content: e.target.value })} />
                        <Input defaultValue={data ? _data[index_]?.middle.author : ""} placeholder={"???? ??????????/??"} required={true} name={"author"} onChange={(e) => setMiddle({ ...middle, author: e.target.value })} />

                        <button onClick={() => console.log({ middle })} className="btnadd">??????????</button>

                    </div>                </Tab>
                <Tab eventKey="4" title="??''???? ?????????? ??????????" >
                    <div className="subTitle">????"?? ?????????? ??????????</div>
                    <div className="inputs">
                        <Input defaultValue={data ? _data[index_]?.end.date : ""} placeholder={"?????????? "} required={true} name={"??????????"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setEnd({ ...end, date: e.target.value })} />
                        <textarea defaultValue={data ? _data[index_]?.end.content : ""} className='textarea_daycare_1' placeholder={"?????? ?????????? ??????????..."} onChange={(e) => setEnd({ ...end, content: e.target.value })} />
                        <Input defaultValue={data ? _data[index_]?.end.author : ""} placeholder={"???? ??????????/??"} required={true} name={"author"} onChange={(e) => setEnd({ ...end, author: e.target.value })} />

                        <button onClick={() => console.log({ end })} className="btnadd">??????????</button>

                    </div>               </Tab>
                <Tab eventKey="5" title="?????????? ?????????? ????????????">
                    ?????? ??????
                </Tab>
                <Tab eventKey="6" title="????''??">
                    <div className="subTitle">????"??</div>
                    <div className="inputs">
                        <Input defaultValue={data ? _data[index_]?.tsa.date : ""} placeholder={"?????????? "} required={true} name={"??????????"} onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} onChange={(e) => setTsa({ ...tsa, date: e.target.value })} />
                        <textarea defaultValue={data ? _data[index_]?.tsa.content : ""} className='textarea_daycare_1' placeholder={"  ????''??..."} onChange={(e) => setTsa({ ...tsa, content: e.target.value })} />
                        <Input defaultValue={data ? _data[index_]?.tsa.author : ""} placeholder={"???? ??????????/??"} required={true} name={"author"} onChange={(e) => setTsa({ ...tsa, author: e.target.value })} />

                        <button onClick={() => console.log({ tsa })} className="btnadd">??????????</button>

                    </div>                </Tab>

            </Tabs>

        </div>
    )
}

export default InnerAcc_para