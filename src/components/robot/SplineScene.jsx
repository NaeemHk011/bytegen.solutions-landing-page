import React, { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineScene({ scene, className }) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    {/* You might want to customize this loading indicator */}
                    <div className="loader">Loading 3D Scene...</div>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    );
} 