import React, { useContext, useState } from "react";
import { AlertContext } from "../Context/alert/alertContext";
import { FirebaseContext } from "../Context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandle = (event) => {
    event.preventDefault();
    if (value.trim()) {
      firebase
        .addList(value.trim())
        .then(() => {
          alert.show("request has been sent.", "succes");
        })
        .catch(() => {
          alert.show("Something went wrong.", "danger");
        });
      setValue("");
    } else {
      alert.show("enter query !");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandle} className="form-group">
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder={"Ask a question enter"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
