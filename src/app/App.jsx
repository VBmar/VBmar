import './App.css'
import { useSelector } from 'react-redux';
//Layout
import ContentHolder from './layout/content_holder/content_holder';
import VBmarHeader from './layout/vbmar_header/vbmar_header';
//Content
import AboutSection from './content/about/about';
import { useEffect } from 'react';

function App() {

  const Theme = useSelector((state) => state.Theme.theme);

  useEffect(() => {
    document.body.style.backgroundColor = Theme.main_color;
  })

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