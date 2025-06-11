import React from "react";
// Import SplineScene from the same directory
import { SplineScene } from "./SplineScene";

export function NewYorkerSpline() {
    return (
        <div className="h-screen w-full bg-black relative overflow-hidden">
            <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
            />
        </div>
    );
} 