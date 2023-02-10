import { getPostBySlug, getAllSlugs } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import PostCategories from 'components/post-categories'
import ConvertBody from 'components/convert-body'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'

export default function Post ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        apgeDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />

        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=''
            style={{
              width: '100%',
              height: 'auto'
            }}
            width={eyecatch.width}
            height={eyecatch.height}
            priority
            placeholder='blur'
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody><ConvertBody contentHTML={content} /></PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        {/* <div>
                    <a href={`/blog/${prevPost.slug}`}>{prevPost.title}</a>
                </div> */}
        <Pagination
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
        />

      </article>
    </Container>
  )
}

export async function getStaticPaths () {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false
  }
}

export async function getStaticProps (context) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlugs()
  // console.log(allSlugs, slug)
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch,
      categories: post.categories,
      description,
      prevPost,
      nextPost
    }
  }
}