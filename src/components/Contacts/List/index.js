import React, { useState } from "react";

const List = ({ contacts }) => {
  const [filteredText, setFilteredText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLocaleLowerCase());
    });
  });
  return (
    <div>
      <input
        placeholder="Search"
        value={filteredText}
        onChange={(e) => setFilteredText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => {
          return (
            <li key={i}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          );
        })}
      </ul>
      <p>{`${filtered.length} contact(s)`}</p>
    </div>
  );
};

export default List;
