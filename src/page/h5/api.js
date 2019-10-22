import http from "./http";

/**
 * tokenLogin
 * @param {*} params 
 */
export const  tokenLogin = async (params)=>{
  return await http.post("/file/tokenLogin",params)
}

/**
 * tokenLogin
 * @param {*} params 
 */
export const  getConfigs = async (params)=>{
  return await http.get("/common/getConfigs",params)
}
/**
 * uploadFile
 * @param {*} params 
 */
export const  uploadFile = async (params)=>{
  return await http.post("/file/uploadFile",params)
}


