import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
// import {getAllPosts} from 'lib/api'
import Posts from 'components/posts'

const Blog = (/*{posts}*/) => {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero
        title='Blog'
        subtitle='Recent Posts'
      />
      {/* <Posts posts={posts} /> */}
    </Container>
  )
}

// export async function getStaticProps() {
//   const posts = await getAllPosts()

//   return {
//     props: {
//       posts: posts,
//     },
//   }
// }

export default Blog