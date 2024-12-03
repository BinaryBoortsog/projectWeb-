import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <p className="mt-4 text-lg">
        Welcome to our blog! Here, we share insights, updates, and articles about our industry, company, and more. Stay tuned for our latest posts.
      </p>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Latest Posts</h2>

        {/* Blog Post 1 */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Post Title 1</h3>
          <p className="mt-2 text-lg">
            A brief excerpt from the first blog post. This gives a preview of what the post is about and encourages users to read more.
          </p>
          <a href="/blog/post-1" className="text-[#00df9a] hover:underline">Read more</a>
        </div>

        {/* Blog Post 2 */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Post Title 2</h3>
          <p className="mt-2 text-lg">
            A brief excerpt from the second blog post. Users can learn more about our latest updates and articles.
          </p>
          <a href="/blog/post-2" className="text-[#00df9a] hover:underline">Read more</a>
        </div>

        {/* Blog Post 3 */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Post Title 3</h3>
          <p className="mt-2 text-lg">
            A brief excerpt from the third blog post. This section gives an idea of the type of content we share.
          </p>
          <a href="/blog/post-3" className="text-[#00df9a] hover:underline">Read more</a>
        </div>
      </section>

      <section className="mt-8">
        <button className="bg-[#00df9a] text-black py-2 px-4 rounded-md hover:bg-[#00bf8a]">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Blog;
