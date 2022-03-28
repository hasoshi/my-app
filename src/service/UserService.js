import { users } from '../data/UsersData'
function get_login(username, password) {
  try {
    let data = users.find(user => (user.username === username && user.password === password));
    return data;
  }catch (e) {
    return [];
  }
}
export default get_login;