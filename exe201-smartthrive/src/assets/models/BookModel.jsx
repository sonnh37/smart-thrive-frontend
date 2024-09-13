/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: dar1amd (https://sketchfab.com/dar1amd)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-book-c850e5d630e9420d85b8d23a2efae4d5
Title: A book
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function BookModel(props) {
  const { nodes, materials } = useGLTF("/BlendModel/a_book.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.22}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.003"]}
            position={[0.094, 1.028, 1.912]}
            scale={[0.101, 0.235, 0.101]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.003"]}
            position={[0.094, 1.028, 1.912]}
            scale={[0.101, 0.235, 0.101]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/BlendModel/a_book.glb");
