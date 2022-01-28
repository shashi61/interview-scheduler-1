import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import "components/InterviewerList.scss";

const InterviewerList = (props) => {

    const arrayOfInterviewers = props.interviewers;
    const parsedInterviewersListItems = arrayOfInterviewers.map(interviewerListItem => {

        return (
            <ul key={interviewerListItem.id} >
                <InterviewerListItem
                    key={interviewerListItem.id}
                    name={interviewerListItem.name}
                    avatar={interviewerListItem.avatar}
                    selected={interviewerListItem.id === props.interviewer}
                    setInterviewer={(event) => props.setInterviewer(interviewerListItem.id)} 
                />
            </ul>)

    });
    return(
    <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{ parsedInterviewersListItems }</ul>
    </section>
    );
}

export default InterviewerList;