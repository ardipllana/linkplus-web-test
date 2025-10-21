import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesConfig from '@routes/RoutesConfig';
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(RoutesConfig, {}) }));
}
export default App;
