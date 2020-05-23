import React from 'react'
import '../css/Display.css'
function Display() {
    return (
        <div>
            <div className='card'>
                <div className='imgTshirt text-center '>
                    <img className='img responsive w-100'
                     src='https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mintbluetfront_ld4aqi.jpg'
                     alt='imgtshirt-1'
                    />
                </div>
                <div className='design-box text-center'>
                    <div className='upperText'>
                        <p className='text'>Upper text</p>
                    </div>
                    <img
                     src='http://via.placeholder.com/400x300'
                     alt='uploadImage'
                     className='w-50 uploadImage my-1'
                    />
                    <div className='lowerText mt-1'>
                        <p className='text'>Lower Text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display
