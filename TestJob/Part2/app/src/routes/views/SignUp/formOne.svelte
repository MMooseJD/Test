<script>
    import {link } from 'svelte-spa-router';
    import {validateZipCode,validateCarBrand} from '../validations/formOne.js';
    let zipCode = '';
    let carBrand = '';
    let zipCodeError = '';
    let carBrandError = '';
    let formCompleted = false;	

    function validateForm() {
        let zipCodeError = validateZipCode(zipCode);
        let carBrandError = validateCarBrand(carBrand);


    if (!zipCodeError && !carBrandError) {
    formCompleted = true;

    }
}
</script>
<div class=' w-full sm:w-1/2 md:w-1/3 md:h-64 sm:h-48 shadow-2xl rounded   '>
    <div class='text-center '>
        <h1 class='text-emerald-500 text-2xl font-semibold'>
            Form # 1
        </h1>
    </div>
    <div class='justify-center items-center flex h-48  '>

        <form class='p-6'  on:submit|preventDefault={validateForm}  >
        
            <div>
                <label for="сarBrand" class='text-emerald-700 font-semibold'>сar Brand</label>
                <input required type="text" name="сarBrand" bind:value={carBrand} placeholder="Nissan" class='shadow appearance-none border-emerald-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline {carBrandError ? 'invalid' : ''}'>
                {#if validateCarBrand(carBrand)}
                <p>{validateCarBrand(carBrand)}</p>
                {/if}
            </div>
            <div>
                <label for="zipCode" class='text-emerald-700 font-semibold'>zip Code</label>
                <input required type="text" name="zipCode" bind:value={zipCode} placeholder="65000" class=' shadow appearance-none border-emerald-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline {zipCodeError ? 'invalid' : ''}'>
                {#if validateZipCode(zipCode)}
                <p>{validateZipCode(zipCode)}</p>
                {/if}
            </div>
            <div class='flex justify-between'>
                <a href="/" use:link class='py-2 font-semibold text-2xl  rounded-md focus:outline-none hover:scale-110 hover:text-slate-700 hover:shadow-slate-700/40 ease-in-out duration-300 text-slate-400 px-3 shadow-lg shadow-slate-500/40 '>Previous</a>
                <a href="/FormSecond" use:link class='py-2 font-semibold text-2xl  rounded-md focus:outline-none hover:scale-110 hover:text-emerald-700 hover:shadow-emerald-700/40 ease-in-out duration-300 text-emerald-500 px-3 shadow-lg shadow-emerald-500/40 '>Next</a>
            </div>
        </form>

    </div>
</div>