import logo from './logo.svg';
import './App.css';
function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div className="profile-image">
    <img src={employee.profileImg}></img>

  </div>
  <div className="tittle">

    <h1>{employee.name}</h1>
  </div>
  <div className="tittle">
  <label> Location </label>
    <h5>{employee.location}</h5>
  </div>
  <div className="tittle">
  <label> BloodGroup </label>
    <h5>{employee.bloodGroup}</h5>
  </div>
  <div className="tittle">
  <label> Age </label>
    <h5>{employee.age}</h5>
  </div>

</div>
)
}
export default App;