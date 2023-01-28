import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./List/index";
import Form from "./Form/index";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
