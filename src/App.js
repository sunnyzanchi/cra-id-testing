import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Title = ({ text }) => <h1 className="App-title">{text}</h1>;

// Looks like HOCs don't work with `babel-plugin-component-identification` :(
const Paragraph = ({dark = false}) => ({ children }) => (
  <p className={dark ? 'dark-paragraph' : 'light-paragraph'}>{children}</p>
);
const DarkParagraph = Paragraph({ dark: true });
const LightParagraph = Paragraph({ dark: false });

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text="Welcome to React" />
        </header>
        <DarkParagraph>
          This should be a dark paragraph.
        </DarkParagraph>
        <LightParagraph>
          This should be a light paragraph.
        </LightParagraph>
      </div>
    );
  }
}

export default App;
