import style from './Navbar.module.css';

function Navbar({count , age , name}) {
  
  return (
    <nav className={style.gb}>
     <a href='#'>Home {name}</a>
     <a href='#'>About</a>
     <a href='#'>Contact {age}</a>
     <a href='#'>Cart {count}</a>
    </nav>
  )
}

export default Navbar;