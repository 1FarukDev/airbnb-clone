import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Data from './Data';
import Card from './Components/Card'

// import Images from './Components/Images'
function App() {
  const cards = Data.map(item => { 
    return(
      <Card
      key = {item.id} 
      img = {item.coverImg}
      rating = {item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots = {item.openSpots}
      />
    )
  })
  return (
    <div>
      
    <Header />
    {/* <Hero /> */}
    <section className='card--list'>    
      {cards} 
      </section>

    
    </div>

  );
}

export default App;
