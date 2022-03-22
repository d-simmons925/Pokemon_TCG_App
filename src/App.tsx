import React, { useState, useEffect, lazy, Suspense } from 'react'
import './app.css'
import axios from 'axios'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Collapse,
  Row,
  Col,
} from 'reactstrap'
import PageNav from './components/PageNav/PageNav'
const Card = lazy(() => import('./components/Card/Card'))

interface PriceI {
  high: number
  low: number
  market: number
  mid: number
}

interface CardI {
  rarity: string
  artist: string
  set: {
    name: string
    series: string
  }
  evolvesFrom: string
  supertype: string
  types: []
  abilities: []
  hp: string
  attacks: []
  weaknesses: []
  resistances: []
  retreatCost: []
  subtypes: []
  rules: []
  tcgplayer: {
    prices: {
      ['1stEditionNormal']: PriceI
      ['1stEditionHolofoil']: PriceI
      normal: PriceI
      holofoil: PriceI
      reverseHolofoil: PriceI
    }
  }
  name: string
  images: {
    small: string
    large: string
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>()
  const [searchBy, setSearchBy] = useState('name')
  const [collapse, setCollapse] = useState(false)
  const [supertype, setSupertype] = useState<string>()
  const [pokemonType, setPokemonType] = useState<string>()
  const [cardsArray, setCardsArray] = useState<any>([])
  const [page, setPage] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)

  const toggle = () => setCollapse(!collapse)

  const cardPlaceholders = []
  for (let i = 0; i < 16; i++) {
    cardPlaceholders.push(i)
  }

  const config = {
    params: {
      q: `${searchBy}:"${searchTerm}"
          ${supertype && supertype !== 'all' ? ` supertype:${supertype}` : ''}
          ${
            pokemonType && pokemonType !== 'all' ? ` types:${pokemonType}` : ''
          }`,
    },
  }

  const setCardColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'rgba(160, 160, 160, 1)'
      case 'Uncommon':
        return 'rgba(0, 255, 0, 1)'
      case 'Promo':
        return 'rgba(255, 0, 0, 1)'
      case 'Rare':
        return 'rgba(0, 0, 255, 1)'
      case 'Rare Holo':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Holo EX':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Holo GX':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Holo LV.X':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Holo Star':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Holo V':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Holo VMAX':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Prime':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Prism Star':
        return 'rgba(120, 0, 255, 1)'
      case 'Rare Rainbow':
        return 'linear-gradient(60deg, rgba(255, 0, 0, 1), rgba(255, 105, 0, 1), rgba(255, 240, 0, 1), rgba(0, 255, 0, 1), rgba(0, 0, 255, 1), rgba(255, 0, 255, 1))'
      case 'Rare Secret':
        return 'rgba(241, 200, 0, 1)'
      case 'Rare Shining':
        return 'rgba(250, 105, 205, 1)'
      case 'Rare Shiny':
        return 'rgba(250, 105, 205, 1)'
      case 'Rare Shiny GX':
        return 'rgba(250, 105, 205, 1)'
      case 'Rare Ultra':
        return 'rgba(120, 0, 255, 1)'
      default:
        return 'rgba(255, 0, 0, 1)'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log(config)
    axios.get(`https://api.pokemontcg.io/v2/cards`, config).then(res => {
      setCardsArray(res.data.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    setPage(cardsArray.slice(16 * pageIndex, (pageIndex + 1) * 16))
  }, [cardsArray, pageIndex])

  return (
    <div className="App">
      <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              id="searchBox"
              placeholder="search"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            ></Input>
            <Button
              color="secondary"
              onClick={toggle}
              style={{ marginLeft: '10px' }}
            >
              <i className="fas fa-gear"></i>
            </Button>
            <Button color="primary" id="searchButton">
              Search
            </Button>
          </FormGroup>
          <Collapse isOpen={collapse} style={{ marginTop: '1rem' }}>
            <div className="form-container">
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSupertype(e.target.value)
                }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPokemonType(e.target.value)
                }
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
      </Container>

      <Container className="m-auto">
        {cardsArray.length > 16 && (
          <PageNav
            setPage={setPageIndex}
            pageIndex={pageIndex}
            pagesNum={Math.ceil(cardsArray.length / 16)}
          />
        )}
        {loading ? (
          <Row>
            {cardPlaceholders.map((placeholder: number) => (
              <Col sm="12" md="6" lg="4" xl="3">
                <div className="placeholder"></div>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            {page.map((card: CardI, index: number) => (
              <Col sm="12" md="6" lg="4" xl="3" key={index}>
                <Suspense fallback={<div className="placeholder"></div>}>
                  <Card
                    cardInfo={card}
                    color={setCardColor(card.rarity)}
                    key={index}
                  />
                </Suspense>
              </Col>
            ))}
          </Row>
        )}
        {cardsArray.length > 16 && (
          <PageNav
            setPage={setPageIndex}
            pageIndex={pageIndex}
            pagesNum={Math.ceil(cardsArray.length / 16)}
          />
        )}
      </Container>
    </div>
  )
}

export default App
