"use client";

import {useState} from "react";

export default function Hobbies() {
    const hobbies = [
        "Estudar JavaScript",
        "Ouvir música",
        "Assistir séries",
        "Jogar futsal"
    ];

return (
    <section className="hobbies">
      <h1>Meus hobbies</h1>

      <div className="lista-hobbies">
        {hobbies.map((hobby) => (
            <div key={hobby} className="hobby">
                {hobby}
            </div>
        ))}
      </div>
    </section>
  );
}