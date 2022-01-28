import React from "react";
import "components/InterviewerListItem.scss";


const InterviewerListItem = (props) => {
    let interviewerClass = "interviewers__item";
   if(props.selected){
      interviewerClass += " interviewers__item--selected";
   }
    return (
        <li className={interviewerClass} onClick={() => props.setInterviwer(props.id)} selected={props.selected} >
            <img
                className="interviewers__item-image"
                src={props.avatar}
                alt={props.name}
            />
            {props.selected && props.name}
        </li>
    );
}
export default InterviewerListItem;