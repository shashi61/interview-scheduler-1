import React from 'react';
import DayListItem from 'components/DayListItem';


const DayList = (props) => {

    const arrayOfDays = props.days;
    const parsedDayListItems = arrayOfDays.map(dayListItem => {

        return (
            <ul key={dayListItem.id} >
                <DayListItem
                    key={dayListItem.id}
                    name={dayListItem.name}
                    spots={dayListItem.spots}
                    selected={dayListItem.name === props.value}
                    // setDay={props.onChange}
                    setDay={props.onChange} 
                />
            </ul>)

    })
    return (
        <li>
            {parsedDayListItems}
        </li>
    )
}

export default DayList;