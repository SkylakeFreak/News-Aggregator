import './style.scss';
import pfp from './assets/profile.svg';
function Header(){
    let time=new Date()
    const year=time.getFullYear()
    const month=time.getMonth()
    const day=time.getDay()
    const date=time.getDate()
    
    return(
        <div id='Header'>
            <div className='logo'>
                <p>Parul University's</p>
                <span>PU TIMES</span>
            </div>
            <div className="timeline">
                <div className='line'></div>
                <div className='container'>
                    <span>Date: {date}/{month}/{year}</span>
                    <a href=''><span>paruluniversity.ac.in</span></a>
                </div>
            </div>
            <nav className="navbar">
                <p>Agriculture</p>
                <p>Applied Science</p>
                <p>Architecture</p>
                <p>Design</p>
                <p>Engineering</p>
                <p>General</p>
                <p>Homeopathy</p>
                <p>Management</p>
                <p>Nursing</p>
                <p>Pharmacy</p>
                <p>Placement Cell</p>
                <img src={pfp}/>
            </nav>
        </div>
    )
}

export default Header;