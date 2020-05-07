import {useState, useEffect} from 'react';

import {Ip} from '../const/ip';

import axios from 'axios';

const useDriverData = contact => {
  const [userInfo, setInfo] = useState();
  const userContact = contact;
  // const contact = navigation.getParam('userContact');
  const url = Ip.driver + '/' + contact;

  useEffect(() => {
    axios
      .get(url)
      .then(res => setInfo(res.data))
      .catch(e => console.log(e));
  }, [contact]);

  return {userInfo, userContact};
};

export default useDriverData;
