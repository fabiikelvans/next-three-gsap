import Head from "next/head";
import Script from "next/script";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import Mesh from "../components/Mesh/Mesh";


export default function Home() {
  return (
    <div>
      <Head>
        <title>React Three Fiber Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-[#f1f1f1] h-[100vh] w-[100vw]">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Mesh/>
        </Suspense>
      </Canvas>
      </div>

    </div>
  );
}
