import React, { Component } from 'react'
import Display from '../design/Display'
import Setting from '../design/Setting'
import ImageUpload from '../design/ImageUpload'

class Dashboard extends Component {
    state = {
        tshirtImage : 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mintbluetfront_ld4aqi.jpg',
        upperText : "This is upper text",
        lowerText : 'This is lower text',
        file : '',
        uploadImage : "http://via.placeholder.com/400x300",
        textSize : '30',
        textColor : "black"
    }
    handleTshirtColor = (e)=>{
        this.setState({
            tshirtImage : e.target.src
        })
    }
    handleUpperText = (e)=>{
        this.setState({
            upperText : e.target.value
        })
    }
    handleLowerText = (e)=>{
        this.setState({
            lowerText : e.target.value
        })
    }
    handleTextColor = (e)=>{
        this.setState({
            textColor : e.target.value
        })
    }
    handleTextSize = (e)=>{
        this.setState({
            textSize : e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
    }
    handleUploadImage = (e)=>{
        // e.preventDefault();

        // let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        // reader.onloadend = () => {
        //     this.setState({
        //       file: file,
        //       uploadImage: reader.result
        //     });
        //   }
        // reader.readAsDataURL(file)    
    }
    render() {
        return (
            <div className='container py-5'>
                <div className="row">
                   <div className="col-lg-8">
                        <Display display={this.state}/>
                   </div>
                   <div className="col-lg-4">
                        <Setting 
                        color={this.handleTshirtColor}
                        upperText={this.handleUpperText}
                        lowerText={this.handleLowerText}
                        textColor={this.handleTextColor}
                        textSize={this.handleTextSize}
                        submit = {this.handleSubmit}
                        />
                    </div>
                </div>  
                <div className='container'>
                    <ImageUpload/>
                </div>
            </div>
        )
    }
}

export default Dashboard
