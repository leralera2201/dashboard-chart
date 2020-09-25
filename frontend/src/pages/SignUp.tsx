import React, {useEffect} from "react"
import {Link} from 'react-router-dom'
import {Form, Button, Input, Alert, Spin} from 'antd';
import {useHistory} from 'react-router-dom'
import {emailRegex} from "../validation";
import {useDispatch, useSelector} from "react-redux";
import {signUpRequest} from "../store/actions/authActions";
import {RootReducerType} from "../store/reducers/rootReducer";


const SignUp: React.FC = () => {
    const history = useHistory()
    const {user, error, loading} = useSelector((state: RootReducerType) => state.auth )
    const dispatch = useDispatch()
    const onFinish = values => {
        dispatch(signUpRequest(values))
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
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!'},
                        { min: 2, message: 'Minimum two characters required' }]}
                >
                    <Input placeholder="Your name" />
                </Form.Item>
                <Form.Item
                    name="surname"
                    rules={[{ required: true, message: 'Please input your surname!'},
                        { min: 3, message: 'Minimum three characters required' }]}
                >
                    <Input placeholder="Your surname" />
                </Form.Item>
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
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' },
                        { min: 6, message: 'Minimum six characters required' },]}

                >
                    <Input.Password
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm password"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {loading ? <Spin />: 'Sign up'}
                    </Button>
                    Or <Link to="/signin">Already have an account?</Link>
                </Form.Item>
            </Form>
        </div>

    );
}

export default SignUp
