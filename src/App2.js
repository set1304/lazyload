
import './App.css';
import { useEffect, useState } from 'react'
import ImgList from './components/ImgList'

const listImg1 = ["/img/img1.jpeg", "/img/img2.jpeg", "/img/img3.jpeg", "/img/img4.jpeg", "/img/img5.jpeg", "/img/img6.jpeg", "/img/img7.jpeg", "/img/img8.jpeg", "/img/img9.jpeg", "/img/img10.jpeg", "/img/img11.jpeg", "/img/img12.jpeg", "/img/img13.jpeg", "/img/img14.jpeg", "/img/img15.jpeg"]
const listImg2 = ["/img/img16.jpeg", "/img/img17.jpeg", "/img/img18.jpeg", "/img/img19.jpeg", "/img/img20.jpeg", "/img/img21.jpeg", "/img/img22.jpeg", "/img/img23.jpeg", "/img/img24.jpeg", "/img/img25.jpeg", "/img/img26.jpeg", "/img/img27.jpeg", "/img/img28.jpeg", "/img/img29.jpeg", "/img/img30.jpeg"]
const listImg = [...listImg1, ...listImg2]
function App() {
  const [clientHeight, setClientHeight] = useState();

  useEffect(() => {
    setClientHeight(document.documentElement.clientHeight)
  }, []);

  const loadCount = clientHeight ? Math.ceil(clientHeight/400) + 1 : 0;

  return (
    <div className="App">
        <img/>
      <ImgList listImg={listImg} loadCount={loadCount} />
      
    </div>
  );
}

export default App;