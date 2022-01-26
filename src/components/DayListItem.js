import React from "react";
import classNames from "classnames"
import "components/DayListItem.scss";

export default function DayListItem(props) {
    const dayClass = classNames("day-list__item", {
        "day-list__item--selected": props.selected,
        "day-list__item--full": props.spots === 0
      });
    // const remainingSpots = (spots) => {
    //  let str;
    //  if(spots > 1){
    //      str = `${spots} spots remaining`;
    //  }
    //  else if (spots === 1) {
    //     str = `1 spot remaining`;
    //   } 
    //   else if (spots === 0) {
    //     str = `no spots remaining`;
    //   }
  
    //   return str;
    // }

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} remaining</h3>
    </li>
  );
}