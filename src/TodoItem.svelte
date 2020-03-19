<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    function remove() {
         dispatch('remove', { id });
    }

    function toggleStatus() {
        let newStatus = !complete;
        dispatch('toggle', {
            id,
            newStatus
        });
    }

    export let id;
    export let text;
    export let complete;


</script>

<style>
    .complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<li in:fly={{ x: 900, duration: 500 }}>

    <span class:complete>
        { text }
    </span>

    {#if complete}
        <button style="color: green" on:click={toggleStatus}>Complete</button>
    {:else}
        <button style="color: red" on:click={toggleStatus}>Incomplete</button>
    {/if}

    <button> on:click={remove}X</button>

</li>