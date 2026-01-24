const Header = () => {
  return (
    <div style={{backgroundColor: "#a9dff5ff", padding: "10px",border: "1px solid #ccc",display: "flex", justifyContent: "space-between"}}>
        <h1>Header</h1>
        <ul style={{display: "flex", gap: "15px", listStyle: "none"}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header