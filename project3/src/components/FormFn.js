import React, { useState } from "react";
// form using function Component

export default function FormFn() {
  const [firstName, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  return (
    <fieldset className="Box">
      <form>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Lastname:</label>
          <input
            type="text"
            value={Lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>EmailID :</label>
          <input
            type="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Contact :</label>
          <input
            type="tel"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Country: </label>
          <select
            value={Country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="Ind">India</option>
            <option value="US">America</option>
            <option value="ENG">England</option>
          </select>
        </div>
        <br />
        <div>
          <button type="submit" onClick={() => alert("The data is submitted")}>
            Submit
          </button>
          <button
            type="reset"
            onClick={() => {
              setFirstName("");
              setLastName("");
              setCountry("");
              setEmail("");
              setPhone("");
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </fieldset>
  );
}
