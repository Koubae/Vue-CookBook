<script setup>
import {ref, watch, getCurrentInstance } from "vue";
import {useCounterStore} from "@/stores/counter";

const counterStore = useCounterStore();
const stateStoreOutput = ref("");


function patchStoreCounter() {
  counterStore.$patch({count: 100});
}

function patchStoreCounterWithFunction() {
  counterStore.$patch((state) => {
    state.count = 2000;
    console.log("State --> " + state);
    stateStoreOutput.value = state;
  });
}
const app = getCurrentInstance().appContext.app;

watch(
    app.$pinia.state,
    (state) => {
      stateStoreOutput.value = state;
    },
    {deep: true}
)

</script>

<template>
  <header>
    <div class="container-center">
      <h2 class="title">
        App2 - Pinia
      </h2>
      <p>Simple demo to how to use Pinia</p>
    </div>
  </header>

  <main>
    <section>
      <article>
        <div class="container-center">
          <div>
            <p>Count is: {{ counterStore.count }}</p>
            <div class="buttons">
              <button type="button" @click="counterStore.increment">Increase Count</button>
              <button type="button" @click="counterStore.$reset">Reset</button>
            </div>
            <div class="buttons">
              <button type="button" @click="patchStoreCounter">Patch</button>
              <button type="button" @click="patchStoreCounterWithFunction">Patch + function</button>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section>
      <article>
        <div class="container-center">
          <div>
            <h3>Store State output</h3>
          </div>
          <div>
            <pre><code>{{stateStoreOutput}}</code></pre>
          </div>

        </div>
      </article>
    </section>

  </main>
</template>

<style scoped>
.container-center {
  display: grid;
  margin: 2rem 1rem;
  padding: 1rem;
}

.container-center > * {
  margin: 0 auto;
}

.title {
  text-align: center;
  padding: 2rem 1rem;
  font-size: 2.4rem;
  font-weight: 700;
  font-style: italic;
}

.buttons {
  border: .1px solid black;
  border-radius: 3px;
  padding: 1rem 2rem;
}

.buttons > button {
  margin: 0 .5rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
}

</style>
