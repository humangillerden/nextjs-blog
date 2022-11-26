import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NextSeo } from 'next-seo';

function post(props) {
  const router = useRouter();
  const [title, setTitle] = useState("def_title");
  useEffect(() => {
    if (router.isReady) {
      console.log("Router Hazır mı? (if)", router.isReady);
      setTitle(`Post - ${router.query.post[0]}`);
    } else {
      console.log("Router Hazır mı? (else)", router.isReady);
    }
  }, [router]);

  console.log(router);
  return (
    <div>
      <NextSeo
        title={title}
        description="Then with a short description here."
      />

      Post:{" "}
      {router.isReady
        ? `${router.query.post[0]} - ${router.query.post[1]}`
        : "noReady"}
      <p>
        <span onClick={router.reload} style={{ cursor: "pointer" }}>
          RouterReload
        </span>
      </p>
      <p>
        <span onClick={() => router.back()} style={{ cursor: "pointer" }}>
          RouterBack {/* browserdaki geri butonuna basmış gibi olunuyor Kaynak: https://www.youtube.com/watch?v=o1uTOjLVOe4 */}
        </span>
      </p>
    </div>
  );
}

export default post;