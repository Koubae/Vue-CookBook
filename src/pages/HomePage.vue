<script setup>
import {ref, watch} from "vue";

import Container from "@/components/Container.vue";
import Grid from "@/components/Grid.vue";
import ElementLine from "@/components/ElementLine.vue";

const inputText = ref("");
const inputTextNew = ref("");
const inputTextOld = ref("");

watch(inputText, (valueNew, valueOld) => {
  inputTextOld.value = valueOld;
  inputTextNew.value = valueNew;
});

</script>

<template>
  <main>
    <Container>
      <div>
        <p>Here some stuff to play Around with Vue</p>
      </div>

      <Grid>
        <Container>
          <div>
            <input type="text" placeholder="Type something..." v-model="inputText">
            <br>
            <ElementLine>
              <p>{{ inputText }}</p>
            </ElementLine>
          </div>
        </Container>

        <Container>
          <div>
            <p>Here we can see the <strong>diff</strong> between old text and new text</p>
            <ElementLine>
              <div><strong>Old:</strong></div>
              <p>{{inputTextOld}}</p>
            </ElementLine>

            <ElementLine>
              <div><strong>New:</strong></div>
              <p>{{inputTextNew}}</p>
            </ElementLine>

          </div>
        </Container>

      </Grid>


    </Container>
  </main>
</template>

<style scoped>
</style>