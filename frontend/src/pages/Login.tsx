import React, {useEffect} from "react"
import {Link} from 'react-router-dom'
import {Form, Button, Input, Alert, Spin} from 'antd';
import {useHistory} from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {emailRegex} from "../validation";
import {useDispatch, useSelector} from "react-redux";
import {signInRequest} from "../store/actions/authActions";
import {RootReducerType} from "../store/reducers/rootReducer";


const Login: React.FC = () => {
    const history = useHistory()
    const {user, error, loading} = useSelector((state: RootReducerType) => state.auth )
    const dispatch = useDispatch()
    const onFinish = values => {
        console.log('Success:', values);
        dispatch(signInRequest(values))
    };

    useEffect(() => {
        if(user && user.token){
            history.push('/')
        }
    }, [user])

    return (
        <div className='login'>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                {error && <Alert message={error} type="error" showIcon closable/>}
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' },
                        () => ({
                            validator(rule, value) {
                                if (emailRegex.test(value)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Invalid email');
                            },
                        }),]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' },
                        { min: 6, message: 'Minimum six characters required' },]}

                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {loading ? <Spin />: 'Log in'}
                    </Button>
                    Or <Link to="/signup">Register now!</Link>
                </Form.Item>
            </Form>
        </div>

    );
}

export default Login
