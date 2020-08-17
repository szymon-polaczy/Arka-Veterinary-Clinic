import React, { Component } from 'react'

class GMap extends Component {  
  render() {
    return (
      <iframe 
        width="100%" height="100%"
        src="https://maps.google.com/maps?q=%20Szczeci%C5%84ska%208%2048-303%20Nysa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        frameBorder="0" 
        scrolling="no"
        marginHeight="0" 
        marginWidth="0"
        title={this.props.title}
      ></iframe>
    )
  }
}

export default GMap