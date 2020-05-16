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
  componentDidMount() {
    console.log('hididmount');
    console.log(this.props.location.name);
    const name1 = this.props.location.name;
    console.log(name1);
    this.setState({ name: name1 });
    this.setState({ banana: 1 });
    console.log(this.state);
    this.setState((state, props) => ({
      name: state.name + props.location.name,
    }));
    console.log(this.state);
  }
  render() {
    return <div>hi</div>;
  }
}
