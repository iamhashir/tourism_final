import React from "react";
import "./Body_stylesheets/facts.css";
function Facts() {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const myStyle1 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
    backgroundSize: "cover",
    filter: " blur(.1px)",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="facts">
        <div className="fact_content" style={myStyle1}>
          <h1>Did You know</h1>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
            ab commodi et tenetur corporis neque quis dolore iste! Modi
            cupiditate hic amet dolor animi. Amet atque delectus suscipit
            cupiditate! Optio maiores accusantium nulla modi nostrum, fugiat
            maxime ullam sed neque asperiores officiis sequi magnam quae placeat
            ipsam repellendus at excepturi, reiciendis suscipit quaerat id fugit
            dicta! Sunt, quia nihil! Labore, minus, mollitia nobis fugit maxime
            eum reprehenderit omnis dolorem exercitationem facilis dolor
            voluptas corrupti eligendi earum temporibus, distinctio quos! Natus
            iste numquam nulla voluptates non obcaecati nostrum iusto eveniet!
          </h3>
      </div>
      <div style={myStyle} className="side_image"></div>
    </div>
  );
}
export default Facts;
