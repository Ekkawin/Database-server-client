import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Result from './result';

export default class firstpage extends Component {
  state = {
    name: '',
    banana: 0,
    apple: 0,
    orange: 0,
  };

  onClick = () => {
    // console.log('hi');
    return (
      <div>
        <Result />
      </div>
    );
  };

  onChange = (e) => {
    console.log(this.state.name);
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">What is your name</Label>
            <Input
              type="text"
              placeholder="with a placeholder"
              onChange={this.onChange}
            />
          </FormGroup>
          <Link to={{ pathname: '/second', name: this.state.name }}>Join</Link>
          {/* <Button onClick={this.onClick}>Submit</Button> */}
        </Form>
      </div>
    );
  }
}
