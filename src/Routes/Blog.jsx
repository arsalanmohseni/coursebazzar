const Blog = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mt-8 ml-6">Blog</h1>
            <p className="text-2xl mt-4 ml-6">No posts yet.</p>
            <button className="mt-8 ml-6 flex items-center justify-center">
                <a href="/texteditor" className="rounded-full bg-blue-500 p-4 text-white">
                    Create Blog Post
                </a>
            </button>
        </div>
    );
};

export default Blog;
