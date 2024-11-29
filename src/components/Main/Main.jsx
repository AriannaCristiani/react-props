import Card from "../Card/Card"
import posts from '../../posts.jsx'

console.log(posts.published)


export default function Main() {

    const publishedPosts = posts.filter((post) => post.published === true)

    return (
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col">
                                <Card image={post.image} title={post.title} content={post.content} tags={post.tags} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}