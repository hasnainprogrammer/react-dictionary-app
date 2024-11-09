import React from "react";
import MyImage from "../assets/myimage.png";

function About() {
  return (
    <div className="about-section">
      <div className="personal-info">
        <img src={MyImage} alt="my-image" />
        <p>
          <i>Hasnain</i>
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat illo
        blanditiis accusamus esse atque odio maiores, nostrum sed ex sint
        dignissimos, architecto sunt, dicta veniam iure tempore. Eos similique
        qui pariatur, ea ullam deserunt aperiam nihil? Totam, consequatur
        eveniet! Ab velit sit vitae vero placeat alias voluptate enim omnis
        quasi vel exercitationem a numquam tempore assumenda commodi saepe,
        magnam fugiat sint beatae fuga doloremque unde hic veritatis? Eveniet,
        officiis! Aspernatur a dolorum quia qui corporis quidem cupiditate
        dolores nulla.
      </p>
    </div>
  );
}

export default About;
