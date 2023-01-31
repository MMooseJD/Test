<script>

import {link} from 'svelte-spa-router';

</script>

<div class=' w-full sm:w-1/2 md:w-1/3 md:h-64 sm:h-48 shadow-2xl rounded   '>
    <div class='text-center'>
        <h1 class='text-emerald-500 text-2xl  font-semibold'>
            Welcome to the magic
        </h1>
    </div>
    <div class='justify-center items-center flex h-48 '>

        <a href="/FormOne" use:link  class='py-12 font-semibold text-2xl  rounded-md focus:outline-none hover:scale-110 hover:text-emerald-700 hover:shadow-emerald-700/40 ease-in-out duration-300 text-emerald-500 px-14 shadow-lg shadow-emerald-500/40 '>
            Start
        </a>


    </div>
</div>