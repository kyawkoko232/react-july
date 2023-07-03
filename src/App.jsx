import ProfileCard from "./ProfileCard";

function App(){
  return(
    <div>
      <div>Digital Assitant</div>
      <ProfileCard name="Kyaw Ko Ko" title="Alexa" handle="@alexa" />
      <ProfileCard name="object destruct" title="siri" handle="siri" />
      <ProfileCard name="array destruct" title="chatgpt" handle="chatgpt" />

    </div>
  )
}

export default App;