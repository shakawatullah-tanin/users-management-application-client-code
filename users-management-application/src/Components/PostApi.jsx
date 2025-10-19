import React from "react";

const PostApi = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    const email = e.target.email.value;

    const user = { name, email };

    console.log(user)

    fetch("http://localhost:5005/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log("Data after Post", data));
      e.target.reset()
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <br />
        <button>Add To Server</button>
      </form>
    </div>
  );
};

export default PostApi;
