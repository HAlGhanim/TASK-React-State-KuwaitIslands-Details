import { useState } from "react";

export default function IslandForm({ island }) {
  const [fName, setfName] = useState("");
  const [pNumber, setpNumber] = useState("");

  const handleClick = () => {
    if (
      window.confirm(
        `Are you sure you want to book to ${island.name} with the Name: ${fName}, phone: ${pNumber}`
      )
    ) {
      island.visitors++;
      setfName("");
      setpNumber("");
    }
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        value={fName}
        placeholder="Type Full Name"
        onChange={(event) => setfName(event.target.value)}
      />
      <input
        value={pNumber}
        type="tel"
        placeholder="Type Phone Number"
        pattern="[0-9]{4}-[0-9]{4}"
        onChange={(event) => setpNumber(event.target.value)}
      />
      <button className="book" onClick={handleClick}>
        Book for today!
      </button>
    </div>
  );
}
