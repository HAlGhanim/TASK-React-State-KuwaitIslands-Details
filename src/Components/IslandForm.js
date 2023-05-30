import { useState } from "react";

export default function IslandForm({ island }) {
  const [fName, setfName] = useState("");

  const nameValue = (event) => {
    setfName(event.target.value);
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input id="fullName" type="text" placeholder="Type Full Name" />
      <input
        id="phoneNumber"
        type="tel"
        placeholder="Type Phone Number"
        // value={fName}
      />
      <button
        className="book"
        // onClick={() => {
        //   if (
        //     window.confirm(
        //       `Are you sure you want to book to ${island.name} with the Name: ${}, phone: ${}`
        //     )
        //   ) {
        //   }
        // }}
      >
        Book for today!
      </button>
    </div>
  );
}
