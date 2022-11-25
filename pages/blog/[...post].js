import { useRouter } from "next/router";
import React, { useEffect } from "react";

function post(props) {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      console.log("Router Hazır mı? (if)", router.isReady);
    } else {
      console.log("Router Hazır mı? (else)", router.isReady);
    }
  }, [router]);

  console.log(router);
  return (
    <div>
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
