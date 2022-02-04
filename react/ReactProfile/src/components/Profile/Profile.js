import  './Profile.css';

function Profile(props){
    return(
        <>
        <div className="profile">
            <div className="circle" style={{backgroundColor:`${props.color}`}}>
                <p className="short_name">{props.name}</p>
            </div>
           <p className="full_name">{props.fullname}</p>
        </div>
    </>

    );
}
export default Profile;