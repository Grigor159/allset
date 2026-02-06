// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { queryClient } from "../providers/queryProvider";
// import baseApi from "../services/api/baseApi";
// import { getAxiosConfig } from "../services/api/config";
// import { error, success } from "../components/alerts";

// export const useApi = () => {
//     const navigate = useNavigate();

//     const [loading, setLoading] = useState(false)

//     const add = async (endpoint, formData) => {
//         setLoading(true);
//         try {
//             const { data } = await baseApi.post(`/${endpoint}`, formData, getAxiosConfig());

//             if (data.message) {
//                 endpoint === "menu" ? localStorage.setItem("menu", JSON.stringify(data?.menu)) : queryClient.invalidateQueries({ queryKey: [endpoint] });
//                 success(data.message);
//                 navigate(-1);
//             }
//         } catch (err) {
//             error(err.response?.data?.message || err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const edit = async (endpoint, id, formData) => {
//         setLoading(true);
//         try {
//             const { data } = await baseApi.put(`/${endpoint}/${id}`, formData, getAxiosConfig());

//             if (data.message) {
//                 endpoint === "menu" ? localStorage.setItem("menu", JSON.stringify(data?.menu)) : queryClient.invalidateQueries({ queryKey: [endpoint] });
//                 success(data.message);
//                 navigate(-1);
//             }
//         } catch (err) {
//             error(err.response?.data?.message || err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const remove = async (endpoint, id, setData) => {
//         try {
//             const { data } = await baseApi.delete(`/${endpoint}/${id}`, getAxiosConfig());

//             if (data.message) {
//                 endpoint === "menu" ? (localStorage.setItem("menu", JSON.stringify(data.menu)), setData(data.menu.data)) : queryClient.invalidateQueries({ queryKey: [endpoint] })
//                 success(data.message);
//             }
//         } catch (err) {
//             error(err.response?.data?.message || err.message);
//         }
//     };

//     return { add, edit, remove, loading };
// };
