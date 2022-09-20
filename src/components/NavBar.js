import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
    
    <div className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">MUSHI3D</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><a>Home</a></li>
        <li tabIndex={0}>
          <a>
            Productos
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-neutral text-neutral-content">
            <li><a>Mangas</a></li>
            <li><a>Impresión 3D</a></li>
          </ul>
        </li>
        <li><a>Contacto</a></li>
      </ul>
      
    </div>
    <>
    <CartWidget></CartWidget>
    </>
  </div>
  )
}
export default NavBar