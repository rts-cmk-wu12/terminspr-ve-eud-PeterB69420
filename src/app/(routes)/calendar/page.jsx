import CalendarCard from "@/components/ui/calendar-card";
import Footer from "@/components/ui/footer";
import Heading from "@/components/ui/heading";
import { cookies } from "next/headers";
import "@/styles/calendar.scss";

export default async function CalendarPage() {
    const cookieStore = await cookies();

    const authToken = cookieStore.get("auth_token")?.value;
    const userId = cookieStore.get("user_id")?.value;
    const role = cookieStore.get("user_role")?.value;
    

    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        headers: {
            "Authorization": `Bearer ${authToken}`,
        },
    });

    const data = await response.json();

    console.log("data", data);
    const activities = data.activities || [];

    return (
        <>
            <section className="calendar-page">
                <Heading heading="Kalender" />
                    {activities.length > 0 ? (
                        activities.map((activity) => (
                            <CalendarCard key={activity.id} activity={activity} role={role} />
                        ))
                    ) : (
                        <p className="calendar-page__no-activities-found">Du er ikke tilmeldt nogen aktiviteter.</p>
                    )}
            </section>
            <Footer />
        </>
    );
}
