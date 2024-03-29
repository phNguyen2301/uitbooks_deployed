import React, { useEffect, useState } from 'react';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TtyIcon from '@mui/icons-material/Tty';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PURGE } from 'redux-persist';
import './topbar.scss';

import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from '../../redux/features/cart/cartSlice';
import { clearFavourite } from '../../redux/features/favourite/favouriteSlice';
import { clear, logoutRequest } from '../../redux/features/user/userSlice';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#FF9933',
    color: 'white',
  },
}));

export default function Topbar(props) {
  const { isAuthenticated, user, status } = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: PURGE,
      key: 'root', // Whatever you chose for the "key" value when initialising redux-persist in the **persistCombineReducers** method - e.g. "root"
      result: () => null, // Func expected on the submitted action.
    });
    // localStorage.removeItem("persist:root");
    window.localStorage.removeItem('persist:root');
    dispatch(clearCart());
    dispatch(clearFavourite());
    dispatch(logoutRequest());
    navigate('/');
  };
  // Search
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/books/${keyword}`);
    } else {
      navigate('/books');
    }
  };
  // done
  useEffect(() => {
    if (isAuthenticated === false && user === null && status === true) {
      toast.success(
        'Đăng xuất thành công, vui lòng chờ trong 3s để quay lại trang Đăng nhập nhé 🥺'
      );
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
      dispatch(clear());
    }
  }, [dispatch, isAuthenticated, navigate, user, status]);

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, [user]);

  const handleIsAuthenticated = () => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  return (
    <header id='section-header'>
      <section className='header-main border-bottom'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-3 col-lg-3 col-md-12'>
              <Navbar.Brand as={Link} to='/'>
                <img
                  className='logo'
                  src='https://drive.google.com/uc?id=11dvknjzd0PYAK4D__KHpwxldlwahSi1g'
                  alt='UITBook-logo'
                />
              </Navbar.Brand>
            </div>
            <div className='col-xl-6 col-lg-5 col-md-6'>
              <form
                action='#'
                className='search-header'
                onSubmit={handleSearch}
              >
                <div className='input-group w-100'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Tìm kiếm sách theo'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <div className='input-group-append'>
                    <Button variant='dark' type='submit'>
                      <SearchIcon /> Tìm kiếm
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div className='widgets-wrap float-md-right'>
                <div className='widget-header mr-3'>
                  <Nav.Item>
                    <Nav.Link eventKey='link-2'>
                      <div className='d-flex flex-column align-items-center'>
                        <NotificationsIcon className='nav-icon' />
                        {/* Thông báo */}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </div>
                <div className='widget-header mr-3'>
                  <Nav.Link as={Link} to='/my-basket' eventKey='link-2'>
                    <div className='d-flex flex-column align-items-center'>
                      <IconButton aria-label='cart' style={{ padding: '0' }}>
                        <StyledBadge
                          badgeContent={cartItems ? cartItems.length : 0}
                        >
                          <ShoppingCartIcon className='nav-icon' />
                        </StyledBadge>
                      </IconButton>
                      {/* Giỏ hàng */}
                    </div>
                  </Nav.Link>
                </div>
                <div className='widget-header'>
                  <NavDropdown
                    align='end'
                    title={
                      <div
                        className='d-flex flex-column align-items-center'
                        onClick={handleIsAuthenticated}
                      >
                        <AccountBoxIcon className='nav-icon' />
                        {/* Tài khoản */}
                      </div>
                    }
                    className='user-dropdown'
                    id='basic-nav-dropdown'
                  >
                    {isAuthenticated ? (
                      <>
                        <NavDropdown.Item as={Link} to='/my-account'>
                          Tài khoản
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/my-favorite-book'>
                          Sách yêu thích
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/admin-blog-new'>
                          Viết blog
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        {isAdmin ? (
                          <NavDropdown.Item as={Link} to='/admin-user-list'>
                            Trang quản lý
                          </NavDropdown.Item>
                        ) : (
                          <></>
                        )}
                        <NavDropdown.Item onClick={handleLogout}>
                          Đăng xuất
                        </NavDropdown.Item>
                      </>
                    ) : (
                      <>
                        <Link to='/signin'></Link>
                      </>
                    )}
                  </NavDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position='bottom-center'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>

      <Navbar variant='light' expand='lg'>
        <Container fluid='md'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              {/* <Nav className="d-flex"> */}
              <Nav.Link
                as={Link}
                to='/books'
                className={`d-flex ${pathname === '/books' ? 'active' : ''}`}
              >
                <ListAltIcon className='nav-icons' />
                Danh mục
              </Nav.Link>
              {/* </Nav> */}

              <Nav.Link
                as={Link}
                to='/blogs'
                className={`d-flex nav-link-items ${
                  pathname === '/blogs' ? 'active' : ''
                }`}
              >
                <RssFeedIcon className='nav-icons' />
                Chia sẻ
              </Nav.Link>

              <Nav.Link
                as={Link}
                to='/about-us'
                className={`d-flex nav-link-items ${
                  pathname === '/about-us' ? 'active' : ''
                }`}
              >
                <GroupsIcon className='nav-icons' />
                Giới thiệu
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='telephone'>
            <TtyIcon />
            Liên hệ: 083.457.7251
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
