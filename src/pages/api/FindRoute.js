import axios from "axios";

export default async function handler(req, res) {
  const { start, goal } = req.query;

  const getRoutes = await axios.get(
    `https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start=${start}&goal=${goal}&option=trafast`,
    {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": "0j7usq82lg",
        "X-NCP-APIGW-API-KEY": "O7Rqgz8iMKsE2qeHYYYh6bgxHctYa8nPio1tuzX9",
      },
    }
  );

  const { route } = getRoutes.data;

  res.status(200).json({
    status: "success",
    data: {
      startPos: [
        route.trafast[0].summary.start.location[1],
        route.trafast[0].summary.start.location[0],
      ],
      endPos: [
        route.trafast[0].summary.goal.location[1],
        route.trafast[0].summary.goal.location[0],
      ],
      distance: route.trafast[0].summary.distance,
      path: route.trafast[0].path,
      guide: route.trafast[0].guide,
    },
  });
}
