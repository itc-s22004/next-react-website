// import styles from 'styles/posts.module.css'
// import Link from 'next/link'
// import Image from 'next/legacy/image'

// export default function Posts({ posts }) {
//     console.log(eyecatch)
//     return (
//         <div className={styles.gridContainer}>
//             {posts.map(({ title, slug, eyecatch}) => (
//                 <article className={styles.post} key={slug}>
//                     <Link href={`/blog/${slug}`}>
//                         <figure>
//                             <Image
//                             src={eyecatch.url}
//                             alt=""
//                             layout="fill"
//                             width={eyecatch.width}
//                             height={eyecatch.height}
//                             placeholder="blur"
//                             blurDataURL={eyecatch.blurDataURL}
//                             />
//                         </figure>
//                     </Link>
//                 </article>
//             ))}
//         </div>
//     )
// }