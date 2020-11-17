import Image from "next/image";
import * as React from "react";

// Optimizes images on window resize, converts it into webp
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap" }}>
        <div>
            <h2 style={{ textAlign: "center" }}>Fixed Imgage</h2>
            <Image
                src="/starbucks.png"
                layout="fixed"
                width={100}
                height={100}
                alt="Starbucks Logo"
            />
        </div>
        <div>
            <h2 style={{ textAlign: "center" }}>Intrinsic Image</h2>
            <Image
                src="/house.jpg"
                layout="intrinsic"
                width={600}
                height={400}
            />
        </div>
        {/* Responsive image. When window grows out it will make a new request and download new image*/}
        <div style={{ width: "100%", height: "auto" }}>
            <h2 style={{ textAlign: "center" }}>Responsive Image</h2>
            <Image
                src="/llama.jpg"
                layout="responsive"
                width={600}
                height={400}
            />
        </div>
        <div>
            <h2 style={{ textAlign: "center" }}>Fill Image</h2>
            <div style={{ position: "relative", width: "600px", height: "400px"}}>
                <Image
                    src="/llama.jpg"
                    layout="fill"
                />
            </div>
        </div>
    </div>
  );
}
