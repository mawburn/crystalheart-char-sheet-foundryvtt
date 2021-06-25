<script lang="ts">
  export let name: string = ''
</script>

<div class="chswade-header">
  <div class="chswade-name">
    <label for="chswade-char-name">Agent</label>
    <input id="chswade-char-name" type="text" name="name" value={name} placeholder="Name" />
  </div>
  <div class="chswade-logo">
    <img
      class="chswade-chlogo"
      src="modules/crystalheart-char-sheet/assets/crystal-heart-logo.webp"
      alt="Crystal Heart Logo"
    />
    <img
      class="chswade-swlogo"
      src="modules/crystalheart-char-sheet/assets/swade-fan.webp"
      alt="SWADE Fan Logo"
    />
  </div>
</div>

<style>
  div.chswade-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }

  div.chswade-name {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    font-size: 1.42rem;
    padding-left: 1rem;
    margin-right: 0.5rem;
    font-weight: 700;
  }

  label {
    border-bottom: 2px solid transparent !important;
  }

  input[type='text'] {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    font-size: 1.42rem;
    padding: 1rem 0.5rem;
    border-bottom: 2px solid transparent !important;
    margin-right: 0.5rem;
    font-weight: 700;
  }

  input[type='text']:focus {
    border-bottom: 2px solid #182347 !important;
  }

  .chswade-logo {
    display: flex;
    align-items: flex-end;
    margin: 0.5rem 0.5rem;
  }

  .chswade-chlogo {
    width: 180px;
    height: 33px;
    margin-right: 10px;
  }

  .chswade-swlogo {
    width: 75px;
    height: 45px;
  }
</style>
