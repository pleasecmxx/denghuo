import Axios from "./Axios";


/**
 * 获取组织入驻申请列表
 * @param {*} params 
 */
export const getReviewOrganizations =(params)=>{
  return Axios.get("/api/system/apply/getReviewOrganizations",params)
}
