const BUTTERFLY_COUNT = 160;
const MOUSE_RADIUS = 140;
const TRAIL_ALPHA = 0.28;

// 나비 떼 스크립트 엔진 구동
const canvas = document.getElementById('interactionCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const butterflies = [];
const mouse = { x: -1000, y: -1000, radius: MOUSE_RADIUS};

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

for (let i = 0; i < BUTTERFLY_COUNT; i++) { butterflies.push(new Butterfly()); }

//animate()함수 역할 분리(SRP)
// 캔버스 잔상 레이어 클리어 함수
function clearCanvas() {
    ctx.fillStyle = 'rgba(11, 15, 25, 0.28)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 모든 나비들의 상태 업데이트 및 렌더링 루프 분리
function updateAndRenderButterflies() {
    for (let i = 0; i < butterflies.length; i++) {
        butterflies[i].update();
        butterflies[i].draw();
    }
}

// [리팩토링 후] 애니메이션 타임라인 제어만 담당하는 메인 루프
function animate() {
    clearCanvas();
    updateAndRenderButterflies();
    requestAnimationFrame(animate);
}

// 애니메이션 구동
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
});