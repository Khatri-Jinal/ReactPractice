import Profile from "../Profile/Profile";
import "./ProfileContainer.css";
function ProfileContainer() {
  const names = [
    { id: 1, fullname: "Kruti shah", name: "KS",color:"lightgrey" },
    { id: 2, fullname: "Jinal Khatri", name: "JK",color:"lightpink" },
    { id: 3, fullname: "Janhvi Harwani", name: "JH",color:"lightgreen" },
    { id: 4, fullname: "Akshay Patel", name: "AP",color:"lightblue"  },
    { id: 5, fullname: "Harshil Pradhan", name: "HP" ,color:"lightyellow" },
  ];

  return (
    <div className="profile-container">
      <Profile name={names[0].name} fullname={names[0].fullname} color={names[0].color}/>
      <Profile name={names[1].name} fullname={names[1].fullname} color={names[1].color}/>
      <Profile name={names[2].name} fullname={names[2].fullname} color={names[2].color}/>
      <Profile name={names[3].name} fullname={names[3].fullname} color={names[3].color} />
      <Profile name={names[4].name} fullname={names[4].fullname} color={names[4].color}/>
      </div>
  );
}
export default ProfileContainer;
