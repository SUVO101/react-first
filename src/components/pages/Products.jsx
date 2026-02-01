import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {

  return (
    <div>
        <h2>Products Page</h2>
        <ul>
            <li><NavLink 
            to="mobiles" 
            style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                fontWeight: isActive ? "bold" : "normal"
            })}
            >Mobiles</NavLink></li>
            <li><NavLink 
            to="laptops"
            style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                fontWeight: isActive ? "bold" : "normal"
            })}
            >Laptops</NavLink></li>
        </ul>

        <Outlet/>

    </div>
  )
}

export default Products