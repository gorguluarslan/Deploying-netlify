import React from "react";

function User({ data }) {
  console.log("User component re-render");
  return (
    <div>
      Kullanıcı
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default User;
