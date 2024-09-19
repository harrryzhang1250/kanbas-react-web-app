export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>

      <h3>HTML Examples</h3>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tags</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-3">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists">
        <h4>List Tags</h4>

        <h5>Ordered List Tag</h5>

        <p>How to make pancakes:</p>

        <ul>
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ul>
      </div>

      <div id="wd-tables">
        <h4>Table Tag</h4>

        <table border={1} width="100%">
          <thead>
          <tr>
            <th>Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Q1</td>
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>

          <tr>
            <td>Q2</td>
            <td>CSS</td>
            <td>2/10/21</td>
            <td>90</td>
          </tr>

          <tr>
            <td>Q3</td>
            <td>JavaScript</td>
            <td>2/17/21</td>
            <td>95</td>
          </tr>

          <tr>
            <td>Q4</td>
            <td>React</td>
            <td>2/24/21</td>
            <td>88</td>
          </tr>

          <tr>
            <td>Q5</td>
            <td>Node.js</td>
            <td>3/3/21</td>
            <td>92</td>
          </tr>

          <tr>
            <td>Q6</td>
            <td>Express</td>
            <td>3/10/21</td>
            <td>87</td>
          </tr>

          <tr>
            <td>Q7</td>
            <td>MongoDB</td>
            <td>3/17/21</td>
            <td>89</td>
          </tr>

          <tr>
            <td>Q8</td>
            <td>API Design</td>
            <td>3/24/21</td>
            <td>91</td>
          </tr>

          <tr>
            <td>Q9</td>
            <td>Security</td>
            <td>3/31/21</td>
            <td>85</td>
          </tr>

          <tr>
            <td>Q10</td>
            <td>DevOps</td>
            <td>4/7/21</td>
            <td>93</td>
          </tr>
          </tbody>

          <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td>90</td>
          </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br/>
        <img id="wd-starship" width="400px"
             src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        <br/>
        Loading a local image:
        <br/>
        <img id="wd-teslabot" src="logo512.png" height="200px"/>
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>

        <form id="wd-text-fields">
          <h5>Text Fields</h5>

          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="jdoe"/> <br/>

          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            id="wd-text-fields-password"
            value="123@#$a"
          /><br/>

          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="John"/><br/>

          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            id="wd-text-fields-last-name"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
          /><br/>

          <h5>Text boxes</h5>
          <label>Biography:</label><br/>
          <textarea id="wd-textarea" cols={30} rows={10} placeholder="Biography">
          </textarea>

          <h5 id="wd-buttons">Buttons</h5>
          <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
            Hello World!
          </button>

          <h5>File upload</h5>
          <input id="wd-upload" type="file"/>

          <h5 id="wd-radio-buttons">Radio buttons</h5>

          <label>Favorite movie genre:</label><br/>

          <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
          <label htmlFor="wd-radio-comedy">Comedy</label><br/>

          <input type="radio" name="radio-genre" id="wd-radio-drama"/>
          <label htmlFor="wd-radio-drama">Drama</label><br/>

          <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
          <label htmlFor="wd-radio-scifi">Science Fiction</label><br/>

          <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
          <label htmlFor="wd-radio-fantasy">Fantasy</label><br/>

          <h5 id="wd-checkboxes">Checkboxes</h5>

          <label>Favorite movie genre:</label><br/>

          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
          <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

          <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
          <label htmlFor="wd-chkbox-drama">Drama</label><br/>

          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

          <h4 id="wd-dropdowns">Dropdowns</h4>

          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre">Favorite movie genre: </label><br/>
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre">Favorite movie genres: </label><br/>
          <select id="wd-select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>


        </form>
      </div>

    </div>
  );
}