<script lang="ts">
  import { safeKey } from '../utils/safeKey'

  export let text: string = ''
  export let altText: string = ''
  export let color: string = '#ffffff'
  export let toggled: boolean = false
  export let name: string = ''

  const customId = safeKey('chswade', name, text)
</script>

<label
  for={customId}
  class="chswade-flip-container"
  class:chswade-flip-toggled={toggled}
  style="--flip-color: {color}"
  tabindex="0"
>
  <div class="chswade-flipper">
    <div class="chswade-flip-front">
      {text}
    </div>
    <div class="chswade-flip-back">
      {altText}
    </div>
  </div>
</label>
<input id={customId} type="checkbox" {name} checked={toggled} tabindex="-1" />

<style>
  input[type='checkbox'] {
    display: none;
  }

  .chswade-flip-container {
    border: 1px solid #242424;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
  }

  .chswade-flip-back,
  .chswade-flip-front {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .chswade-flip-back {
    background-color: var(--flip-color);
    transform: rotateX(180deg);
  }

  .chswade-flipper {
    transform-origin: 100% 213.5px; /* half of height */
  }

  .chswade-flip-toggled {
    transform: rotateX(-180deg);
  }
</style>
