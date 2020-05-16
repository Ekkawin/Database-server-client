// export default class result extends Component {
//     export const saveUser = async () => {
//         await axios.post('http://localhost:5000/apipost');
//         console.log('done');
//       };

//       export const sendUser = async (sendObj) => {
//         console.log('sendUser');
//         await axios.post('http://localhost:5000/apipost', sendObj);
//         console.log('Done sent');
//         const ans = await axios.get('http://localhost:5000/apipost');
//         console.log('Done');
//         return ans;
//       };

import React, { Component } from 'react';

export default class result extends Component {
  state = {
    name: '',
    banana: 0,
    apple: 0,
    orange: 0,
  };
  async componentDidMount() {
    console.log('hi');
    this.setState({ name: this.props.name });
    console.log(this.state.name);
  }
  render() {
    return <div>hi</div>;
  }
}
