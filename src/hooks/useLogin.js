import {useState} from 'react';
import axios from 'axios';

//const
import {Ip} from '../const/ip';

const useLogin = navigation => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');

  function handleLogin() {
    var session_url = Ip.driver_login;
    var uname = name;
    var password = pass;
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
        navigation.navigate('Users');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return {name, setName, pass, setPass, handleLogin};
};

export default useLogin;
