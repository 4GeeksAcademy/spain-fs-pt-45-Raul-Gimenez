import './App.css'
import Buttons from "./components/Buttons.jsx"

function App() {
  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <Button 
      text = "Actual Earnings"
      color = "succes"
      />
      <Button 
      text = "Programmed Earnings"
      color = "succes"
      />
      <Button 
      text = "Actual Expenses"
      color = "danger"
      />
      <Button 
      text = "Programmed Expenses"
      color = "danger"
      />
    </div>
  )
}
export default App
