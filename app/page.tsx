import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey, I'm Thomas Dong 👋
      </h1>
      <p className="mb-4">
        I'm a frontend developer, tech enthusiast, and lifelong learner 👨‍💻
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
