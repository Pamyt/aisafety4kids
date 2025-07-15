import React, { useRef, useEffect, useState } from "react";
import {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Composite,
} from "matter-js";

export default function BrickPhysicsBackground({
    spawnInterval = 800,
    bricksPerSpawn = [2, 5],
    minSize = 26,
    maxSize = 46,
    maxBricks = 120,
    colors = [
        "#fef9c3", "#bfdbfe", "#bbf7d0",
        "#fecaca", "#fde2e2", "#e0e7ff",
        "#fce7f3", "#fff7ed",
    ],
}) {
    const wrapRef = useRef(null);
    const resizeObs = useRef(null);
    const [isReady, setIsReady] = useState(false);
    
    // 使用防抖优化尺寸变化处理
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const trimWorld = (world, limit) => {
        const bodies = Composite.allBodies(world);
        if (bodies.length > limit) {
            World.remove(world, bodies.slice(0, bodies.length - limit));
        }
    };

    useEffect(() => {
        // 确保父容器完全加载
        const checkParentSize = () => {
            const parent = wrapRef.current?.parentElement;
            if (!parent) return false;
            
            const { width, height } = parent.getBoundingClientRect();
            return width > 10 && height > 10;
        };
        
        // 延迟初始化以确保尺寸可用
        const initTimer = setInterval(() => {
            if (checkParentSize()) {
                clearInterval(initTimer);
                setIsReady(true);
            }
        }, 100);
        
        return () => clearInterval(initTimer);
    }, []);

    useEffect(() => {
        if (!isReady) return;
        
        const wrapper = wrapRef.current;
        if (!wrapper) return;

        const parent = wrapper.parentElement;
        const getSize = () => {
            const rect = parent.getBoundingClientRect();
            return {
                width: rect.width,
                height: rect.height,
                top: rect.top,
                left: rect.left
            };
        };
        
        let { width: w, height: h } = getSize();
        
        // 确保最小有效尺寸
        if (w < 10 || h < 10) {
            console.warn("Container size too small, using default 800x600");
            w = 800;
            h = 600;
        }

        /* 引擎 & 渲染器 */
        const engine = Engine.create({ 
            gravity: { 
                y: 1,
                scale: 0.001
            } 
        });
        
        const render = Render.create({
            element: wrapper,
            engine,
            options: {
                width: w,
                height: h,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio || 1,
            },
        });
        
        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        /* 边界 - 加厚边界防止穿透 */
        const T = 100;
        const ground = Bodies.rectangle(w / 2, h + T / 2, w * 2, T, { 
            isStatic: true,
            render: { fillStyle: "transparent" }
        });
        
        const leftWall = Bodies.rectangle(-T / 2, h / 2, T, h * 2.5, { 
            isStatic: true,
            render: { fillStyle: "transparent" }
        });
        
        const rightWall = Bodies.rectangle(w + T / 2, h / 2, T, h * 2.5, { 
            isStatic: true,
            render: { fillStyle: "transparent" }
        });
        
        World.add(engine.world, [ground, leftWall, rightWall]);

        /* 砖块生成 */
        const spawn = () => {
            const [min, max] = bricksPerSpawn;
            const cnt = Math.floor(Math.random() * (max - min + 1)) + min;
            
            for (let i = 0; i < cnt; i++) {
                const size = minSize + Math.random() * (maxSize - minSize);
                const x = Math.random() * (w - size * 2) + size;
                
                const brick = Bodies.rectangle(x, -size, size, size, {
                    restitution: 0.15,
                    friction: 0.7,
                    frictionAir: 0.01,
                    render: { 
                        fillStyle: colors[Math.floor(Math.random() * colors.length)],
                        strokeStyle: "rgba(0,0,0,0.1)",
                        lineWidth: 1
                    },
                });
                
                World.add(engine.world, brick);
            }
            
            trimWorld(engine.world, maxBricks);
        };
        
        const timer = setInterval(spawn, spawnInterval);

        /* 尺寸变化处理 */
        const handleResize = debounce(() => {
            const { width, height } = getSize();
            
            if (Math.abs(width - w) > 5 || Math.abs(height - h) > 5) {
                w = width;
                h = height;
                
                render.canvas.width = w;
                render.canvas.height = h;
                
                // 更新边界位置
                Body.setPosition(ground, { x: w / 2, y: h + T / 2 });
                Body.setPosition(leftWall, { x: -T / 2, y: h / 2 });
                Body.setPosition(rightWall, { x: w + T / 2, y: h / 2 });
                
                // 重置渲染
                Render.lookAt(render, {
                    min: { x: 0, y: 0 },
                    max: { x: w, y: h }
                });
            }
        }, 100);
        
        // 初始设置
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: w, y: h }
        });
        
        // 添加尺寸监听
        resizeObs.current = new ResizeObserver(handleResize);
        resizeObs.current.observe(parent);
        
        // 添加窗口resize监听作为备用
        window.addEventListener("resize", handleResize);

        /* 清理 */
        return () => {
            clearInterval(timer);
            resizeObs.current?.disconnect();
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            World.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, [isReady, spawnInterval, bricksPerSpawn, minSize, maxSize, maxBricks, colors]);

    return (
        <div 
            ref={wrapRef} 
            className="absolute inset-0 pointer-events-none z-0"
            style={{ visibility: isReady ? "visible" : "hidden" }}
        />
    );
}