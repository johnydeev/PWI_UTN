import React from "react"
import { Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import WorkspaceScreen from "./Screens/WorkspaceScreen";
import EstadosScreen from "./Screens/EstadosScreen";
function App() {

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/prueba" element={<h1>Hola soy una prueba</h1>} />
        <Route path="/workspace/:workspace_id" element={<WorkspaceScreen />} />
        <Route path="/estados" element={<EstadosScreen />} />
      </Routes>
    </div>
  );
}

export default App
