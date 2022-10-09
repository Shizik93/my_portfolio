import axios from "axios";


const instance = axios.create({
    baseURL: "https://portfolio-smtp-mail-server.herokuapp.com/",
});

export const formAPI = {
    sendMessage(formData: FormDataType) {
        return instance.post("sendMessage", formData);
    },
};

type FormDataType =
    {
        name: string
        email: string
        message: string
        phone: string
    }
