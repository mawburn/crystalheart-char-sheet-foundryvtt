<script lang="ts">
  export let land: string = ''
  export let rank: string = ''
  export let advances: number = 0
  export let size: number = 0
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
    <label for="chwade-size">Size:</label>
    <input id="chswade-size" type="number" name="data.stats.size" value={size} placeholder="Size" />
  </div>

  <div>
    <label for="chswade-rank">Rank:</label>
    <select id="chswade-rank" value={rank} name="data.advances.rank">
      <option value="Novice">Novice</option>
      <option value="Seasoned">Seasoned</option>
      <option value="Veteran">Veteran</option>
      <option value="Heroic">Heroic</option>
      <option value="Legendary">Legendary</option>
    </select>
  </div>

  <div>
    <label for="chswade-adv">Advances:</label>
    <input id="chswade-adv" type="number" name="data.advances.value" value={advances} />
  </div>
</div>

<style>
  .chswade-charInfo {
    margin: 0 1rem;
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
    width: 100px;
    min-width: 100px;
  }

  input[type='number'] {
    width: 42px;
    text-align: center;
    padding: 0 0.5rem;
  }
</style>
