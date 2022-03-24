import React, { useState } from "react";
import UserCreate from "./components/UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  const onlanguagechange = (language) => {
    setLanguage(language);
  };
  return (
    <div className="ui container">
      <div className="larger">
        Select a language :
        <i className="flag us" onClick={() => onlanguagechange("english")} />
        <i className="flag nl" onClick={() => onlanguagechange("dutch")} />
      </div>
      <UserCreate />
    </div>
  );
};

export default App;
