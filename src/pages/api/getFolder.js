import axios from 'axios';
import { baseURL } from '../../api/setting';

export default async function handler(req, res) {
  const { userId } = req.body;

  const response = await axios.get(baseURL + `/api/v1/folders/${userId}`);

  try {
    if (response.status === 200) {
      console.log(response.data);
      return res.status(200).json({
        ok: true,
        data: response.data,
      });
    }
  } catch (e) {
    console.log(e);
    return res.statusa(500).json({ ok: false });
  }
}
