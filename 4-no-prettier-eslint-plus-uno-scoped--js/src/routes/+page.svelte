<script>
  let count = 0

  function incrementCount () {
    count += 1
  }
</script>

<button
  on:click={incrementCount}
  class="w-200px bg-[#1d4ed8] px-4 py-2 text-white font-bold"
>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
