<script lang="ts">
  import Header from './Header.svelte'
  import CharInfo from './CharInfo.svelte'
  import Status from './Status.svelte'
  import type { CharacterActorData, CharacterCommon } from '../_swadeTypes/interfaces/actor-data'
  import type SwadeActor from '../_swadeTypes/module/entities/SwadeActor'

  export let actor: SwadeActor
  export let ad: CharacterCommon = (actor.data as unknown as CharacterActorData).data
  console.log(actor)
</script>

<main>
  <Header name={actor.name} />
  <CharInfo
    land={ad.details?.species.name}
    rank={ad.advances?.rank}
    advances={ad.advances?.value}
    size={ad.stats?.size}
  />
  <Status
    status={ad.status}
    wounds={ad.wounds.value}
    fatigue={ad.fatigue.value}
    parry={ad.stats.parry.value}
    toughness={[ad.stats.toughness.value, ad.stats.toughness.armor]}
  />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  main {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;
  }
</style>
