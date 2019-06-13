import React, {Component} from 'react';
import Webcam from "react-webcam";


class WebcamComponent extends Component{
    state = {
        imageData: null,
        image_name: "photo",
    }

    setRef = webcam => {
        this.webcam = webcam;
      };

    //send the image to backend server
    postDataHandler(){
            fetch('http://localhost:4000/upload-image', {
                method: 'POST',
                body: JSON.stringify({image: this.state.imageData, name: this.state.image_name}),
                headers: {'Content-Type':'application/json'}
              })
                .then(res => {
                  if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Creating or editing a post failed!');
                  }
                  return res.json();
                })
                .then((resdata)=>{
                    console.log(resdata);
                });
          

    }

    //capture image from webcam
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        this.setState({
            imageData: imageSrc
        }, ()=>{
            this.postDataHandler();
        });
    };

    render(){
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
          };
      return (
        <div>
            <h1>Webcam</h1>
            <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
            />
            <div><button onClick={this.capture}>Capturez la photo</button></div>
            {this.state.imageData ?
                <div>
                    <p><img src={this.state.imageData} alt=""/></p>

                </div>
                : null
            }            
        </div>
        
      );
    }


  }
  

export default WebcamComponent;