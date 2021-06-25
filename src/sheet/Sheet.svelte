<script lang="ts">
  import Header from './Header.svelte'
  import CharInfo from './CharInfo.svelte'

  export let actor: Actor

  let data = actor?.data?.data
  let details = data?.details
</script>

<Header name={actor.name} />
<CharInfo
  land={details?.species?.name}
  rank={data?.advances?.rank}
  advances={data?.advances?.value}
/>

<style>
</style>
