import {useState} from 'react';
import axios from 'axios';

//const
import {Ip} from '../const/ip';
import {LoginText} from '../const';

const useLogin = navigation => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(LoginText.Signup.title);
  const [detail, setDetail] = useState(LoginText.Signup.detail);
  const [disable, setDisable] = useState(false);

  function handleLogin() {
    var session_url = Ip.driver_login;
    var uname = name;
    var password = pass;
    setDisable(true);
    if (!uname || !password) {
      setVisible(true);
      setDisable(false);
      setTitle(LoginText.Error.title);
      setDetail(LoginText.Error.detail);
    } else {
      try {
        axios
          .post(
            session_url,
            {},
            {
              auth: {
                username: uname,
                password: password,
              },
            },
          )
          .then(function(response) {
            setToken(response.data);
            console.log(token);
            navigation.navigate('Home', {userContact: name});
          })
          .catch(function(error) {
            console.log(error);
            setVisible(true);
            setTitle(LoginText.Server.title);
            setDetail(LoginText.Server.detail2);
            throw 'error';
          });
      } catch (error) {
        console.log('error caught: ', error);
        setVisible(true);
        setTitle(LoginText.Server.title);
        setDetail(LoginText.Server.detail1);
      } finally {
        setDisable(false);
      }
    }
  }

  return {
    name,
    setName,
    pass,
    setPass,
    visible,
    setVisible,
    title,
    setTitle,
    detail,
    setDetail,
    handleLogin,
    disable,
  };
};

export default useLogin;
