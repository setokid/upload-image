import axios from "axios";
import { File, NextPageToken } from "../component/interface";

const BASEURL = "http://103.90.227.114:8080/google-drive";

export async function uploadFile(formData: FormData) {
  const res = await axios({
    method: "post",
    url: BASEURL + "/upload",
    data: formData,
    headers: {
      "X-XSRF-TOKEN": "192647d7-32c9-4396-94bd-ca8c9348a158",
    },
  });
  return res.status;
}

export async function listEverything(nextPageToken: NextPageToken) {
  const res = await axios
    .get(BASEURL + "/?pagesize=10", {
      data: {
        nextPageToken: nextPageToken,
      },
    })
    .then(function (res) {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res.data;
}
