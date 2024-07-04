import axios from "axios";
import { baseURL } from "../../api/setting";
export default async function handler(req, res) {
  const { username, nickname, password } = req.body;

  const response = await axios.post(baseURL + "/api/v1/users/signup", {
    username,
    nickname,
    password,
  });

  try {
    if (response.status === 200) {
      return res.status(200).json({ ok: true });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ ok: false });
  }
}
