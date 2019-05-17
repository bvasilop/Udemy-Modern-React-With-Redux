/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const Form = () => (
  <div className="ui inverted segment">
    <form className="ui inverted form">
      <div className="field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" tabIndex="0" className="hidden" />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  </div>
);

export default Form;
