import './App.css'
//Layout
import ContentHolder from './layout/content_holder/content_holder';
import VBmarHeader from './layout/vbmar_header/vbmar_header';
//Content
import AboutSection from './content/about/about';

function App() {
  return (
    <>
        <VBmarHeader></VBmarHeader>
        <ContentHolder data={AboutData}>
          <AboutSection></AboutSection>
        </ContentHolder>
        <ContentHolder data={OtherData}></ContentHolder>
    </>
  )
}

const AboutData = {
  color : "#7300ffff",
  next_color : "#18b408ff",
  synbol : "/symbols/Creative.svg",
  symbol_side : "right",
  height : "300",
  width : "300",
}

const OtherData = {
  color : "#18b408ff",
  next_color : "#7300ffff",
  synbol : "/symbols/Space.svg",
  symbol_side : "left",
  height : "300",
  width : "250",
}

export default App