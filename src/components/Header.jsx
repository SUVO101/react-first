import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div style={{backgroundColor: "#a9dff5ff", padding: "10px",border: "1px solid #ccc",display: "flex", justifyContent: "space-between"}}>
        <h1>Header</h1>
        <ul style={{display: "flex", gap: "15px", listStyle: "none"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    </div>
  )
}

export default Header