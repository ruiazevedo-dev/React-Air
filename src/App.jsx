import Navbar from "./components/Navbar"
//import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    // <Hero />
const cards = data.map(item => {
return (
    // eslint-disable-next-line react/jsx-key
    <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
)
})        

return (
<div>
    <Navbar />
    
    <section className="cards-list">
        {cards}
    </section>

</div>
)
}