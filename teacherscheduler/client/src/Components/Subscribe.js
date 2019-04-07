import React from 'react';

function SubscribeForm(props) {
  return (
      <div>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            State:
            <select>
              <option type="text" text="AL" value="AL">Alabama</option>
              <option type="text" text="AK" value="AK">Alaska</option>
              <option type="text" text="AZ" value="AZ">Arizona</option>
              <option type="text" text="AR" value="AR">Arkansas</option>
              <option type="text" text="CA" value="CA">California</option>
              <option type="text" text="CO" value="CO">Colorado</option>
              <option type="text" text="CT" value="CT">Connecticut</option>
              <option type="text" text="DE" value="DE">Delaware</option>
              <option type="text" text="DC" value="DC">District Of Columbia</option>
              <option type="text" text="FL" value="FL">Florida</option>
              <option type="text" text="GA" value="GA">Georgia</option>
              <option type="text" text="HI" value="HI">Hawaii</option>
              <option type="text" text="ID" value="ID">Idaho</option>
              <option type="text" text="IL" value="IL">Illinois</option>
              <option type="text" text="IN" value="IN">Indiana</option>
              <option type="text" text="IA" value="IA">Iowa</option>
              <option type="text" text="KS" value="KS">Kansas</option>
              <option type="text" text="KY" value="KY">Kentucky</option>
              <option type="text" text="LA" value="LA">Louisiana</option>
              <option type="text" text="ME" value="ME">Maine</option>
              <option type="text" text="MD" value="MD">Maryland</option>
              <option type="text" text="MA" value="MA">Massachusetts</option>
              <option type="text" text="MI" value="MI">Michigan</option>
              <option type="text" text="MN" value="MN">Minnesota</option>
              <option type="text" text="MS" value="MS">Mississippi</option>
              <option type="text" text="MO" value="MO">Missouri</option>
              <option type="text" text="MT" value="MT">Montana</option>
              <option type="text" text="NE" value="NE">Nebraska</option>
              <option type="text" text="NV" value="NV">Nevada</option>
              <option type="text" text="NH" value="NH">New Hampshire</option>
              <option type="text" text="NJ" value="NJ">New Jersey</option>
              <option type="text" text="NM" value="NM">New Mexico</option>
              <option type="text" text="NY" value="NY">New York</option>
              <option type="text" text="NC" value="NC">North Carolina</option>
              <option type="text" text="ND" value="ND">North Dakota</option>
              <option type="text" text="OH" value="OH">Ohio</option>
              <option type="text" text="OK" value="OK">Oklahoma</option>
              <option type="text" text="OR" value="OR">Oregon</option>
              <option type="text" text="PA" value="PA">Pennsylvania</option>
              <option type="text" text="RI" value="RI">Rhode Island</option>
              <option type="text" text="SC" value="SC">South Carolina</option>
              <option type="text" text="SD" value="SD">South Dakota</option>
              <option type="text" text="TN" value="TN">Tennessee</option>
              <option type="text" text="TX" value="TX">Texas</option>
              <option type="text" text="UT" value="UT">Utah</option>
              <option type="text" text="VT" value="VT">Vermont</option>
              <option type="text" text="VA" value="VA">Virginia</option>
              <option type="text" text="WA" value="WA">Washington</option>
              <option type="text" text="WV" value="WV">West Virginia</option>
              <option type="text" text="WI" value="WI">Wisconsin</option>
              <option type="text" text="WY" value="WY">Wyoming</option>
            </select>
          </label>
          <label>
            School Type:
            <select name="schoolType">
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="charter">Charter</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            School Schedule
            <select name="schoolSchedule">
              <option value="Traditional">Traditional</option>
              <option value="Year-Around">Year-Around</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
  );
}
export default SubscribeForm;