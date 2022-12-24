import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Data from './Data';
import Card from './Components/Card'
// import Images from './Components/Images'
function App() {
  const cards = Data.map(item => {
    console.log("item", item)
    return(
      <Card 
      img = {item.coverImg}
      rating = {item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
    )
  })
  return (
    <div>
     
    <Header />
    {cards}
    {/* <Hero /> */}
    </div>

  );
}

export default App;
