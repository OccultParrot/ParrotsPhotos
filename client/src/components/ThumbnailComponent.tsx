import {Link} from "react-router-dom";

export default function ThumbnailComponent({variant = "normal"}: { variant?: "small" | "normal" | "large" }) {
    const heights = {
        small: "h-32",
        normal: "h-48",
        large: "h-64"
    };

    return (
        <Link to={"/photos/" + Math.random().toString(36).substring(7)}>
            <div className="break-inside-avoid bg-[var(--secondary)] rounded-xl p-4 mb-4 shadow-sm hover:translate-y transition-transform">
                <div className={`w-full ${heights[variant]} bg-gray-200 rounded-lg`}>

                </div>
            </div>
        </Link>
    )
}