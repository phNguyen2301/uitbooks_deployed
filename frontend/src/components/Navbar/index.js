import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";

const Navbar = () => {

    return (
        <div className="nav">
            <div className="wrapper">
                {/* <div className="col-xl-6 col-lg-5 col-md-6">
                    <form action="#" className="search-header">
                        <div className="input-group w-100">
                            <input type="text" className="form-control" placeholder="Tìm kiếm" />
                            <div className="input-group-append">
                                <Button variant="dark">
                                    <SearchIcon />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div> */}
                <marquee onMouseOver="this.stop()" onMouseOut="this.start()" scrollamount="10" className='ad-banner'>
                    ❤️❤️❤️ <mark> Đây là dòng để cho bớt trống, xin đừng quá quan tâm về nó mà hãy quan tâm những thứ có ích bên dưới. Cám ơn!!! </mark> - <i> From toàn bộ thành viên nhóm 6 With Love </i>  ❤️❤️❤️
                </marquee>
                <div className="items">
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
