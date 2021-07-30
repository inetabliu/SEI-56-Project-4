/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'


const InfoToolTip = () =>  {
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
              <strong>Plant maintenance</strong>
            </Tooltip>
          }
        >
          <Button style={buttonStyle} variant="secondary"><i className="fas fa-calendar-week"></i> </Button>
        </OverlayTrigger>
      ))}
    </>
  
  )
}

export default InfoToolTip