import logo from './logo.svg';
import './index.css';

import { useState } from 'react';

function Survey() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.rate);
  }

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




      <div class="container"  >
        <input type="radio" value="1" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">1</label>
        <input type="radio" value="2" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">2</label>
        <input type="radio" value="3" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">3</label>
        <input type="radio" value="4" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">4</label>
        <input type="radio" value="5" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">5</label>
        <input type="radio" value="6" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">6</label>
        <input type="radio" value="7" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">7</label>
        <input type="radio" value="8" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">8</label>
        <input type="radio" value="9" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">9</label>
        <input type="radio" value="10" name="rate" class="ratio-input" min="0" onChange={handleChange} />
        <label for="rate">10</label>
      </div>

      <div class="ratio-buttons">
        <label class="ratio-button">
          <input type="radio" name="ratio" checked />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
        <label class="ratio-button">
          <input type="radio" name="ratio" />
          1
        </label>
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
