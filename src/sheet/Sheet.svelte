<script lang="ts">
  import Header from './Header.svelte'
  import CharInfo from './CharInfo.svelte'
  import Status from './Status.svelte'
  import type SwadeActor from '../_swadeTypes/module/entities/SwadeActor'

  export let actor: SwadeActor
</script>

<Header name={actor.name} />
<CharInfo land={'xyz'} rank={'Novice'} advances={1} size={0} />
<Status />

<main>x</main>

<style>
  main {
    display: flex;
  }
</style>
