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
import axios from 'axios';

export default class result extends Component {
  state = {
    name: '',
    banana: 0,
    apple: 0,
    orange: 0,
  };

  async componentDidMount() {
    const profile = await axios.post('http://localhost:5000/apifind', {
      name: this.props.location.name,
    });
    console.log('Done sent');
    if (profile.data != null) {
      this.setState({
        name: profile.data.name,
        banana: profile.data.banana,
        apple: profile.data.apple,
        orange: profile.data.orange,
      });
    }
    // const ans = await axios.get('http://localhost:5000/apiget');
    console.log(profile);
    // console.log(ans);
  }
  onClick = async () => {
    await axios.post('http://localhost:5000/apipost');
    this.setState({
      name: '',
      banana: 0,
      apple: 0,
      orange: 0,
    });
  };

  render() {
    return <div>hi</div>;
  }
}
