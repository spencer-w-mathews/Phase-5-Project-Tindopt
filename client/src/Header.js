import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';
import ForumIcon from '@mui/icons-material/Grade';
import './Header.css'
import IconButton from '@mui/material/IconButton';

function Header({setUser}){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return(
        <div className='header'>
            <a href='/profile'>
            <IconButton onClick={handleLogoutClick}>
            <LogoutIcon className='header__icon'/>
            </IconButton>
            </a>
            <a href='/'>
            <PetsIcon fontSize='large' style={{ color: 'red' }} />
            </a>
            <a href='/favorites'>
            <IconButton>
            <ForumIcon className='header__icon'/>
            </IconButton>
            </a>
        </div>
    )
}

export default Header;