import React, {Component} from 'react';
import QRCode from 'qrcode.react';

class Qrc extends Component{

    render(){
      return (
        <div>
            <h1>QRC CODE</h1>
            <a href="/webcam"><QRCode value=""/></a>
        </div>
      );
    }
  }
  

export default Qrc;