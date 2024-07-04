import axios from "axios";
import { baseURL } from "../../../api/setting";

export default async function handler(req, res) {
  const { spotId } = req.query;

  const response = await axios.get(baseURL + `/api/v1/spots/${spotId}`);

  return res.status(200).json({ data: response.data });
}
