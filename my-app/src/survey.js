import './index.css';

import { useState } from 'react';

function Survey() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    alert(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.rating);
  }

  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div><h3>How likely is it you would recommend AWB to a colleague?</h3></div>

      <table width="100%" border="0">
        <tr>
          <td align="left" width="50%">Not at all likely</td>
          <td align="right">Extremely likely</td>
        </tr>
      </table>

      <input
        type="hidden"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />

      <div className="ratio-buttons">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number, index) => (
          <label
            key={index}
            className={`ratio-button ${selectedButton === index ? 'selected' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            <input type="radio" name="rating" value={number} checked={selectedButton === index} onClick={handleChange} />
            {number}
          </label>
        ))}
      </div>

      <div align="left">Would you like to share any comments?
        <textarea cols="70" rows="3"
          name="comment"
          value={inputs.comment || "Awesome product with so many capabilities."}
          onChange={handleChange}>

        </textarea>
      </div>
      <div class="container"  ><input type="submit" /></div>




    </form>
  );
}

export default Survey;

