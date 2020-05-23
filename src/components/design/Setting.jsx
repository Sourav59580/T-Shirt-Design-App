import React from 'react'
const black = 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/reebonz-prada-t-shirt-dark-blue-ujm564-710-f0124-prada-1-5d6c6373-c1e7-4cd5-a38d-2c7f8076bed1_t1x7ex.jpg'
const blue = 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/AyeGear_T5_tshirt_with_pockets_clothing_fashion_style_hiking_fishing_cycling_scottevest_pickpocket_proof_concealed5_ds1cac.jpg'
const white = 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/Cotton-Tshirt-600x600_mxohxt.jpg'
const red = 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mens-round-neck-t-shirt-500x500_sm3xsu.jpg'

function Setting() {
    return (
        <div className='card bg-light container py-2'>
            <h3 className='text-center'>Setting</h3>
            <hr style={{ border:'1px solid black'}}/>
            <h5>Change T-Shirt color</h5>
            <div className='imgsBox d-flex justify-content-around'>
                <img src={black} alt='blackShirt' width='55px'/>
                <img src={blue} alt='blueShirt' width='60px'/>
                <img src={white} alt='whiteShirt' width='60px'/>
                <img src={red} alt='redShirt' width='60px'/>
            </div>
            <hr style={{ border:'1px solid #ccc'}}/>
            <div className='writeText'>
                <h5>Write Text</h5>
                <p>Upper Text</p>
                 <input type='text' className='uppertext form-control border-0 shadow-sm bg-white rounded mb-2'/>
                <p>Lower Text</p>
                 <input type='text' className='lowertext form-control border-0 shadow-sm bg-white rounded mb-2'/>
            </div>
            <hr style={{ border:'1px solid #ccc'}}/>
            <div className='textDecoration'>
                <div className='row'>
                    <div className='text-size col-6'>
                       <p>Text Size</p>
                       <input type='range'/>
                    </div>
                    <div className='text-color col-6'>
                        <p>Text-color</p>
                        <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="color" id="textColor" value="Black"/>
                              Black
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="color" id="textColor" value="White"/>
                              White
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="color" id="textColor" value="Blue"/>
                              Blue
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="color" id="textColor" value="Red"/>
                              Red
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Setting
