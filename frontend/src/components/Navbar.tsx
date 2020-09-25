import React from 'react'
import {Layout, Menu } from 'antd'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../store/reducers/rootReducer";
import {logOut} from "../store/actions/authActions";

const {Header} = Layout


const Navbar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {user} = useSelector((state: RootReducerType) => state.auth)
    return  (
        <Header>
        <div className="logo" />
            {user && user.token ?
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}
                      selectedKeys={[location.pathname]}>
                   <Menu.Item key="/"> <Link to={'/'}>Dashboard</Link></Menu.Item>
                    <Menu.Item key="/chart"><Link to={'/chart'}>Chart</Link></Menu.Item>
                   <Menu.Item key="" onClick={() => dispatch(logOut())}> <Link to={'/signin'}>Logout</Link></Menu.Item>
                </Menu>
                :
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/signin']}
                      selectedKeys={[location.pathname]}>
                    <Menu.Item key="/signin" ><Link to={'/signin'}>Login</Link></Menu.Item>
                </Menu>
            }

    </Header>
    );
}

export default Navbar
