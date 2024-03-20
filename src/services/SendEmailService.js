import axios from "axios";
import { environment } from "../environments/environment";

export async function SendEmail(data) {
    try {
        const response = await axios.post(environment.apiService + '/api/email/sendemail', data);
        return response;
    }
    catch (error) {
        return "Error!";
    }
}