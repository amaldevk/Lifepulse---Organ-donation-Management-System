import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import '@fortawesome/fontawesome-free/css/all.css';
import NavBar from './components/NavBar';

import DonorPage from './components/DonorPage';
import ViewDonor from './components/ViewDonor';
import PatientPage from './components/PatientPage';
import ViewPatient from './components/ViewPatient';
import DonorSearch from './components/DonorSearch';
import PatientSearch from './components/PatientSearch';
import SearchParent from './components/SearchParent';
import MatchResult from './components/MatchResult';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/reg' element={<Registration/>} />
        <Route path='/nav' element={<NavBar/>} />
        <Route path='/donreg' element={<DonorPage/>} />
        <Route path='/viewdonor' element={<ViewDonor/>} />
        <Route path='/patreg' element={<PatientPage/>} />
        <Route path='/viewpatient' element={<ViewPatient/>}/>
        <Route path='/searchdonor' element={<DonorSearch/>} />
        <Route path='/searchpatient' element={<PatientSearch/>} />
        <Route path='/search' element={<SearchParent/>} />
        <Route path='/match' element={<MatchResult/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
