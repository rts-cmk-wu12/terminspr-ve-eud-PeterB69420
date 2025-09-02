"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/components/activitycard.scss"

export default function ActivityCard({ activity }) {
    return (
        <Link href={`/activity/${activity.id}`}>
            <article className="activity-card">
                <Image
                    className="activity-card__image"
                    src={activity.asset.url}
                    alt={`${activity.name}`}
                    width={100}
                    height={100}
                />
                <div className="activity-card__overlay">
                    <p>{activity.name}</p>
                    <p>{activity.minAge} år</p>
                </div>
            </article>
        </Link>
    )
}