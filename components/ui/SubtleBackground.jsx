// components/ui/SubtleBackground.jsx
import { useEffect, useRef } from 'react';

export default function SubtleBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Update mouse position
    window.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });
    
    // Create gradient wave grid
    class Wave {
      constructor(options) {
        this.options = {
          amplitude: options.amplitude || 40,
          wavelength: options.wavelength || 200,
          segmentLength: options.segmentLength || 10,
          lineWidth: options.lineWidth || 1,
          speed: options.speed || 0.1,
          color: options.color || '#8A2BE2',
          x: options.x || 0,
          y: options.y || canvas.height / 2,
        };
        
        this.phase = Math.random() * Math.PI * 2;
      }
      
      draw() {
        ctx.beginPath();
        
        this.phase += this.options.speed;
        
        for (let x = this.options.x; x < this.options.x + canvas.width; x += this.options.segmentLength) {
          // Calculate distance from mouse
          const dx = mouseX - x;
          const dy = mouseY - this.options.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Increase amplitude if near mouse
          const amplitudeMod = Math.max(0, 1 - distance / 300) * 30 + this.options.amplitude;
          
          // Calculate wave point
          const y = this.options.y + 
                   Math.sin(x / this.options.wavelength + this.phase) * 
                   amplitudeMod;
          
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = this.options.color;
        ctx.lineWidth = this.options.lineWidth;
        ctx.stroke();
      }
    }
    
    // Create a grid of waves
    let waves = [];
    
    const createWaves = () => {
      waves = []; // Clear existing waves
      
      // Create horizontal waves
      const spacing = Math.ceil(canvas.height / 10);
      
      for (let i = 0; i < 10; i++) {
        const y = i * spacing;
        waves.push(new Wave({
          amplitude: 10 + Math.random() * 10,
          wavelength: 200 + Math.random() * 100,
          speed: 0.02 + Math.random() * 0.01,
          segmentLength: 10,
          lineWidth: 0.5,
          // Increased opacity for better visibility
          color: `rgba(138, 43, 226, ${0.08 + (i / 28)})`,
          x: 0,
          y: y,
        }));
      }
      
      // Create vertical waves (rotated horizontally)
      const verticalSpacing = Math.ceil(canvas.width / 15);
      
      for (let i = 0; i < 15; i++) {
        const x = i * verticalSpacing;
        waves.push(new Wave({
          amplitude: 5 + Math.random() * 5,
          wavelength: 150 + Math.random() * 100,
          speed: 0.01 + Math.random() * 0.008,
          segmentLength: 10,
          lineWidth: 0.4,
          // Increased opacity for better visibility
          color: `rgba(147, 112, 219, ${0.06 + (i / 42)})`,
          x: x,
          y: 0,
        }));
      }
    };
    
    createWaves();
    
    // Add some floating geometric shapes
    class FloatingShape {
      constructor() {
        this.size = Math.random() * 40 + 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        // Increased opacity for better visibility
        this.opacity = Math.random() * 0.09 + 0.03;
        // Added more shape types: 0: triangle, 1: rectangle, 2: circle, 3: diamond, 4: hexagon, 5: star, 6: pentagon
        this.type = Math.floor(Math.random() * 7);
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        
        // Wrap around edges
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        
        // React to mouse proximity
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Push away from mouse
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * 0.05;
          this.vy -= Math.sin(angle) * 0.05;
          
          // Limit max speed
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 2) {
            this.vx = (this.vx / speed) * 2;
            this.vy = (this.vy / speed) * 2;
          }
        } else {
          // Gradually return to normal speed
          this.vx *= 0.99;
          this.vy *= 0.99;
        }
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        // Draw based on shape type
        switch(this.type) {
          case 0: // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.fillStyle = '#8A2BE2';
            ctx.fill();
            break;
            
          case 1: // Rectangle
            ctx.beginPath();
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.fillStyle = '#9370DB';
            ctx.fill();
            break;
            
          case 2: // Circle
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fillStyle = '#9932CC';
            ctx.fill();
            break;
            
          case 3: // Diamond
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(this.size / 2, 0);
            ctx.lineTo(0, this.size / 2);
            ctx.lineTo(-this.size / 2, 0);
            ctx.closePath();
            ctx.fillStyle = '#BA55D3'; // Medium orchid
            ctx.fill();
            break;
            
          case 4: // Hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI * 2 / 6) * i;
              const x = Math.cos(angle) * (this.size / 2);
              const y = Math.sin(angle) * (this.size / 2);
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.fillStyle = '#DA70D6'; // Orchid
            ctx.fill();
            break;
            
          case 5: // Star
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const outerAngle = (Math.PI * 2 / 5) * i - Math.PI / 2;
              const innerAngle = outerAngle + Math.PI / 5;
              
              const outerX = Math.cos(outerAngle) * (this.size / 2);
              const outerY = Math.sin(outerAngle) * (this.size / 2);
              
              const innerX = Math.cos(innerAngle) * (this.size / 4);
              const innerY = Math.sin(innerAngle) * (this.size / 4);
              
              if (i === 0) {
                ctx.moveTo(outerX, outerY);
              } else {
                ctx.lineTo(outerX, outerY);
              }
              
              ctx.lineTo(innerX, innerY);
            }
            ctx.closePath();
            ctx.fillStyle = '#DDA0DD'; // Plum
            ctx.fill();
            break;
            
          case 6: // Pentagon
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
              const x = Math.cos(angle) * (this.size / 2);
              const y = Math.sin(angle) * (this.size / 2);
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.fillStyle = '#D8BFD8'; // Thistle
            ctx.fill();
            break;
        }
        
        ctx.restore();
      }
    }
    
    // Create floating shapes - adding more shapes
    const shapes = [];
    const shapeCount = Math.min(Math.floor(canvas.width / 130), 18); // Increased shape count
    
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new FloatingShape());
    }
    
    // Add subtle glow effect near edges
    const drawGlowEdges = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      // Increased glow intensity
      gradient.addColorStop(0, 'rgba(138, 43, 226, 0.18)');
      gradient.addColorStop(0.2, 'rgba(138, 43, 226, 0)');
      gradient.addColorStop(0.8, 'rgba(138, 43, 226, 0)');
      gradient.addColorStop(1, 'rgba(138, 43, 226, 0.18)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const horizontalGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      // Increased glow intensity
      horizontalGradient.addColorStop(0, 'rgba(138, 43, 226, 0.18)');
      horizontalGradient.addColorStop(0.2, 'rgba(138, 43, 226, 0)');
      horizontalGradient.addColorStop(0.8, 'rgba(138, 43, 226, 0)');
      horizontalGradient.addColorStop(1, 'rgba(138, 43, 226, 0.18)');
      
      ctx.fillStyle = horizontalGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    // Add subtle grid overlay
    const drawGrid = () => {
      ctx.beginPath();
      // Increased grid visibility slightly
      ctx.strokeStyle = 'rgba(138, 43, 226, 0.04)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      
      ctx.stroke();
    };
    
    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid();
      
      // Draw glow edges
      drawGlowEdges();
      
      // Draw waves
      waves.forEach(wave => {
        wave.draw();
      });
      
      // Update and draw shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      createWaves();
    });
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{ background: 'linear-gradient(to bottom, #000000 80%, #0A0A0A 100%)' }}
    />
  );
}
