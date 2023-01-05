import PrevPageBtn from '../buttons/prev-page-button';
import NextPageBtn from '../buttons/next-page-button';
import SearchBox from './search-box';
import LibraryTabBtn from './library-tab-btn';
import './topnav.css';
import styles from './topnav.module.css';
import { Link } from 'react-router-dom';

function Topnav({search = false, tabButtons = false}) {
    return (
      <nav className={styles.Topnav}>
          <div>
                <span>
                    <PrevPageBtn />
                    <NextPageBtn />
                    { search ? <SearchBox /> : '' }
                    { tabButtons ? <LibraryTabBtn /> : '' }
                </span>
                <span>
                    <button className={styles.ProfileBtn}>
                        Profile
                    </button>&nbsp;
                    <Link to="/login"><button className={styles.ProfileBtn}>
                        <button className='loginnn'><a className='loginnn' href="">
                        Login
                        </a>
                        </button>
                    </button>
                    </Link>
                </span>
          </div>
      </nav>
      
    );
}
  
export default Topnav;