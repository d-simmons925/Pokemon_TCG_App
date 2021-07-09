import {useState} from 'react'
import axios from 'axios'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Collapse
} from 'reactstrap'
import Card from './components/Card'

function App() {
  const [searchTerm, setSearchTerm] = useState()
  const [searchBy, setSearchBy] = useState('name')
  const [collapse, setCollapse] = useState(false)
  const [supertype, setSupertype] = useState()
  const [pokemonType, setPokemonType] = useState()
  const [cardsArray, setCardsArray] = useState([])

  const toggle = () => setCollapse(!collapse);

  const config = {
    params: {
      q: `${searchBy}:"${searchTerm}"
          ${supertype && supertype !== "all" ? ` supertype:${supertype}` : ''}
          ${pokemonType && pokemonType !== "all" ? ` types:${pokemonType}` : ''}`  
    }
  }

  const setCardColor = (rarity) =>{
    switch(rarity){
      case 'Common':
        return 'linear-gradient(to right, rgba(160, 160, 160, .8) , rgba(160, 160, 160, 0))'
      case 'Uncommon':
        return 'linear-gradient(to right, rgba(0, 255, 0, .8) , rgba(0, 255, 0, 0))'
      case 'Promo':
        return 'linear-gradient(to right, rgba(255, 0, 0, .8) , rgba(255, 0, 0, 0))'
      case 'Rare':
        return 'linear-gradient(to right, rgba(0, 0, 255, .8) , rgba(0, 0, 255, 0))'
      case 'Rare Holo':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Holo EX':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Holo GX':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Holo LV.X':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Holo Star':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Holo V':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Holo VMAX':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Prime':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Prism Star':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      case 'Rare Rainbow':
        return 'linear-gradient(to right, rgba(255, 0, 0, .8), rgba(255, 105, 0, .7), rgba(255, 240, 0, .6), rgba(0, 255, 0, .6), rgba(0, 0, 255, .4), rgba(255, 0, 255, .2) , rgba(255, 0, 0, 0))'
      case 'Rare Secret':
        return 'linear-gradient(to right, rgba(241, 200, 0, .8) , rgba(241, 0, 200, 0))'
      case 'Rare Shining':
        return 'linear-gradient(to right, rgba(250, 105, 205, .8) , rgba(250, 105, 205, 0))'
      case 'Rare Shiny':
        return 'linear-gradient(to right, rgba(250, 105, 205, .8) , rgba(250, 105, 205, 0))'
      case 'Rare Shiny GX':
        return 'linear-gradient(to right, rgba(250, 105, 205, .8) , rgba(250, 105, 205, 0))'
      case 'Rare Ultra':
        return 'linear-gradient(to right, rgba(120, 0, 255, .8) , rgba(120, 0, 255, 0))'
      default:
        return 'linear-gradient(to right, rgba(255, 0, 0, .8) , rgba(255, 0, 0, 0))'
    }
  }

  const handleSubmit = e =>{
    e.preventDefault()
    axios.get(`https://api.pokemontcg.io/v2/cards`, config)
      .then(res =>{
        setCardsArray(res.data.data)
        console.log(cardsArray)
      })
  }

  return (
    <div className="App">
      <div id="searchContainer">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              id="searchBox"
              placeholder="search"
              onChange={e => setSearchTerm(e.target.value)}
            ></Input>
            <Button color="secondary" onClick={toggle} style={{marginLeft: '10px'}}>Filters</Button>
            <Button color="primary" id="searchButton">Search</Button>
          </FormGroup>
          <Collapse isOpen={collapse} style={{marginTop: '1rem'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Label for="searchBy">search by</Label>
              <Input 
                type="select"
                id="searchBy"
                onChange={e => setSearchBy(e.target.value)}
              >
                <option value="name">name</option>
                <option value="set.name">set</option>
                <option value="rarity">rarity</option>
              </Input>
              <Label for="supertype">Category</Label>
              <Input
                type="select"
                id="supertype"
                onChange={e => setSupertype(e.target.value)}
              >
                <option value="all">all</option>
                <option value="Pokémon">Pokémon</option>
                <option value="Trainer">trainer</option>
                <option value="Energy">Energy</option>
              </Input>
              <Label for="pokemonType">Pokémon Type</Label>
              <Input
                type="select"
                id="pokemonType"
                onChange={e => setPokemonType(e.target.value)}
              >
                <option value="all">all</option>
                <option value="colorless">colorless</option>
                <option value="darkness">darkness</option>
                <option value="dragon">dragon</option>
                <option value="fairy">fairy</option>
                <option value="fighting">fighting</option>
                <option value="fire">fire</option>
                <option value="grass">grass</option>
                <option value="lightning">lightning</option>
                <option value="metal">metal</option>
                <option value="psychic">psychic</option>
                <option value="water">water</option>
              </Input>
            </div>
          </Collapse>
        </Form>
      </div>

      <Container>
        {cardsArray.map((card, index)=>
          <Card
            cardInfo={card}
            color={setCardColor(card.rarity)}
            key={index}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
