
import Footer from "@/components/ui/footer";
import Image from "next/image";
import "@/styles/activitydetails.scss"
import Link from "next/link";
import { cookies } from "next/headers"


export default async function ActivityDetailsPage({ params }) {
    const { activityId } = await params;

    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token");

    const targetHref = authToken ? "/activities" : "/login";

    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}`, {
        headers: {
            "Authorization": "Bearer" + authToken
        }
    });


    const data = await response.json()
    console.log("data", data)

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
                    <Link href={targetHref} className="activities-details__button">Tilmeld</Link>
                </div>
                    <div className="activities-details__info">
                    <p className="activities-details__info-heading">{data.name}</p>
                    <p className="activities-details__info-age">{data.minAge} år</p>
                    <p className="activities-details__info-desc">{data.description} consectetur adipiscing elit. Eget elementum lorem nulla vitae felis auctor pretium suspendisse et. Condimentum fringilla odio vitae interdum adipiscing odio volutpat. Faucibus gravida quis nisi, purus morbi leo nulla a. Mattis tincidunt phasellus enim, egestas non ultrices.</p>
                    <p className="activities-details__info-weekday">ugedag: {data.weekday}</p>
                    <p className="activities-details__info-time">tidspunkt: {data.time}</p>
                    </div>
            </section>
            <Footer />
        </>
    )
}