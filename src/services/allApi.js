import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



//register
export const registerApi = async (reqBody) => {
  return await commonApi('POST', `${serverUrl}/register`, reqBody, "")
}

//login
export const loginApi = async (reqBody) => {
  return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//add review
export const addReviewApi = async(reqBody,reqHeader)=>{
  return await commonApi('POST',`${serverUrl}/addreview`,reqBody,reqHeader)
}

//Reviews in home
export const homeReviewApi = async () => {
  return await commonApi('GET',`${serverUrl}/homeReview`,"","")
}

//all Reviews
//querry parameter = baseurl?key=value
export const allReviewApi = async(searchKey)=>{
  return await commonApi('GET',`${serverUrl}/allReview?search=${searchKey}`,"","")
}

//user project
export const userReviewApi = async(reqHeader)=>{
   return await commonApi('GET',`${serverUrl}/userReview`,"",reqHeader)
}

//delete project
export const deleteReviewApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/deleteReview/${id}`,{},"")
}

//edit project
export const editReviewApi = async(reviewid,reqBody,reqHeader)=>{
  return await commonApi('PUT',`${serverUrl}/edit-review/${reviewid}`,reqBody,reqHeader)
}