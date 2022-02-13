import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
function App() {
var arrow= "<"
var Appointments = {
  name: "Allen Ford",
  employeeid: '00005152',
  appoinmenton: '10:30(24-05-2016)',
  email: 'alan.form@gmail.nl',
  phone: +31123456789,
  status: 'In progress',
  Door: 'Mark',
  Time: '09:30(25-05-2016)',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  title: 'Software Engineer',
  description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document ",
  arrow1:">"

};
const App = () => {
  return (
    <div className="site-container">
    {/* Start Your code here */}
      <div className='top-content'>
        <label>{arrow}</label>
        <div className='candidates-info'>
          <strong>{Appointments.name}</strong>
          <label>{Appointments.employeeid}</label>
        </div>
        <button className='btn'>Print</button>
      </div>
      <div className='contact-info'>
        <div className='appoinment-details'>
        <div>
        <strong>Appointment On</strong>
        <label>{Appointments.appoinmenton}</label>
        </div>
        <div>
        <strong>Email:</strong>
        <label>{Appointments.email}</label>
        </div>
        <div>
        <strong>Phone:</strong>
        <label>{Appointments.phone}</label>
        </div>
        </div>
      </div>
      <div className='order-info'>
        <div className='status'>
          <strong>Status</strong>
          <ul>
            <li>{Appointments.status}</li>
          </ul>
        </div>
        <div className='common'>
          <strong>Door</strong>
          <label>{Appointments.Door}</label>
        </div>
        <div className='common'>
          <strong>Time</strong>
          <label>{Appointments.Time}</label>
        </div>
      </div>
      <div className="Botton-content">
        <input type="checkbox"></input>
        <img src={Appointments.profileImg} alt="imageofcand" width="100" height="100"></img>
        <div className='info'>
          <strong>{Appointments.title}</strong>
          <label>{Appointments.description}</label>
        </div>
        <div className='Arrow'>
          <p>{Appointments.arrow1}</p>
        </div>
      </div>
    </div>
  );
}
