import Link from "next/link";
import "@/styles/calendar.scss"

export default function CalendarCard({ activity }) {
    
    return (
        <div className="calendar-page__box">
        <Link href={`/activity/${activity.id}`}>
            <article>
            <div>
                <p className="calendar-page__name">{activity.name}</p>
                <p className="calendar-page__time">
                    {activity.weekday} kl. {activity.time}
                </p>
            </div>
            </article>
        </Link>
        </div>
    );
}
