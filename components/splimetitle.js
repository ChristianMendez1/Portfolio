import { Application } from '@splinetool/runtime';

export default function Splimetitle(){
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/Gv8d9TLyOQYwRSl4/scene.splinecode');
}