import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/About'
import { useGetPokemonByNameQuery } from './services/pokemon'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export const App = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <Wrapper>
      <Title>Hugin</Title>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </Wrapper>
  )
}
