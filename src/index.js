import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Profile(){
  return(
    <div className="profile section">
      <img src="./images/AbubakarIbrahim.jpg" alt="" id="profile__img" />
      <p id="twitter">elitehubngr</p>
      <p className="slack">iabbakr</p>
    </div>
  )
}
function Link(){
  return(
    <div className="links section">
      <button id="btn__zuri">
        <a href="https://training.zuri.team/" target="_blank">
        Twitter Link
        </a>
      </button>
      <button id="books">
        <a href="http://books.zuri.team" target="_blank">
        Zuri Team
        </a>
      </button>
      <button id="book__python">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" target="_blank">
        Zuri Books
        </a>
      </button>
      <button id="pitch">
        <a href="https://background.zuri.team" target="_blank">
        Python Books
        </a>
      </button>
      <button id="book__design">
        <a href="https://books.zuri.team/design-rules" target="_blank">
        Background Check for Coders
        </a>
      </button>

    </div>
  )

}

const page = (

    <div>  
      <Profile />
      <Link />
    </div>
  
      
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
