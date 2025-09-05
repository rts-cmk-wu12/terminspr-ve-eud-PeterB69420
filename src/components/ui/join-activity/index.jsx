"use client";

import { useRouter } from "next/navigation";

export default function JoinActivityButton({ activityId, token, userId }) {
    const router = useRouter();

    async function joinActivity() {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        router.push(token ? "/calendar" : "/login");
    }

    return (
        <button className="activities-details__button" onClick={joinActivity}>Tilmeld</button>
    );
}