
import Card from './Card'
import ima1 from'../imagenes/dejameDormir.jpeg'
import ima2 from'../imagenes/otroDia.jpeg'
import ima3 from'../imagenes/queDecis.jpeg'


const cards = [
  {
    id:1,
    title: "Dejame dormir!!!",
    image: ima1,
    text:"Pongo esta cara, cuando me despiertan de mi ducle sueño!! Hola me llamo Axel y me encataria que tengas mi foto como un icono. Para que siempre te acuerde de mí",
    url: ""
  },
  {
    id:2,
    title: "Otro día!!!",
    image: ima2,
    text:"Pongo esta cara, cada ves que me levanto!! Hola me llamo Miloy me encataria que tengas mi foto como un icono. Para que siempre te acuerde de mí ",
    url: ""
  },
  {
    id:3,
    title: "Qué decis!!!",
    image: ima3,
    text: "Pongo esta cara, cuado me hacen preguntas que no entiendo!! Hola me llamo Axel y me encataria que tengas mi foto como un icono. Para que siempre te acuerde de mí",
    url: ""
  }  
]

function Cards () {
  return (
    <div className='container d-flex justfy-content-center'>
        <div className='row'>
          {
            cards.map(card => (
              <div className='col-md-4' key={card.id}>
                <Card title={card.title} imageSource={card.image} text={card.text} url={card.url}/>
              </div>
            

            ))
          }
        </div>
        
        
    </div>
    
  )
}

export default Cards