import qr from '../img/qr-code.png';

export default function QR() {
  return (
    <div className='qr-component'>
      <img src={qr} className='qr-img' />
      <h2 className='qr-header'>
        Improve your front-end skills by building projects
      </h2>
      <p className='qr-description'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}
