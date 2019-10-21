import Axios from "./Axios";

/**************** 登录  ******************/

/**
 * 登录
 * @param {*} params 
 */
export const  phoneLogin = async (params)=>{
  return await Axios.post("/user/phoneLogin",params)
}

/**
 * 发送短信验证码
 * @param {*} params 
 */
export const  sendPhoneCode = async (params)=>{
  return await Axios.post("/common/sendPhoneCode",params)
}


/**************** 灯火端组织管理  ******************/

/**
 * 获取组织入驻申请列表
 * @param {*} params 
 */
export const  getReviewOrganizations = async (params)=>{
  return await Axios.get("/system/apply/getReviewOrganizations",params)
}

/**
 * 审核组织入驻申请
 * @param {*} params 
 */
export const  reviewOrganization = async (params)=>{
  return await Axios.post("/system/apply/reviewOrganization",params)
}

/**
 * 删除组织入驻申请
 * @param {*} params 
 */
export const  deleteReviewOrganization = async (params)=>{
  return await Axios.post("/system/apply/deleteReviewOrganization",params)
}


/**************** 文明端账户管理  ******************/

/**
 * 获取业委会/筹备组申请列表
 * @param {*} params 
 */
export const  getReviewCommitteeWorks = async (params)=>{
  return await Axios.get("/system/apply/getReviewCommitteeWorks",params)
}

/**
 * 同意 业委会/筹备组账户申请审核
 * @param {*} params 
 */
export const  reviewCommitteeWork = async (params)=>{
  return await Axios.post("/system/apply/reviewCommitteeWork",params)
}

/**
 * 删除业委会/筹备组账户申请审核
 * @param {*} params 
 */
export const  deleteReviewCommitteeWork = async (params)=>{
  return await Axios.post("/system/apply/deleteReviewCommitteeWork",params)
}

