import axios from "axios"

export async function RetrieveIpAddress() {
    const ipAddressResponse = await axios.get('https://api.ipify.org?format=json');
    const ipAddress = ipAddressResponse.data.ip;
    return ipAddress;
}