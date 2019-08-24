
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import apiUrl from '../utils/apiUrl';


export const register = async ({name, email, password , password2}) => {
    try {
        const res = await axios({
            method: "post",
            url: `${apiUrl()}/api/user/register`,
            data: {
                name,
                email,
                password,
                password2
            }
        });
        // handle success
        const { token } = res.data;
        if (token) {
            try {
                await AsyncStorage.setItem('token', JSON.stringify(res.data.data.token));
                alert('Register Berhasil');
                this.props.navigation.navigate('Auth');
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
        }
    }
    catch (error_1) {
        alert(error_1);
        // handle error
        console.log(error_1);
    }
      
  }
