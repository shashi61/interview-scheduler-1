import React, { Fragment } from 'react'
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
// import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const Appointment = (props) => {
  
    return (
        <article className="appointment" > 
            <Fragment>
            <Header time={props.time}/>
                {
                    props.interview ?
                    <>

                    <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/>
                    </>
                    :
                    <>
                    <Header />
                    <Empty />
                    </>
                }
            </Fragment>
        </article>
    );
}
export default Appointment;