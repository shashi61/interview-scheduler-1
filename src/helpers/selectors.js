function getAppointmentsForDay(state, day) {
    let dayObject = state.days.find((dayElem) => dayElem.name === day);
  
    if (!dayObject) {
      return [];
    }
  
    let appointments = dayObject.appointments.map((appointment) => {
      let appointmentList = state.appointments[appointment];
      return appointmentList;
    });
    return appointments;
}

export default getAppointmentsForDay;




