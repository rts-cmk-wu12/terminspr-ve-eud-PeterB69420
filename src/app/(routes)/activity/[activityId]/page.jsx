import Footer from "@/components/ui/footer";
import Image from "next/image";
import "@/styles/activitydetails.scss";
import { cookies } from "next/headers";
import JoinActivityButton from "@/components/ui/join-activity";

export async function generateMetadata({ params }) {
    const { activityId } = await params;

    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token")?.value;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}`, {
        headers: {
            "Authorization": "Bearer " + authToken
        },
    });

    const data = await response.json();

    return {
        title: data.name
    }
}

export default async function ActivityDetailsPage({ params }) {
    const { activityId } = await params;

    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token")?.value;
    const userId = cookieStore.get("user_id")?.value; 

    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}`, {
        headers: {
            "Authorization": "Bearer " + authToken
        },
    });

    const data = await response.json();
    console.log("data", data);

    return (
        <>
            <section className="activities-details">
                <div className="activities-details__image-hero">
                    <Image
                        className="activities-details__image"
                        src={data.asset.url}
                        alt={`${data.name}`}
                        width={411}
                        height={489}
                    />
                    <JoinActivityButton
                        userId={userId}
                        activityId={activityId}
                        token={authToken}
                    />
                </div>
                <div className="activities-details__info">
                    <p className="activities-details__info-heading">{data.name}</p>
                    <p className="activities-details__info-age">{data.minAge} år</p>
                    <p className="activities-details__info-desc">{data.description} consectetur adipiscing elit. Eget elementum lorem nulla vitae felis auctor pretium suspendisse et. Condimentum fringilla odio vitae interdum adipiscing odio volutpat. Faucibus gravida quis nisi, purus morbi leo nulla a. Mattis tincidunt phasellus enim, egestas non ultrices.</p>
                    <p className="activities-details__info-weekday">Ugedag: {data.weekday}</p>
                    <p className="activities-details__info-time">Tidspunkt: {data.time}</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
