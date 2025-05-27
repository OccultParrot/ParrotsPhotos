import { useMemo } from "react";
import {ThumbnailProps} from "../types.ts";
import ThumbnailComponent from "../components/ThumbnailComponent.tsx";

export default function PhotosPage() {
    const variants = ["small", "normal", "large"] as const;
    const thumbnailCount = 64;

    // Generate random variants once and memoize them
    const randomThumbnails = useMemo(() => {
        return Array.from({ length: thumbnailCount }, (_, index) => {
            const randomVariant = variants[Math.floor(Math.random() * variants.length)];
            return (
                <ThumbnailComponent
                    key={index}
                    variant={randomVariant}
                />
            );
        });
    }, []);

    return (
        <div className="rounded-xl bg-[var(--primary)] columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {randomThumbnails}
        </div>
    )
}