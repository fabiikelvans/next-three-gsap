import React, { useEffect, useRef } from 'react';
import {  useLoader, useFrame  } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei';


function Car({...props}) {

    const group = useRef()

    const { nodes, materials } = useGLTF('models/macan/scene.glb')

  return (
    <group ref={group} {...props} dispose={null} position={[-1.5, 0.05, 0]} >
    <group position={[0, 0.43, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.004}>
        <group position={[0, 0, -66.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube_Kuzov_0.geometry} material={materials.Kuzov} />
        </group>
        <group position={[0, 0, -1.5]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube001_Kuzov001_0.geometry} material={materials['Kuzov.001']} />
        </group>
        <group position={[0, 0, -1.5]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube004_glass002_0.geometry} material={materials['glass.002']} />
        </group>
        <group position={[89.9, 60.14, -34.77]} rotation={[-Math.PI / 2, 0, 0]} scale={89.71}>
          <mesh geometry={nodes.Cube007_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[0, 68.03, 55.74]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube005_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[139.78, -68.03, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle_Weels_Protectors_0.geometry} material={materials.Weels_Protectors} />
        </group>
        <group position={[140.4, -67.81, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle001_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[118.7, -25.08, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle002_kuzov_0.geometry} material={materials.kuzov} />
          <mesh geometry={nodes.Circle002_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[147.68, -68.03, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle003_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[81.74, 4.42, 217.59]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane002_glass002_0.geometry} material={materials['glass.002']} />
        </group>
        <group position={[0, -48.3, -220.78]} scale={100}>
          <mesh geometry={nodes.Plane003_Number_0.geometry} material={materials.Number} />
          <mesh geometry={nodes.Plane003_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[0, -63.25, 201.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube010_Reshotka_0.geometry} material={materials.Reshotka} />
        </group>
        <group position={[0, -46.84, -197.68]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube011_Reshotka_0.geometry} material={materials.Reshotka} />
        </group>
        <group position={[0, 56.77, -167.12]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube012_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[89.8, 63.78, -26.64]} rotation={[-1.51, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube014_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[141.46, -68.03, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle004_metall_0.geometry} material={materials.metall} />
          <mesh geometry={nodes.Circle004_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[50.96, -38.27, 200.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube013_Plastic_0.geometry} material={materials.Plastic} />
        </group>
        <group position={[93.4, 19.67, -208.72]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane001_glass002_0.geometry} material={materials['glass.002']} />
        </group>
        <group position={[88.87, 63.99, -88.55]} rotation={[-1.49, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube016_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[93.4, 12.56, -213.74]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane_emission_0.geometry} material={materials.emission} />
        </group>
        <group position={[93.4, 19.67, -207.06]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane005_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[35.67, 10.92, -220.54]} rotation={[-Math.PI, 0, -Math.PI]} scale={31.98}>
          <mesh geometry={nodes.Text_metall_0.geometry} material={materials.metall} />
        </group>
        <group position={[0, 90.08, -146.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube017_Kuzov_0.geometry} material={materials.Kuzov} />
        </group>
        <group position={[0, 9.55, 158.64]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube018_Bagaznik_0.geometry} material={materials.Bagaznik} />
        </group>
        <group position={[11.08, -3.81, -224.11]} rotation={[-Math.PI, 0, -Math.PI]} scale={156.61}>
          <mesh geometry={nodes.Text001_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[89.8, 57.76, 55.28]} rotation={[-1.51, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube019_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[118.1, -71.22, -0.15]} rotation={[-Math.PI / 2, 0.24, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.Cube020_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[131.35, 39.65, 34.61]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane004_Orange_0.geometry} material={materials.Orange} />
        </group>
        <group position={[118.95, 43.72, 25.32]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane007_Miror_0.geometry} material={materials.Miror} />
        </group>
        <group position={[135.97, -68.03, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle006_metall_0.geometry} material={materials.metall} />
        </group>
        <group position={[0, -67.18, 211.75]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube021_Plastic_0.geometry} material={materials.Plastic} />
        </group>
        <group position={[106.31, 24.76, 32.67]} rotation={[-Math.PI / 2, 0.44, 0]} scale={100}>
          <mesh geometry={nodes.Cylinder_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[30.36, 30.74, 84.35]} rotation={[-0.15, -0.01, 1.47]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.Cube022_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[-42.29, 30.74, 83.63]} rotation={[-0.15, -0.18, 1.45]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.Cube023_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[74.22, -85.06, -200.38]} rotation={[Math.PI, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cylinder001_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[135.97, -68.03, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={115.81}>
          <mesh geometry={nodes.Circle007_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[0, -68.03, -144.42]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-115.81, 115.81, 115.81]}>
          <mesh geometry={nodes.Circle008_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[118.7, -25.08, -128.43]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle005_kuzov_0.geometry} material={materials.kuzov} />
          <mesh geometry={nodes.Circle005_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[105.83, -16.92, 15.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube026_kuzov_Hamam_0.geometry} material={materials.kuzov_Hamam} />
        </group>
        <group position={[120.01, 9.53, -5.52]} rotation={[-1.51, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube009_Kuzov001_0.geometry} material={materials['Kuzov.001']} />
        </group>
        <group position={[120.01, 12.6, -70.84]} rotation={[-1.51, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube015_Kuzov001_0.geometry} material={materials['Kuzov.001']} />
        </group>
        <group position={[70.19, -58.49, -210.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane006_emission_0.geometry} material={materials.emission} />
        </group>
        <group position={[9.72, -83.78, -217.83]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle010_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[140.02, -67.81, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle009_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[117.55, -76.92, -45.99]} rotation={[-Math.PI / 2, 0.24, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.Cube002_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[63.03, -87.04, 203.61]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle011_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[112.93, -26.68, -25.3]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube006_Kuzov001_0.geometry} material={materials['Kuzov.001']} />
        </group>
        <group position={[-33.58, 42.06, -184.18]} rotation={[-2.99, -0.26, 1.71]} scale={100}>
          <mesh geometry={nodes.Cube024_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[63.03, -39.31, -200.35]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.Circle012_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[0, -5.44, 219.65]} rotation={[-0.81, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane008_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[0, -46.55, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube025_Reshotka_0.geometry} material={materials.Reshotka} />
        </group>
        <group position={[112.9, -91.86, -0.15]} rotation={[-Math.PI / 2, 0.24, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.Cube027_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[77.05, -74.33, 209.07]} rotation={[-Math.PI / 2, 0, -3.03]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.Plane009_emission_0.geometry} material={materials.emission} />
        </group>
        <group position={[85.61, -79.12, 207.77]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube030_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[81.74, 4.42, 217.59]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane010_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[7.32, 98.28, -161.98]} rotation={[-1.07, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane011_emission_0.geometry} material={materials.emission} />
        </group>
        <group position={[118.75, 38.46, 23.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane013_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[19.72, 95.82, -154.27]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle013_Kuzov001_0.geometry} material={materials['Kuzov.001']} />
        </group>
        <group position={[15.04, 97.68, -163.16]} rotation={[-1.49, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle015_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[70.19, -61.18, -212.42]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane012_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[63.03, -39.31, -198.48]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.Circle016_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[9.72, -83.78, -218.14]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle017_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[63.03, -92.48, 200.77]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle014_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[0, 11.56, -199.74]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube028_Bagaznik_0.geometry} material={materials.Bagaznik} />
        </group>
        <group position={[0, -0.96, -209.9]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube031_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[37.9, -84.76, 214.47]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle019_Orange_Pure_0.geometry} material={materials.Orange_Pure} />
        </group>
        <group position={[118.1, -71.22, -0.15]} rotation={[-Math.PI / 2, 0.24, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.Cube029_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[117.55, -76.92, -45.99]} rotation={[-Math.PI / 2, 0.24, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.Cube032_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[126.6, -68.03, 125.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle020_metall_0.geometry} material={materials.metall} />
        </group>
        <group position={[0, -48.3, -220.33]} scale={100}>
          <mesh geometry={nodes.Plane018_Darc_Metall_0.geometry} material={materials.Darc_Metall} />
        </group>
        <group position={[0, -5.11, 219.97]} rotation={[-0.81, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane019_metall_0.geometry} material={materials.metall} />
        </group>
        <group position={[139.78, -68.03, -128.36]} rotation={[-0.94, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle021_Weels_Protectors_0.geometry} material={materials.Weels_Protectors} />
        </group>
        <group position={[-139.78, -68.03, -128.71]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.Circle022_Weels_Protectors_0.geometry} material={materials.Weels_Protectors} />
        </group>
        <group position={[-139.78, -68.03, 125.48]} rotation={[-2.44, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.Circle023_Weels_Protectors_0.geometry} material={materials.Weels_Protectors} />
        </group>
        <group position={[74.99, -85.04, -200.55]} rotation={[-1.57, 0.01, 0.05]} scale={100}>
          <mesh geometry={nodes.Cylinder002_metall_0.geometry} material={materials.metall} />
        </group>
      </group>
    </group>
  </group>
  )
}

export default Car