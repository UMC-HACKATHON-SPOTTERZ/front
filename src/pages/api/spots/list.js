import axios from "axios";
import { baseURL } from "../../../api/setting";

export default async function handler(req, res) {
  const { latitude, longitude } = req.query;

  const response = await axios.get(
    `http://ec2-13-209-103-2.ap-northeast-2.compute.amazonaws.com:8080/api/v1/spots/list?latitude=${latitude}&longitude=${longitude}`
  );

  return res.status(200).json({
    data: response.data,
  });
}
