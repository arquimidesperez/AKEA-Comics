import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-div'>
      <div className='copyright-info'>
        AKEA COMICS
      </div>

      <div className="footer-link-holder">
        <div className='footer-names'>
        <a href='https://www.linkedin.com/in/angela-maruca/' target='blank' className='footer-a'>Angela</a>
        </div>
        <div className='footer-names'>
        <a href='https://www.linkedin.com/in/arquimides-perez-leyva/' target='blank' className='footer-a'>Arquimides</a>
        </div>
        <div className='footer-names'>
        <a href='https://www.linkedin.com/in/ernestbizzell/' target='blank' className='footer-a'>Ernest</a>
        </div>
        <div className='footer-names'>
        <a href='https://www.linkedin.com/in/kevin-wand/' target='blank' className='footer-a'>Kevin</a>
        </div>

      </div>
    </div>
  )
}

