import Axios from "./Axios";


/**
 * 获取组织入驻申请列表
 * @param {*} params 
 */
export const  getReviewOrganizations = async (params)=>{
  return await Axios.get("/api/system/apply/getReviewOrganizations",params)
}

/**
 * 审核组织入驻申请
 * @param {*} params 
 */
export const  reviewOrganization = async (params)=>{
  return await Axios.get("/api/system/apply/reviewOrganization",params)
}

/**
 * 删除组织入驻申请
 * @param {*} params 
 */
export const  deleteReviewOrganization = async (params)=>{
  return await Axios.get("/api/system/apply/deleteReviewOrganization",params)
}
