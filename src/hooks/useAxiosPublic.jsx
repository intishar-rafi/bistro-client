import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-server-seven-orpin.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;