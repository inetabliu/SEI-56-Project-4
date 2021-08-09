import React from 'react' 
import axios from 'axios'


const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl, value }) => {
  
  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    handleImageUrl(res.data.url)
    console.log(res.data.url)
  }

  const styleUpload = {
    border: '1px solid #ccc',
    display: 'inline-block',
    padding: '6px 12px',
    cursor: 'pointer',
  }

  const display = {
    display: 'none',
  }

  return (
    <>
      {value ?
        <div>
          <img className="rounded float left"height="auto"  width="200px" src={value} alt="image"/>
        </div>
        :
        <>
          <label style={styleUpload}htmlFor="file-upload" className="custom-file-upload">
            <i className="fa fa-cloud-upload"></i> Upload Image
          </label>
          <input 
            id="file-upload"
            className="input"
            type="file"
            onChange={handleUpload}
            size="10"
            style={display}
          />
        </>
      }
    </>
  )
}