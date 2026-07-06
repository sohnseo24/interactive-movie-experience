// 나비 떼 스크립트 엔진 구동
const canvas = document.getElementById('interactionCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const butterflies = [];
const mouse = { x: -1000, y: -1000, radius: 140 };

window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener('mouseout', () => { mouse.x = -1000; mouse.y = -1000; });

class Butterfly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.0;
        this.vy = (Math.random() - 0.5) * 1.0;
        this.baseRadius = Math.random() * 2.5 + 2;
        this.color = 'rgba(255, 215, 0, 0.7)';
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            this.color = 'rgba(0, 191, 255, 0.9)'; 
            let force = (mouse.radius - distance) / mouse.radius;
            let angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 4.5;
            this.y += Math.sin(angle) * force * 4.5;
        } else {
            this.color = 'rgba(255, 215, 0, 0.6)'; 
        }
    }
    draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.rect(this.x - this.baseRadius, this.y - this.baseRadius, this.baseRadius * 2, this.baseRadius * 2);
        ctx.fill();
        ctx.restore();
    }
}

for (let i = 0; i < 160; i++) { butterflies.push(new Butterfly()); }

function animate() {
    ctx.fillStyle = 'rgba(11, 15, 25, 0.28)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    butterflies.forEach((butterfly) => { (butterfly).update(); (butterfly).draw(); });
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
});