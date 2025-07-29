'use client';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export const NeuronNetwork = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Create particles (neuron nodes)
    const particles: THREE.Mesh[] = [];
    const lines: THREE.Line[] = [];

    const neuronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const sphereGeometry = new THREE.SphereGeometry(0.5, 12, 12);

    const positions: THREE.Vector3[] = [];

    for (let i = 0; i < 60; i++) {
      const x = Math.random() * 80 - 40;
      const y = Math.random() * 60 - 30;
      const z = Math.random() * 60 - 30;
      const position = new THREE.Vector3(x, y, z);
      positions.push(position);

      const sphere = new THREE.Mesh(sphereGeometry, neuronMaterial);
      sphere.position.copy(position);
      particles.push(sphere);
      scene.add(sphere);
    }

    // Connect neurons with lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, opacity: 0.5, transparent: true });

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 15) {
          const points = [positions[i], positions[j]];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          lines.push(line);
          scene.add(line);
        }
      }
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach((p, i) => {
        p.position.x += Math.sin(i + performance.now() * 0.001) * 0.001;
        p.position.y += Math.cos(i + performance.now() * 0.001) * 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};
