import React from "react";
import { useRouter } from "next/router";
export default function DetailUser() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  return (
    <div>
      <h1>detail user = {id}</h1>
    </div>
  );
}
