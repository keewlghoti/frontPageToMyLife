<main>
    <h1>
        Kweel_Pong
    </h1>

    <canvas id = "my-canvas" width="640" height="480"></canvas>
</main>

<script>

    import { onMount } from 'svelte';
    var p1y = 40; 
    var p2y = 40;
    var pthick = 10;
    var pheight = 100;
    var ballx = 50;
    var bally = 50;
    var bd = 6;
    var xvel = 10;
    var yvel = 10;
    var score1 = 0;
    var score2 = 0;
    var aiSpeed = 6;
  
    onMount(() => {
        var c = document.getElementById('my-canvas');
        var cc = c.getContext('2d');
        cc.font = '20px Arial';
        setInterval(update, 1000/30);
        c.addEventListener('mousemove', (e)=> {
            //p1y = e.clientY-pheight/2;
            p1y = e.clientY - 230;
        });
        // Background
        // cc.fillStyle = 'black';
        // cc.fillRect(0, 0, c.width, c.height);
        // // Ball
        // cc.fillStyle = 'firebrick';
        // cc.fillRect(ballx-bd/2, bally-bd/2, bd, bd);
        // // Paddle 1
        // cc.fillStyle = 'cyan';
        // cc.fillRect(0, p1y, pthick, pheight);
        // // Score 1
        // cc.fillText(score1, 100, 50);
        // // Paddle 2
        // cc.fillStyle = 'lime';
        // cc.fillRect(c.width-pthick, p2y, pthick, pheight);
        // // Score 2
        // cc.fillText(score2, c.width-100, 50);

        function reset() {
            ballx = c.width/2;
            ballyx = c.height/2;
            xvel = -xvel;
            yvel = 3;
            }

        function update() {
            ballx += xvel;
            bally += yvel;
            if (bally < 0 && yvel < 0) {
                yvel = -yvel;
            }
            if (bally > c.height && yvel > 0) {
                yvel = -yvel;
            }
            // Ball bouncing off left side
            if (ballx < 0) {
                if (bally > p1y && bally < p1y + pheight) {
                xvel = -xvel;
                deltaY = bally - (p1y + pheight/2);
                yvel = deltaY*0.3;
                } else {
                score2++;
                reset();
                }
            }
            // Ball bouncing off right side
            if (ballx > c.width) {
                if (bally > p2y && bally < p2y + pheight) {
                xvel = -xvel;
                deltaY = bally - (p2y + pheight/2);
                yvel = deltaY*0.3;
                } else {
                score1++;
                reset();
                }
            }
        
            // AI movement
            if (p2y+pheight/2 < bally || p2y+pheight/2 < bally+10) {
                p2y += aiSpeed;
            }
            if (p2y+pheight/2 > bally || p2y+pheight/2 > bally-10) {
                p2y -= aiSpeed;
            }
            // Background
            cc.fillStyle = 'black';
            cc.fillRect(0, 0, c.width, c.height);
            // Ball
            cc.fillStyle = 'firebrick';
            cc.fillRect(ballx-bd/2, bally-bd/2, bd, bd);
            // Paddle 1
            cc.fillStyle = 'cyan';
            cc.fillRect(0, p1y, pthick, pheight);
            // Score 1
            cc.fillText(score1, 100, 50);
            // Paddle 2
            cc.fillStyle = 'lime';
            cc.fillRect(c.width-pthick, p2y, pthick, pheight);
            // Score 2
            cc.fillText(score2, c.width-100, 50);
        }
    });
</script>





<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 100%;
        margin: 0 auto;
        background-color: #9e9999;
    }
    	h1 {
		background-color: #a89b9b;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 130;
	}
</style>