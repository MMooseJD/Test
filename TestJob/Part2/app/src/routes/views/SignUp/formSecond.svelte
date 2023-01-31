<script>
    import {link} from 'svelte-spa-router';
</script>
<div class=' w-full sm:w-1/2 md:w-1/3 md:h-96 sm:h-1/4 shadow-2xl rounded   '>
    <div class='text-center '>
        <h1 class='text-emerald-500 text-2xl font-semibold'>
            Form # 2
        </h1>
    </div>
    <div class='justify-center items-center flex  '>

        <form class='" p-6 '>
            <div>
                <label for="firstName" class='text-emerald-700 font-semibold'>first Name</label>
                <input type="text" name="firstName" placeholder="david" class='shadow appearance-none border-emerald-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            </div>
            <div>
                <label for="lastName" class='text-emerald-700 font-semibold'>last Name</label>
                <input type="text" name="lastName" placeholder="Perez" class='shadow appearance-none border-emerald-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            </div>
            <div>
                <label for="carModel" class='text-emerald-700 font-semibold'>car Model</label>
                <input type="text" name="carModel" placeholder="A3" class='shadow appearance-none border-emerald-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            </div>
            <div>
                <label for="firstRegistration" class='text-emerald-700 font-semibold'>first Registration</label>
                <input type="text" name="firstRegistration" placeholder="A3" class='shadow appearance-none border-emerald-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            </div>
            <div class='flex justify-between '>
                <a href="/FormOne" use:link class='py-2 font-semibold text-2xl  rounded-md focus:outline-none hover:scale-110 hover:text-slate-700 hover:shadow-slate-700/40 ease-in-out duration-300 text-slate-400 px-3 shadow-lg shadow-slate-500/40 '>Previous</a>
                <a href="/Result" use:link  type="submit" class='py-2 font-semibold text-2xl  rounded-md focus:outline-none hover:scale-110 hover:text-emerald-700 hover:shadow-emerald-700/40 ease-in-out duration-300 text-emerald-500 px-3 shadow-lg shadow-emerald-500/40 '>Next</a>
            </div>
        </form>

    </div>
</div>