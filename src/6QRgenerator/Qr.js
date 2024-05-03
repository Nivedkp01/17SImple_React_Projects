import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import './Qr.css'
function Qr() {

  const [input, setInput] = useState('')
  const [qrvalue, setQrValue] = useState('')

  useEffect(() => {

  }, [input])

  function handleQr() {
    if (input !== '') {
        setQrValue(input)

    }
  }
  return (
    <div className='outer'>
      <div className='inp'>
        <input onChange={(e) => { setInput(e.target.value) }} placeholder='Enter value' type='text' />
        <button onClick={handleQr}>Generate</button>

      </div>
      <QRCode value={qrvalue} />
    </div>
  )
}

export default Qr