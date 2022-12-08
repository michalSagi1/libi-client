import React, { useContext, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
import AccordionYears from './Accordion';
import Select from '../../components/common/Select';
import DayCare_General from './services/general';
import DayCare_Para from './services/Para';
import InnerAcc_general from './services/innerAc_general';
import DayCare_Services from './services/Services';
import UserContext from '../../context/UserContext';
import DayCare_Social from './services/social';

function Daycare({ data }) {
    const { user, setUser } = useContext(UserContext);

    const [dayCare, setDaycare] = useState({})
    const [years, setYears] = useState([{ year: 2022 }])
    const [year, setYear] = useState()

    const addYears = (year) => {
        const x = years.find(e => e.year == year)
        if (!x) {
            setYears([...years, { year: Number(year) }])
        }
        console.log(years);
    }

    const currentYear = new Date().getFullYear();

    const [speech, setSpeech] = useState("speech")
    const [occupation, setOccupation] = useState("occupation")
    const [physiotherapy, setPhysiotherapy] = useState("physiotherapy")

    const [teacher, setTeacher] = useState("teacher")
    const [medical, setMedical] = useState("medical")
    const [dietician, setDietician] = useState("dietician")




    return (
        <div className="daycare">
            <Tabs
                defaultActiveKey="0"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="0" title="כללי">
                    <DayCare_General data={data} />
                    <div className='years'>
                        <div className='title'>
                            <div className='subTitle'>:הוספת שנה</div>
                            <Select placeholder={"הוסף שנה..."} options={[currentYear, currentYear + 1]} onChange={(e) => setYear(e.target.value)} />
                            <button onClick={() => addYears(year)}>הוספה</button>
                        </div>
                    </div>
                    <AccordionYears years={years} children={<InnerAcc_general data={data} />} />

                </Tab>
                <Tab eventKey="1" title="קלינאות תקשורת">
                    <DayCare_Para years={years} data={data} service={speech} />
                </Tab>
                <Tab eventKey="2" title="ריפוי בעיסוק">
                    <DayCare_Para years={years} data={data} service={occupation} />
                </Tab>
                <Tab eventKey="3" title="פיזיותרפיה">
                    <DayCare_Para years={years} data={data} service={physiotherapy} />

                </Tab>
                <Tab eventKey="4" title="עובדת סוציאלית" disabled={user.userName !== "שלומית"}>
                    <DayCare_Social years={years} data={data} />
                </Tab>
                <Tab eventKey="5" title="תזונה">
                    <DayCare_Services years={years} data={data} service={dietician} />
                </Tab>
                <Tab eventKey="6" title="גננת">
                    <DayCare_Services years={years} data={data} service={teacher} />
                </Tab>
                <Tab eventKey="7" title="רפואי">
                    <DayCare_Services years={years} data={data} service={medical} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Daycare