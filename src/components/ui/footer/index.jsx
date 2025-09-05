"use client";

import "@/styles/components/footer.scss"
import Link from "next/link";
import { FiCalendar, FiHome } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

export default function Footer() {
    return (
        <nav className="dock">
            <ul className="dock__list">
                <li className="dock__item">
                    <Link
                        href="/activities"
                    >
                        <FiHome className="dock__icon" />
                    </Link>
                </li>
                <li className="dock__item">
                    <Link
                        href="/search">
                        <CiSearch className="dock__icon" />
                    </Link>
                </li>
                <li className="dock__item">
                    <Link
                        href="/calendar">
                        <FiCalendar className="dock__icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}