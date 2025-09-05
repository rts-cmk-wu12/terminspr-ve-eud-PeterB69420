"use client";

import { useRouter } from "next/navigation";

export default function JoinActivityButton({ activityId, authToken, userId }) {
    const router = useRouter();

    async function joinActivity() {
        if (!authToken) {
            router.push("/login");
            return;
        }
        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + authToken
            }
        });
        
        router.push("/calendar");
    }

    return (
        <button className="activities-details__button" onClick={joinActivity}>Tilmeld</button>
    );
}