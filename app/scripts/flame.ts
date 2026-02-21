const PI_2 = Math.PI * 2;
const PI_H = Math.PI * 0.5;

/* =========================
   Vector
========================= */

export class Vector {
  x = 0;
  y = 0;

  constructor({
    x = 0,
    y = 0,
    len = null,
    angle = null
  }: {
    x?: number;
    y?: number;
    len?: number | null;
    angle?: number | null;
  }) {
    if (len !== null && angle !== null) {
      this.setLenAngle(len, angle);
    } else {
      this.set(x, y);
    }
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  setLenAngle(len: number, angle: number) {
    return this.set(Math.cos(angle) * len, Math.sin(angle) * len);
  }

  add(v: Vector) {
    return this.set(this.x + v.x, this.y + v.y);
  }

  addNew(v: Vector) {
    return new Vector({
      x: this.x + v.x,
      y: this.y + v.y
    });
  }

  subtract(v: Vector) {
    return this.set(this.x - v.x, this.y - v.y);
  }

  subtractNew(v: Vector) {
    return new Vector({
      x: this.x - v.x,
      y: this.y - v.y
    });
  }

  multiply(scalar: number) {
    return this.set(this.x * scalar, this.y * scalar);
  }

  dot(v: Vector) {
    return this.x * v.x + this.y * v.y;
  }

  clone() {
    return new Vector({ x: this.x, y: this.y });
  }

  set length(val: number) {
    this.setLenAngle(val, this.angle);
  }

  get length() {
    return Math.sqrt(this.dot(this));
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }
}

/* =========================
   Particle
========================= */

class Particle extends Vector {
  v: Vector;
  size: number;
  link!: Vector;

  constructor({
    x = 0,
    y = 0,
    v = new Vector({})
  }: {
    x?: number;
    y?: number;
    v?: Vector;
  }) {
    super({ x, y });
    this.v = v;
    this.size = 40;
  }

  update() {
    this.add(this.v);
  }

  render(ctx: CanvasRenderingContext2D) {
    const tv = new Vector({
      len: this.size,
      angle: this.v.angle + PI_H
    });

    const a = this.addNew(tv);
    const b = this.subtractNew(tv);

    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, PI_2);
    ctx.closePath();

    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);

    ctx.stroke();
    ctx.fill();
  }
}

/* =========================
   Flame Types
========================= */

export type FlameParams = {
  showParticle?: boolean;
  wind?: Vector;
  friction?: number;
  maxParticle?: number;
  maxDistance?: number;
  frequency?: number;
  sizeCurve?: (x: number) => number;
  innerColor?: string;
  outerColor?: string;
};

/* =========================
   Flame
========================= */

export class Flame extends Vector {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  particles: Map<number, Particle> = new Map();
  pIndex = 1;

  showParticle?: boolean;
  wind: Vector = new Vector({ x: 0, y: -0.8 });
  friction = 1;
  maxParticle = 15;
  maxDistance = 10;
  frequency = 10;
  sizeCurve: (x: number) => number = () => 10;
  innerColor = "blue";
  outerColor = "blueviolet";

  constructor({
    x = 0,
    y = 0,
    canvas,
    ...params
  }: { canvas: HTMLCanvasElement; x?: number; y?: number } & FlameParams) {
    super({ x, y });

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;

    this.ctx.strokeStyle = "orangered";
    this.ctx.fillStyle = "rgba(255,0,0,0.2)";

    this.setParams(params);
  }

  setParams(params: FlameParams = {}) {
    this.showParticle = params.showParticle ?? this.showParticle;
    this.wind = params.wind ?? this.wind;
    this.friction = params.friction ?? this.friction;
    this.maxDistance = params.maxDistance ?? this.maxDistance;
    this.sizeCurve =
      params.sizeCurve ??
      ((x: number) =>
        x > 0.7
          ? Math.sqrt(1 - x) * 50
          : Math.pow(x - 1, 2) * -30 + 30);

    this.innerColor = params.innerColor ?? this.innerColor;
    this.outerColor = params.outerColor ?? this.outerColor;
    this.frequency = params.frequency ?? this.frequency;
    this.maxParticle = params.maxParticle ?? this.maxParticle;
  }

  spawn() {
    const p = new Particle({
      x: this.x,
      y: this.y,
      v: new Vector({
        len: Math.random() * 2,
        angle: Math.random() * PI_2
      })
    });

    this.particles.set(this.pIndex, p);

    if (this.pIndex > this.maxParticle) {
      this.particles.delete(this.pIndex - this.maxParticle);
    }

    this.pIndex++;
  }

  update() {
    let index = 0;

    for (const [i, p] of this.particles) {
      const np = this.particles.get(i + 1) ?? p;

      p.v.add(this.wind).multiply(this.friction);
      p.size = this.sizeCurve(index++ / (this.maxParticle - 1));
      p.update();

      p.link = p.subtractNew(np);

      if (p.link.length > this.maxDistance) {
        const prev = p.clone();
        p.link.length = this.maxDistance;
        p.set(np.x + p.link.x, np.y + p.link.y);
        p.v.add(p.subtractNew(prev).multiply(0.1));
      }
    }

    const tv = new Vector({});
    const ascQ: [Vector, Vector][] = [];
    const descQ: [Vector, Vector][] = [];
    const path = new Path2D();

    for (const [i, p] of this.particles) {
      if (this.showParticle) {
        p.render(this.ctx);
        continue;
      }

      const np = this.particles.get(i + 1) ?? p;
      const pp = this.particles.get(i - 1) ?? p;

      if (np === p && pp === p) {
        path.moveTo(p.x, p.y);
        continue;
      }

      const pAngle = p.link.angle + PI_H;
      const npAngle = np.link.angle + PI_H;
      const ppAngle = pp.link.angle + PI_H;

      const b = pp.subtractNew(tv.setLenAngle(pp.size, ppAngle));
      const c = p.addNew(tv.setLenAngle(p.size, pAngle));
      const d = p.subtractNew(tv);
      const e = np.addNew(tv.setLenAngle(np.size, npAngle));

      const ec = e.addNew(c).multiply(0.5);
      const bd = b.addNew(d).multiply(0.5);

      ascQ.push([c, ec]);
      descQ.unshift([d, bd]);
    }

    [...ascQ, ...descQ].forEach(([p1, p2]) => {
      path.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    });

    path.closePath();
    return path;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const path = this.update();

    const gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      Math.random() * 5,
      this.x,
      this.y,
      this.maxParticle * this.maxDistance * 0.5
    );

    gradient.addColorStop(0, this.innerColor);
    gradient.addColorStop(1, this.outerColor);

    this.ctx.save();

    this.ctx.fillStyle = gradient;
    this.ctx.strokeStyle = gradient;

    this.ctx.fill(path);

    this.ctx.filter = "blur(4px)";
    this.ctx.lineWidth = 4;
    this.ctx.stroke(path);

    this.ctx.restore();
  }

  destroy() {
    this.particles.clear();
  }
}

export default Flame;