<script>
  import 'virtual:uno.css';

  let count = 0;

  function incrementCount () {
    count += 1;
  }
</script>

<button
  on:click={incrementCount}
  class="text-white font-bold px-4 py-2 rounded bg-[#1d4ed8] w-200px"
>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
