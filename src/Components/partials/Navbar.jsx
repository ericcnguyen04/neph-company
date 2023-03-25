import '../../App.css';


export default function Navbar() {
    return(
        <div className="Navbar">
            <a href="/" className='link'>NEPH</a>
            <a href="/search" className='link'>Search</a>
            <a href="/staff" className='link'>Staff</a>
            <a href="/profile" className='link'>Profile</a>
        </div>
    )
}