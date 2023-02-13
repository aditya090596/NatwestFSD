import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div class="footer">
  <p>This is Footer</p>
  <ul data-testid="list"class="footer-links">
    <li>
      <a href="/about/">About</a>
    </li>
    <li>
      <a href="/privacy-policy/">Privacy Policy</a>
    </li>
    <li>
      <a href="/disclaimer/">Disclaimer</a>
    </li>
 </ul>
 <p data-testid="footerbrand" class="text-center copy">Copyright &copy; Devpractical.com</p>
</div>
  )
}
