import Axios from 'axios';

export default{
    getEmployees: function() {
        return Axios.get('https://randomuser.me/api/?results=50');
    }
};