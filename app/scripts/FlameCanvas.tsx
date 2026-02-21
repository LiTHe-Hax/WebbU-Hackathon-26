import { useRef, useEffect } from "react";
import Flame from "./flame";
import type { FlameParams } from "./flame";

type Props = {
  params?: FlameParams;
  xOffset: number;
  yOffset: number;
  zIndex: number;
};

export default function FlameCanvas({ params, xOffset, yOffset, zIndex }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const flameRef = useRef<Flame | null>(null);
  const lastTime = useRef<number>(0);
  const spawnTimer = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    flameRef.current = new Flame({
      canvas,
      ...params
    });

    let frameId: number;

    const loop = (time: number) => {
      const delta = time - lastTime.current;
      lastTime.current = time;

      const flame = flameRef.current;
      if (!flame) return;

      spawnTimer.current += delta;

      if (spawnTimer.current > 1000 / flame.frequency) {
        flame.spawn();
        spawnTimer.current = 0;
      }

      flame.render();
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    flameRef.current?.set(xOffset, yOffset);

    return () => {
      cancelAnimationFrame(frameId);
      flameRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    flameRef.current?.setParams(params);
  }, [params]);

  return (
    <canvas
      ref={canvasRef}
      width={128}
      height={256}
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: zIndex,
        pointerEvents: "none"
      }}
    />
  );
}