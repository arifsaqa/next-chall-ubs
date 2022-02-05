import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { API_BASE_URL } = process.env;
  if (req.method == "GET") {
    const result = await axios
      .get(`${API_BASE_URL ?? "oops"}/quotes/random`)
      .then((data) => {
        return data.data;
      });
    res.status(200).json({ data: result });
  } else {
    res.status(200).json({ name: "John post" });
  }
};
