import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Cols from './Cols';
import Lifting from './Lifting';
import UseMAmo from './UseMAmo';
import REf from './REf';
import Forwordref from './Forwordref';
import Controlled from './Controlled';
import UnCrolled from './UnCrolled';
import HOC from './HOC';
import HO from './HOC';

function App() {
  const users = [
    { name: "jamshed", contact: "00000", email: "jamshed@gmail.com" },
    { name: "jamshed", contact: "00000", email: "jamshed@gmail.com" },
    { name: "jamshed", contact: "00000", email: "jamshed@gmail.com" },
    { name: "jamshed", contact: "00000", email: "jamshed@gmail.com" },

  ]
  let datas = "Jamshedddd"


  return (
    <div className="App">
      {/* <h1>Hello Users</h1>
      <table>
        <tbody>
          <tr>
           <Cols />
          </tr>
        </tbody>
      </table>

      <Lifting names={datas} />

      <UseMAmo /> */}


      {/* <REf /> */}
      {/* <Forwordref /> */}


      {/* <Controlled /> */}
      {/* <UnCrolled /> */}
      <HO />

    </div>
  );
}

export default App;
