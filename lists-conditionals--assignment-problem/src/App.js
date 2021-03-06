import React, { Component } from 'react';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';
import './App.css';

class App extends Component {
  state = {
    inputText:
      { content: '', length: 0 },
    textArr: [
    ],
    showTextArr: true
  }

  showLengthHandler = (event) => {
    const text = { ...this.state.inputText };
    text.content = event.target.value;
    text.length = text.content.length;
    //separate it into array
    let charArray = text.content.split('');

    this.setState({
      inputText: text,
      textArr: charArray
    });
  }

  removeHandler = (index) => {
    const charArray = [...this.state.textArr];
    charArray.splice(index, 1);
    let newString = charArray.join('');

    this.setState({
      inputText: { content: newString, length: newString.length },
      textArr: charArray
    });
    document.getElementById("inputOutput").value = newString;
  }

  render() {
    let inputOutput = (
      <div >
        <input type="text" id='inputOutput'
          onChange={(event) => this.showLengthHandler(event)}
          value={this.inputText} >
        </input>

        <div  >
          <p> The length is {this.state.inputText.length} </p>
        </div>
      </div>
    );

    let textArray = null;
    if (this.state.showTextArr) {
      textArray = (
        <div>
          {
            this.state.textArr.map((text, index) => {
              return <CharComponent
                click={() => this.removeHandler(index)}
                key={index}
                textContent={text}
              />
            })
          }
        </div>
      )
    };

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          {inputOutput}
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>

          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <ValidationComponent textLength={this.state.inputText.length}></ValidationComponent>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <CharComponent textContent={this.state.inputText.content}></CharComponent>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          {textArray}
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
