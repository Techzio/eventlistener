import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {

  const[secretphrase,setSecretphrase] = useState()
  
  if(secretphrase == 'open sesame'){
    alert("You may pass")
  }

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>
      <p>{secretphrase}</p>
      <input type="text" placeholder="Super duper secret" 
      onChange = {e=>{setSecretphrase(e.target.value)}} />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
