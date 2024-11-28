import Card from "../Card/Card"
import posts from '../../posts.jsx'

export default function Main() {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col">
                                <Card image={post.image} title={post.title} content={post.content} tags={post.tags} />
                            </div>
                        ))}s
                    </div>
                </div>
            </section>
        </main>
    )
}