import { useRouter } from "next/router";
import React from "react";

function Blog(props) {
  const router = useRouter();

  return (
    <div>
      Blog HomePage
      <p>
        <code>Go to </code>
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.back()}>Back Home</button>
      </p>
    </div>
  );
}

export default Blog;
