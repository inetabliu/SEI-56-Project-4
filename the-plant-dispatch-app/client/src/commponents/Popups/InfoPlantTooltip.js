import React from 'react'
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'


const InfoPlantToolTip = () =>  {
 
  const buttonStyle = {
    background: '#3F6844',
    borderColor: '#C4C4C4',
    boxShadow: '2px 2px #C4C4C4',
    marginLeft: '2.5%',
    borderRadius: '5px',
    color: '#FFF',
  }

  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={'Plant maintenance'}>
              <strong>My  plant collection</strong>
            </Tooltip>
          }
        >
          <Button style={buttonStyle} variant="secondary"><i className="fas fa-seedling"></i></Button>
        </OverlayTrigger>
      ))}
    </>
  
  )
}

export default InfoPlantToolTip