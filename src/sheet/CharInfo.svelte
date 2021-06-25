<script lang="ts">
  export let land: string = ''
  export let rank: string = ''
  export let advances: number = 0
</script>

<div class="chswade-charInfo">
  <div>
    <label for="chwade-land">Land:</label>
    <input
      id="chswade-land"
      type="text"
      name="data.details.species.name"
      value={land}
      placeholder="Homeland"
    />
  </div>

  <div>
    <label for="chswade-rank">Rank:</label>
    <input
      id="chswade-rank"
      type="text"
      name="data.advances.rank"
      value={rank}
      placeholder="Rank"
    />
  </div>

  <div>
    <label for="chswade-adv">Advances:</label>
    <input id="chswade-adv" type="number" name="data.advances.value" value={advances} />
  </div>
</div>

<style>
  .chswade-charInfo {
    margin: 1rem 1rem 0;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #182347 !important;
  }

  .chswade-charInfo,
  .chswade-charInfo > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  label {
    margin-right: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.6px;
  }

  label,
  input[type='text'],
  input[type='number'] {
    padding: 0.5rem 0;
    border-bottom: 2px solid transparent !important;
  }

  input[type='text']:focus,
  input[type='number']:focus {
    border-bottom: 2px solid #182347 !important;
  }

  input[type='text'] {
    width: 150px;
    min-width: 150px;
  }

  input[type='number'] {
    width: 42px;
    text-align: center;
    padding: 0 0.5rem;
  }
</style>
