import "./App.css";
import ProfileComponent from "./profile/profileComponent";

function App() {
  const handleName = (name) => {
    alert(`Hi it s ${name}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ProfileComponent
          profession="Full Stack Web Developer"
          bio="Highly competent Full-Stack web developer helping clients create, design Websites and remake
existing sites according to their willing...Proven ability data scientist to gain the clients trust ."
          handleName={handleName}
        >
          <img src="./assets/avatar.jpg" alt="profilePic" width="100" />
        </ProfileComponent>
      </header>
    </div>
  );
}

export default App;
