import axios from 'axios';
import { baseURL } from '../../api/setting';

export default async function handler(req, res) {
  const { username, password } = req.body;

  const response = await axios.post(baseURL + '/api/v1/users/login', {
    username,
    password,
  });

  try {
    if (response.status === 200) {
      console.log(response.data);
      return res
        .status(200)
        .json({
          ok: true,
          id: response.data.id,
          username: response.data.username,
        });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ ok: false });
  }
}
