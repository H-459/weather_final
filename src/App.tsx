import * as React from 'react';
import './App.css';
import Button from "./Common/Button";
import Toggle from './Common/Toggle';
import Input from './Common/Input';

function App() {
  return (
    <div className="App">

      <Button onClick = {() => console.log("DING")} buttonVariant="default">BUTTON 1</Button>
      <Button onClick = {() => console.log("DING")} disabled buttonVariant="default">BUTTON 1 disabled</Button>
      <Button onClick = {() => console.log("DING")} buttonVariant="white">BUTTON 2</Button>
      <Button onClick = {() => console.log("DING")} buttonVariant="ghost">BUTTON 3</Button>
      <Button onClick = {() => console.log("DING")} buttonVariant="link">BUTTON 4</Button>

      <Toggle id = 'hardcoded'/>
      <Input onChange={() => console.log("changed")}></Input>



    </div>
  );
}

export default App;
