import { UrlResponse } from "@/types/apiTypes";
import apiInstance from "@/utils/axiosInstance";
import React from "react";

async function AllUrlList() {
  const response = await apiInstance.get<UrlResponse[]>("/v3/url/url-list");

  console.log(response.data);

  return <div>AllUrlList</div>;
}

export default AllUrlList;
