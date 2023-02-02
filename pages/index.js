import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const Home = () => {
  return (
    <Container>
      <Meta />
      <Hero
        title='CUBEee'
        subtitle='アウトプットしていくサイト'
        imageOn
      />
    </Container>
  )
}

export default Home
