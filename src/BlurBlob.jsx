import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({position,size}) => {
    const {top,left}=position
    const {width,height}= size
  return (
    <div className='absolute' style={{
        top:top,
        left:left,
        height:height,
        width:width,
        transform:'translate(-50%,-50%)',
    }}>
        <div className='w-full h-full bg-pink-500 rounded-full opacity-20 blur-3xl animate-blob'>

        </div>
      
    </div>
  )
}
BlurBlob.PropTypes={
    position:PropTypes.shape({
        top:PropTypes.string,
        left:PropTypes.string,
    }),
    size:PropTypes.shape({
        height:PropTypes.string,
        width:PropTypes.string,
    }),
};

export default BlurBlob
