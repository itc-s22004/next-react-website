import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
    // console.log(posts[0].eyecatch.url)
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.eachpost} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <figure>
                            <Image
                                src={eyecatch.url}
                                alt=""
                                // layout="fill"
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                                objectFit="cover"
                                sizes="(min-width: 1152px) 576px, 50vw"
                                width={eyecatch.width}
                                height={eyecatch.height}
                                placeholder="blur"
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                        <h2>{title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    )
}