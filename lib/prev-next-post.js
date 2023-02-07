export function prevNextPost(allSlugs, currentSlug) {
    const numberOfPosts = allSlugs.length

    
    const index = allSlugs.findIndex(
        ({ slug }) => slug === currentSlug,
    )
    // console.log(index)
    const prevPost =
        index + 1 === numberOfPosts
            ? { title: '', slug: '' }
            : allSlugs[index + 1]

            // console.log(prevPost)
    const nextPost =
        index === 0
            ? { title: '', slug: '' }
            : allSlugs[index - 1]

    return [prevPost, nextPost]
}