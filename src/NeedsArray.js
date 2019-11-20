import React from 'react';

export default class NeedsArray extends React.Component {
  render(){
      //join method requires an array
      let a = this.props.array.join('');
      return ( <div>{ a }</div> )
  }
}

