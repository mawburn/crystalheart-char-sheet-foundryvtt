<script lang="ts">
</script>

<div class="chswade-status">
  <div class="chswade-status-effect">
    <h2>Wounds</h2>
    <div class="chswade-status-counter chswade-wound-count">0/3</div>
  </div>
  <div class="chswade-statuses">
    <ul>
      <li>Shaken</li>
      <li>Distracted</li>
      <li>Vulnerable</li>
    </ul>
    <ul>
      <li>Stunned</li>
      <li>Entangled</li>
      <li>Bound</li>
    </ul>
  </div>
  <div class="chswade-status-effect">
    <h2>Fatigue</h2>
    <div class="chswade-status-counter chswade-fatigue-count">0/2</div>
  </div>
  <div class="chswade-status-effect">
    <h2>Parry</h2>
    <div class="chswade-status-counter chswade-derived">7</div>
  </div>
  <div class="chswade-status-effect">
    <h2>Toughness</h2>
    <div class="chswade-status-counter chswade-derived">
      <div>18</div>
      <span
        style="background: url('modules/crystalheart-char-sheet/assets/shield.svg') center / contain no-repeat"
        >10</span
      >
    </div>
  </div>
</div>

<style>
  .chswade-status {
    display: flex;
    justify-content: space-between;
    border: 2px solid #242424;
    padding: 0.25rem 0.5rem;
    border-radius: 20px 2px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }

  .chswade-statuses {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    list-style: none;
    padding: 0;
  }

  ul:last-child {
    margin-left: 0.5rem;
    align-items: flex-end;
  }

  li {
    font-size: 1rem;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    margin-bottom: -3px;
  }

  .chswade-status-effect {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chswade-status-counter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
    width: 100px;
    height: 100px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .chswade-wound-count {
    background: url('modules/crystalheart-char-sheet/assets/wounds.png') center / contain no-repeat;
  }

  .chswade-fatigue-count {
    background: url('modules/crystalheart-char-sheet/assets/fatigue.png') center / contain no-repeat;
  }

  .chswade-derived {
    background: url('modules/crystalheart-char-sheet/assets/circle.png') center / contain no-repeat;
  }

  .chswade-derived span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    font-size: 1rem;
    margin-left: 5px;
    margin-right: -5px;
  }
</style>
