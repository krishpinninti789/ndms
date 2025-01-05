import React from "react";

const page = () => {
  return (
    <>
      <div>successfully login</div>
      <form action="/auth/signout" method="post">
        <button type="submit">signout</button>
      </form>
    </>
  );
};

export default page;
