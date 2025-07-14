"use client";

import React, { useMemo } from "react";
import ParticlesBg from "particles-bg";

const ParticlesBgComponent = () => {
  const config = useMemo(() => {
    const baseConfig = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: "all",
      color: ["random", "#00b4f0"],
      cross: "dead",
      random: 15,
    };

    if (Math.random() > 0.85) {
      baseConfig.onParticleUpdate = (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      };
    }

    return baseConfig;
  }, []);

  return <ParticlesBg type="custom" config={config} bg={true} />;
};

export default ParticlesBgComponent;
