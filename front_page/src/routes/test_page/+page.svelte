<script>
    export let data;

    import { onMount } from 'svelte';

    let count = 0;
    let pos_x = 0;
    let pos_y = 0;

    onMount(() => {
    // Set an interval to update the count every 1000 milliseconds (1 second)
        const interval = setInterval(() => {
            count++;
        }, 1000);

        var c = document.getElementById('test_element');
        c?.addEventListener('mouseover', 
            (e)=>{
                pos_x = e.clientX;
                pos_y = e.clientY;
            });
        // Return a cleanup function to stop the interval when the component is unmounted
        return () => clearInterval(interval);
    });

</script>


<main id='test_element'>
    <h1>
        TEST_PAGE
    </h1>
    <p>
        We can run scripts. Check this script output:
        {data.message}
    </p>
    <p>
        Look how long you've been on the page: {count}
    </p>
    <p>
        I'm kinda interested in your mouse. It's currently at: {pos_x}, {pos_y}
    </p>
</main>


<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 100%;
        margin: 0 auto;
        background-color: #adabab;
        }
</style>