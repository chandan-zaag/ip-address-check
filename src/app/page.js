import Image from "next/image";
import { headers } from "next/headers";

export default function Home() {
    const requestHeaders = headers();
    const ipAddress =
        requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ||
        requestHeaders.get("x-real-ip") ||
        requestHeaders.get("cf-connecting-ip") ||
        requestHeaders.get("x-client-ip") ||
        requestHeaders.get("x-forwarded") ||
        requestHeaders.get("forwarded-for") ||
        requestHeaders.get("forwarded") ||
        "unknown";

    console.log({ ipAddress });
    return (
        <div>
            <h1>ip address check</h1>
        </div>
    );
}
