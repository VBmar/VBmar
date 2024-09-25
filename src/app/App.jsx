import './App.css'
import ContentHolder from './layout/content_holder/content_holder';
import VBmarHeader from './layout/vbmar_header/vbmar_header';


function App() {
  return (
    <>
        <VBmarHeader></VBmarHeader>
        <ContentHolder data={AboutData}></ContentHolder>
        <ContentHolder data={OtherData}></ContentHolder>
    </>
  )
}

const AboutData = {
  color : "#7300ffff",
  next_color : "#18b408ff",
  synbol : "/Creative.svg",
  symbol_side : "right",
}

const OtherData = {
  color : "#18b408ff",
  next_color : "#7300ffff",
  synbol : "/Space.svg",
  symbol_side : "left",
}

export default App